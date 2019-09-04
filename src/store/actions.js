// 1.显示video, context解构
export const showVideo = ({ commit }) => {
  commit('show')
}
// 2.隐藏
export const hideVideo = ({ commit }) => {
  commit('hide')
}
// 3.提交高度值
export const setFooterHeight = ({ commit }, height) => {
  commit('setFooterHeight', height)
}
// 4.显示foot
export const showFoot = ({ commit }) => {
  commit('showFoot')
}
// 5.隐藏
export const hideFoot = ({ commit }) => {
  commit('hideFoot')
}
// 6.foot可视
export const visibleFoot = ({ commit }) => {
  commit('visibleFoot')
}
// 7.foot 不可视
export const invisibleFoot = ({ commit }) => {
  commit('invisibleFoot')
}
// 8.axios loading
export const showWaiting = ({ commit }) => {
  commit('showWaiting')
}
export const hideWaiting = ({ commit }) => {
  commit('hideWaiting')
}
