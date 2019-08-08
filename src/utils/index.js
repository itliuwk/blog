/**
 * 生成随机数
 * @param m
 * @param n
 * @returns {number}
 */
export function random(m,n) {
  return Math.floor(Math.random() * (m - n) + n)
}
