import comp from "D:/works/codes/owner/linhoonyu.github.io/docs/.vuepress/.temp/pages/en/demo/m2l2eyvd/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/m2l2eyvd/\",\"title\":\"foo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2024/09/13 09:53:34\",\"permalink\":\"/en/demo/m2l2eyvd/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"en/notes/demo/foo.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
