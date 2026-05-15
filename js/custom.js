// 为不同页面添加 body 类，以便 CSS 区分背景
(function() {
    var path = window.location.pathname;
    var body = document.body;

    // 首页（根路径或 /index.html）
    if (path === '/' || path === '/index.html') {
        body.classList.add('page-home');
    }
    // 关于页
    else if (path === '/about/') {
        body.classList.add('page-about');
    }
    else if (path === '/guestbook/') {
        body.classList.add('page-guestbook');
    }
    // 文章页（路径以 /posts/ 开头）
    else if (path.indexOf('/posts/') === 0) {
        body.classList.add('page-post');
    }
    
    // 可选：友链页、归档页等也可以单独指定，这里统一归为 'page-other'
    else {
        body.classList.add('page-other');
    }
})();


/*如果其他页面（比如归档页）也想单独指定背景：你可以在 custom.js 的 else if 中添加更多判断，例如：

js
else if (path === '/archives/') {
    body.classList.add('page-archive');
}
然后在 CSS 中添加 body.page-archive 的背景图即可。*/

// 强制显示 Busuanzi 统计（解决自动显示失败的问题）
document.addEventListener('DOMContentLoaded', function() {
    var uv = document.getElementById('busuanzi_container_site_uv');
    var pv = document.getElementById('busuanzi_container_site_pv');
    if (uv) uv.style.display = 'inline';
    if (pv) pv.style.display = 'inline';
});