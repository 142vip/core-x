const fs = require('node:fs')
const path = require('node:path')
const { vipAxios } = require('@142vip/axios')

// 接口信息
const API_URL = 'https://yhrlzyfww.hrss.hzyuhang.cn:11446/zpgl/webApi/getAllCmsInfo'
const BASE_PARAMS = {
  // channelId: 2,
  pageSize: 16797,
}
const OUTPUT_FILE = path.join(__dirname, 'spider_data.json')

/**
 * 发送请求获取数据
 * @param {number} pageIndex - 页码
 * @returns {Promise<object>} 响应数据
 */
async function fetchData(pageIndex) {
  console.log(11, pageIndex)
  try {
    const response = await vipAxios.post(API_URL, new URLSearchParams({
      ...BASE_PARAMS,
      // pageIndex,
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    return response.data
  }
  catch (error) {
    console.error(`获取第 ${pageIndex} 页数据失败:`, error.message)
    // 如果请求失败，尝试重试
    if (error.response?.status === 429) {
      console.log('请求过于频繁，等待2秒后重试...')
      await new Promise(resolve => setTimeout(resolve, 2000))
      return fetchData(pageIndex)
    }
    throw error
  }
}

/**
 * 爬虫主函数
 */
async function spider() {
  let allData = []
  let currentPage = 1
  let totalPages = 1
  let totalCount = 0

  try {
    // 获取第一页数据以确定总页数
    const firstPageData = await fetchData(currentPage)

    if (!firstPageData.success) {
      console.error('请求失败:', firstPageData.message || '未知错误')
      return
    }

    // 获取总记录数
    totalCount = firstPageData.totalcount || 0
    if (totalCount === 0) {
      console.log('没有找到数据')
      return
    }

    // 计算总页数
    totalPages = Math.ceil(totalCount / BASE_PARAMS.pageSize)
    console.log(`开始爬取数据，共 ${totalCount} 条记录，${totalPages} 页`)

    // 添加第一页数据
    allData = allData.concat(firstPageData.data || [])
    console.log(`已获取第 ${currentPage}/${totalPages} 页数据，累计 ${allData.length} 条`)

    // 爬取剩余页面
    for (currentPage = 2; currentPage <= totalPages; currentPage++) {
      // 为了避免请求过于频繁，添加适当的延迟
      await new Promise(resolve => setTimeout(resolve, 1000))

      const pageData = await fetchData(currentPage)
      if (pageData.success) {
        allData = allData.concat(pageData.data || [])
        console.log(`已获取第 ${currentPage}/${totalPages} 页数据，累计 ${allData.length} 条`)
      }
      else {
        console.error(`第 ${currentPage} 页数据获取失败，跳过`)
      }
    }

    // 将所有数据写入文件
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allData, null, 2), 'utf-8')
    console.log(`爬取完成！共获取 ${allData.length} 条数据，已保存到 ${OUTPUT_FILE}`)
  }
  catch (error) {
    console.error('爬虫执行过程中发生错误:', error)
    // 即使发生错误，也保存已获取的数据
    if (allData.length > 0) {
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allData, null, 2), 'utf-8')
      console.log(`已将部分数据保存到 ${OUTPUT_FILE}`)
    }
  }
}

// 启动爬虫
spider()
