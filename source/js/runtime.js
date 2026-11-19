// 博客运行时间统计
function showRuntime() {
    const startDate = new Date('2026-05-13T22:14:15+08:00'); // 你的起始时间（东八区）
    const now = new Date();
    const diff = now - startDate; // 毫秒差

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (86400000)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (3600000)) / (1000 * 60));
    const seconds = Math.floor((diff % (60000)) / 1000);

    const runtimeStr = `博客已运行 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
    const elem = document.getElementById('blog-runtime');
    if (elem) elem.textContent = runtimeStr;
}

// 每秒更新一次（精确到秒）
setInterval(showRuntime, 1000);
showRuntime(); // 立即执行一次