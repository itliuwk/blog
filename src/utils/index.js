/**
 * 生成随机数
 * @param m
 * @param n
 * @returns {number}
 */
export function random(m,n) {
  return Math.floor(Math.random() * (m - n) + n)
}


export function random_photo() {
  return `https://wallpaper.infinitynewtab.com/wallpaper/${random(1, 1000)}.jpg`
}
