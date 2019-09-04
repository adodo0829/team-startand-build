// 1.显示video
export const show = state => {
  state.isShowVideo = true
}
// 2.隐藏video
export const hide = state => {
  state.isShowVideo = false
}
// 3.修改底部高度
export const setFooterHeight = (state, height) => {
  state.footerHeight = height
}
// 4.显示底部
export const showFoot = state => {
  state.isShowFoot = true
}
// 5.隐藏底部
export const hideFoot = state => {
  state.isShowFoot = false
}
// 6.特定页面显示隐藏底部
export const visibleFoot = state => {
  state.isFootVisible = true
}
// 7.隐藏底部
export const invisibleFoot = state => {
  state.isFootVisible = false
}
export const showWaiting = state => {
  state.isWaiting = true
}
export const hideWaiting = state => {
  state.isWaiting = false
}
