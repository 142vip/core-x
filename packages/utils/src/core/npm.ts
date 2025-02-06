/**
 * 接受版本字符串模板（例如“release v”或“This is the %s release”）。
 * - 如果模板包含任何“%s”占位符，则它们将替换为版本号;
 * - 否则，版本号将追加到字符串
 */
function formatVersionStr(template: string, newVersion: string): string {
  return template.includes('%s') ? template.replace(/%s/g, newVersion) : `${template}${newVersion}`
}

export const VipNpm = {
  formatVersionStr,
}
