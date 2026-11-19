'use strict';

/**
 * 关闭不蒜子（busuanzi）统计。
 *
 * 主题在文章页会把「浏览量容器」和「busuanzi 脚本」一起渲染（见
 * layout/_partials/post/meta-top.ejs 的 busuanzi 分支），配置里无法只关脚本。
 * 而页脚的 vercount 脚本本身就会填充 busuanzi_value_page_pv 并显示该容器，
 * 所以这里只移除脚本标签：容器留下，数字改由 vercount 提供，避免两套统计互相覆盖。
 */
hexo.extend.filter.register('after_render:html', function (html) {
  return html.replace(/<script\b[^>]*busuanzi\.ibruce\.info[^>]*>\s*<\/script>/gi, '');
});
