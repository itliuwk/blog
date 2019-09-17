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
  // return `https://wallpaper.infinitynewtab.com/wallpaper/${random(1, 1000)}.jpg`
  // return `http://api.laolibab.cn/king/tupian/tpdm/${random(1, 500)}.jpg`
  // return `http://sxitw.cn/imgs/${random(1, 39)}.jpg`
  return `https://raw.githubusercontent.com/itliuwk/blog/master/src/assets/images/${random(1, 8)}.jpg`
  // return `../images/${random(1, 39)}.jpg`
}




export function random_bg_photo() {
  // return `https://wallpaper.infinitynewtab.com/wallpaper/${random(1, 1000)}.jpg`
  // return `http://api.laolibab.cn/king/tupian/tpdm/${random(1, 500)}.jpg`
  // return `http://sxitw.cn/imgs/${random(1, 39)}.jpg`
  return `https://raw.githubusercontent.com/itliuwk/blog/master/src/assets/bg/${random(1, 39)}.jpg`
  // return `http://imgae.sxitw.cn/${random(1, 39)}.jpg`
}
