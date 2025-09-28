const fs = require('node:fs')
const path = require('node:path')
// 文件路径
const INPUT_FILE = path.join(__dirname, 'spider_data.json')
const CLEANED_FILE = path.join(__dirname, 'cleaned_talent_data.json')
const REPORT_FILE = path.join(__dirname, 'talent_report.json')

/**
 * 从文本中提取姓名
 * @param {string} text - 包含姓名的文本
 * @returns {string} 提取的姓名
 */
function extractName(text) {
  // 尝试从标题中提取姓名
  const titleMatch = text.match(/关于([\u4E00-\u9FA5]+)被认定为高层次人才的公示/)
  if (titleMatch && titleMatch[1]) {
    return titleMatch[1].trim()
  }

  // 尝试从内容中提取姓名
  const contentMatch = text.match(/([\u4E00-\u9FA5]+)（工作单位/)
  if (contentMatch && contentMatch[1]) {
    return contentMatch[1].trim()
  }

  return '未知姓名'
}

/**
 * 从文本中提取工作单位
 * @param {string} text - 包含工作单位的文本
 * @returns {string} 提取的工作单位
 */
function extractCompany(text) {
  const match = text.match(/工作单位：([^）]+)）/)
  if (match && match[1]) {
    return match[1].trim()
  }
  return '未知单位'
}

/**
 * 从HTML内容中提取人才类别
 * @param {string} html - 包含人才类别的HTML内容
 * @returns {string} 提取的人才类别
 */
function extractTalentType(html) {
  const match = html.match(/拟认定为([A-F]+类)/)
  if (match && match[1]) {
    return match[1].trim()
  }
  return '未知类别'
}

/**
 * 清洗数据并生成报表
 */
function cleanDataAndGenerateReport() {
  try {
    // 读取原始数据
    console.log('正在读取原始数据...')
    const rawData = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'))

    console.log(`共读取到 ${rawData.length} 条记录`)

    // 过滤出高层次人才公示的数据
    const talentData = rawData.filter(item =>
      item.summary === '余杭区高层次人才公示'
      || item.title.includes('被认定为高层次人才'),
    )

    console.log(`筛选出 ${talentData.length} 条高层次人才公示记录`)

    // 清洗数据，提取关键信息
    const cleanedData = talentData.map((item, index) => {
      try {
        return {
          id: item.id || `unknown_${index}`,
          name: extractName(item.title || item.content),
          company: extractCompany(item.content || ''),
          publishDate: item.publishdate || item.showdate || '未知日期',
          talentType: extractTalentType(item.content || ''),
          originalTitle: item.title || '',
          originalContent: item.content || '',
        }
      }
      catch (error) {
        console.error(`处理第 ${index} 条数据时出错:`, error.message)
        return null
      }
    }).filter(Boolean) // 过滤掉处理失败的数据

    console.log(`成功清洗 ${cleanedData.length} 条记录`)

    // 生成统计报表
    console.log('正在生成统计报表...')
    const report = generateReport(cleanedData)

    // 保存清洗后的数据
    fs.writeFileSync(CLEANED_FILE, JSON.stringify(cleanedData, null, 2), 'utf-8')
    console.log(`清洗后的数据已保存到 ${CLEANED_FILE}`)

    // 保存统计报表
    fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2), 'utf-8')
    console.log(`统计报表已保存到 ${REPORT_FILE}`)

    // 打印报表摘要
    printReportSummary(report)
  }
  catch (error) {
    console.error('处理数据时发生错误:', error)
  }
}

/**
 * 生成统计报表
 * @param {Array} data - 清洗后的数据
 * @returns {object} 统计报表
 */
function generateReport(data) {
  // 按日期统计
  const dateDistribution = {}
  data.forEach((item) => {
    const date = item.publishDate
    dateDistribution[date] = (dateDistribution[date] || 0) + 1
  })

  // 按公司统计
  const companyDistribution = {}
  data.forEach((item) => {
    const company = item.company
    companyDistribution[company] = (companyDistribution[company] || 0) + 1
  })

  // 按人才类别统计
  const talentTypeDistribution = {}
  data.forEach((item) => {
    const type = item.talentType
    talentTypeDistribution[type] = (talentTypeDistribution[type] || 0) + 1
  })

  // 排序处理
  const sortedByDate = Object.entries(dateDistribution)
    .sort((a, b) => new Date(b[0]) - new Date(a[0]))
    .reduce((acc, [date, count]) => ({ ...acc, [date]: count }), {})

  const topCompanies = Object.entries(companyDistribution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 60) // 只取前20家公司

  return {
    totalCount: data.length,
    dateRange: {
      start: Math.min(...data.map(item => new Date(item.publishDate))),
      end: Math.max(...data.map(item => new Date(item.publishDate))),
    },
    dateDistribution: sortedByDate,
    talentTypeDistribution,
    topCompanies,
    detailedData: data,
  }
}

/**
 * 打印报表摘要
 * @param {object} report - 统计报表
 */
function printReportSummary(report) {
  console.log('\n===== 报表摘要 =====')
  console.log(`总记录数: ${report.totalCount}`)
  console.log(`日期范围: ${new Date(report.dateRange.start).toLocaleDateString()} 至 ${new Date(report.dateRange.end).toLocaleDateString()}`)

  console.log('\n人才类别分布:')
  Object.entries(report.talentTypeDistribution).forEach(([type, count]) => {
    console.log(`  ${type}: ${count} 人`)
  })

  console.log('\n人才数量最多的前20家公司:')
  report.topCompanies.slice(0, 20).forEach(([company, count], index) => {
    console.log(`  ${index + 1}. ${company}: ${count} 人`)
  })

  console.log('\n===== 处理完成 =====')
}

// 运行数据清洗和报表生成
cleanDataAndGenerateReport()
