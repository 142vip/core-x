const fs = require('node:fs')

// 读取JSON数据
function readJsonData() {
  try {
    const data = fs.readFileSync('./spider_data.json', 'utf8')
    return JSON.parse(data)
  }
  catch (error) {
    console.error('读取JSON文件失败:', error)
    return []
  }
}

// 从标题中提取人名
function extractNameFromTitle(title) {
  // 匹配"关于XXX被认定为高层次人才的公示"格式
  const nameMatch = title.match(/关于(.*?)被认定为高层次人才的公示/)
  if (nameMatch && nameMatch[1]) {
    return nameMatch[1].trim()
  }
  return ''
}

// 从内容中提取信息
function extractInfoFromContent(content) {
  const result = {
    company: '',
    reason: '',
    date: '',
  }

  // 提取工作单位
  const companyMatch = content.match(/工作单位：(.*?)）/)
  if (companyMatch && companyMatch[1]) {
    result.company = companyMatch[1].trim()
  }

  // 提取认定原因
  const reasonMatch = content.match(/拟认定为([A-Z]类.*?高层次人才)/)
  if (reasonMatch && reasonMatch[1]) {
    result.reason = reasonMatch[1].trim()
  }

  // 提取公示日期
  const dateMatch = content.match(/(\d{4}年\d{2}月\d{2}日)/)
  if (dateMatch && dateMatch[1]) {
    result.date = dateMatch[1].trim()
  }

  return result
}

// 转换数据为CSV格式
function convertToCSV(data) {
  const headers = '姓名,公司,认定原因,认定日期,发布日期\n'
  const rows = data.map((item) => {
    const name = extractNameFromTitle(item.title)
    const info = extractInfoFromContent(item.content)

    // 处理CSV中的特殊字符，如逗号和引号
    const formatField = (field) => {
      if (field.includes(',') || field.includes('"')) {
        return `"${field.replace(/"/g, '""')}"`
      }
      return field
    }

    return `${formatField(name)},${formatField(info.company)},${formatField(info.reason)},${formatField(info.date)},${item.publishdate}`
  })

  return headers + rows.join('\n')
}

// 保存CSV文件
function saveCSV(csvContent) {
  try {
    fs.writeFileSync('./talent_data.csv', csvContent, 'utf8')
    console.log('CSV文件已成功生成：talent_data.csv')
  }
  catch (error) {
    console.error('保存CSV文件失败:', error)
  }
}

// 主函数
function main() {
  const jsonData = readJsonData()
  if (jsonData.length === 0) {
    console.log('没有找到有效数据')
    return
  }

  console.log(`共找到 ${jsonData.length} 条记录`)

  // 过滤出高层次人才公示的记录
  const talentData = jsonData.filter(item =>
    item.summary && item.summary.includes('余杭区高层次人才公示'),
  )

  console.log(`筛选出 ${talentData.length} 条高层次人才公示记录`)

  const csvContent = convertToCSV(talentData)
  saveCSV(csvContent)
}

// 执行主函数
main()
