import { throttle } from 'utils/tool'

// 滚动加载混入
export const scrollMixin = {
  methods: {
    doScrollLoading () {
      // 滚动超出高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // 滚动区域高度
      let scrollHeight =
        document.body.scrollHeight || document.body.scrollHeight
      // 可视区高度
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight

      if (scrollHeight - clientHeight - scrollTop <= this.bottomHeight) {
        this.loadMore()
      }
    }
  },
  computed: {
    bottomHeight () {
      return this.$store.state.footerHeight
    }
  },
  mounted () {
    window.addEventListener('scroll', throttle(this.doScrollLoading, 100, 1))
  },
  destroyed () {
    window.removeEventListener(
      'scroll',
      throttle(this.doScrollLoading, 100, 1)
    )
  }
}
