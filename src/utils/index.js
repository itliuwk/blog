/**
 * 生成随机数
 * @param m
 * @param n
 * @returns {number}
 */
export function random(m, n) {
  return Math.floor(Math.random() * (m - n) + n)
}


export function updateTitle(title = '') {
  if (title) {
    title = title + ' - '
  }
  document.title = title + '刘伟坤 - 个人博客 | 随心IT | 刘伟坤IT | 刘伟坤博客 | 一个分享技术文章,热门资源的博客'
}

/**
 * 随机图片
 */
export function random_photo() {
  return `https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&id=` + Math.random()
}


/**
 * 随机图片
 */
export function random_bg_photo() {
  // return `https://wallpaper.infinitynewtab.com/wallpaper/${random(1, 1000)}.jpg`
  // return `http://api.laolibab.cn/king/tupian/tpdm/${random(1, 500)}.jpg`
  // return `http://sxitw.cn/imgs/${random(1, 39)}.jpg`
  return `https://raw.githubusercontent.com/itliuwk/blog/master/src/assets/bg/${random(1, 59)}.jpg`
  // return `http://imgae.sxitw.cn/${random(1, 39)}.jpg`
}


/**
 * 随机微语图片
 */
export function random_whisper_photo() {

  return `https://raw.githubusercontent.com/itliuwk/blog/master/src/assets/whisper/${random(1, 20)}.jpeg`
}
