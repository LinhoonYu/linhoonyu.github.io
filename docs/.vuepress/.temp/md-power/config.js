import { defineClientConfig } from 'vuepress/client'
import Plot from 'D:/works/codes/owner/linhoonyu.github.io/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.98_typescript@5.6.2_vuepress@2.0.0-rc.15_@vuepress+bundler-_v44jqgnlfdvs76f5ynsaoqy6qy/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'D:/works/codes/owner/linhoonyu.github.io/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.98_typescript@5.6.2_vuepress@2.0.0-rc.15_@vuepress+bundler-_v44jqgnlfdvs76f5ynsaoqy6qy/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'
import '@internal/md-power/file-tree.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
