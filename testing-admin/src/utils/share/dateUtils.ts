/** 格式化时间
 * https://www.jianshu.com/p/865f60ea01c1
 * 调用 FormatDate(strDate, "yyyy-MM-dd HH:mm:ss")
 * @param timestamp （中国标准时间）时间戳等
 * @param strFormat 返回格式
 * @returns
 */
export function formatDate(timestamp: number, strFormat = 'yyyy-MM-dd HH:mm:ss'): string {
  if (!timestamp) return ''
  const strDate = new Date(timestamp)
  const dict = {
    yyyy: strDate.getFullYear(),
    M: strDate.getMonth() + 1,
    d: strDate.getDate(),
    H: strDate.getHours(),
    m: strDate.getMinutes(),
    s: strDate.getSeconds(),
    MM: ('' + (strDate.getMonth() + 101)).substring(1),
    dd: ('' + (strDate.getDate() + 100)).substring(1),
    HH: ('' + (strDate.getHours() + 100)).substring(1),
    mm: ('' + (strDate.getMinutes() + 100)).substring(1),
    ss: ('' + (strDate.getSeconds() + 100)).substring(1),
  }
  return strFormat.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function (...args) {
    return dict[args[0]]
  })
}
