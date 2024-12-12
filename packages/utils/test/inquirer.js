import { promptCheckBox, promptConfirm } from '@142vip/utils'

(async () => {
  const app = await promptCheckBox([1, 2, 3, 4, 5, 6, 7, 8, 9])
  console.log('promptCheckBox', app)

  const isClean = await promptConfirm('是否删除?')
  const isCleanByDefault = await promptConfirm('是否删除?', true)
  console.log('promptConfirm:', isClean, isCleanByDefault)
})()
