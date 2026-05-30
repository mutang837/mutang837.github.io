/**
 * =====================================================
 * 页面背景切换脚本（用于 Fluid 主题）
 * 功能：根据当前页面的 URL 路径，给 <body> 添加不同的 class
 *       然后在 custom.css 中通过 body.page-xxx 设置不同的背景图
 * 作者：江枫渔火
 * 最后更新：2026-05-17
 * =====================================================
 */

(function() {
    // 获取当前页面的路径，例如： '/'、'/about/'、'/posts/xxx.html'
    var path = window.location.pathname;
    var body = document.body;

    // ========== 规则1：首页（根路径或 /index.html） ==========
    if (path === '/' || path === '/index.html' || path.indexOf('/page/') === 0) {
    body.classList.add('page-home');
}
    // ========== 规则2：关于页（路径以 /about/ 开头或就是 /about/） ==========
    else if (path === '/about/') {
        body.classList.add('page-about');
    }
    // ========== 规则3：文章页（路径以 /posts/ 开头） ==========
    // 因为你的文章 permalink 格式是 /posts/:abbrlink.html
    else if (path.indexOf('/posts/') === 0) {
        body.classList.add('page-post');
    }
    // ========== 规则4：其他所有页面（归档、分类、标签、友链、404 等） ==========
    // 如果你想让归档页用单独的背景，可以在这里增加新的 else if
    else {
        body.classList.add('page-other');
    }

    // ========== 可选扩展：如果需要为归档页单独设置背景 ==========
    // 取消下面的注释，并按需添加
    /*
    else if (path === '/archives/') {
        body.classList.add('page-archive');
    }
    else if (path === '/categories/') {
        body.classList.add('page-category');
    }
    else if (path === '/tags/') {
        body.classList.add('page-tag');
    }
    else if (path === '/links/') {
        body.classList.add('page-links');
    }
    else if (path === '/404.html') {
        body.classList.add('page-404');
    }
    */
})();

/**
 * =====================================================
 * 使用说明：
 * 1. 本脚本会在页面加载时自动运行，为 <body> 添加一个或多个 class。
 * 2. 对应的 CSS 规则在 custom.css 中定义，例如：
 *    body.page-home { background-image: url('/img/bg/home.webp'); }
 *    body.page-about { background-image: url('/img/bg/about.webp'); }
 *    ...
 * 3. 如果你想增加新页面的背景，只需：
 *    a) 在上面的 else if 链中添加一个判断，添加对应的 class。
 *    b) 在 custom.css 中增加 body.新class名的背景图规则。
 * =====================================================
 */