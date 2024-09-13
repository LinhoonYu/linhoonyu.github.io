
import { useCopyCode } from 'D:/works/codes/owner/linhoonyu.github.io/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.98_typescript@5.6.2_vue@3.5.4_typescript@5.6.2__vuepr_lfv2rl53yzg2jxwthdl46bu7yu/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'D:/works/codes/owner/linhoonyu.github.io/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.98_typescript@5.6.2_vue@3.5.4_typescript@5.6.2__vuepr_lfv2rl53yzg2jxwthdl46bu7yu/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
