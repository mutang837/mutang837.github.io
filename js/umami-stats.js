// umami-stats.js
(async function fetchUmamiStats() {
    // --- 配置区域 ---
    // 1. 你的 Website ID
    const WEBSITE_ID = '57a8dc75-e61d-41c0-9a3b-1aefefd29c6e';
    // 2. 你的分享 Token（就是你链接最后那一串）
    const SHARE_TOKEN = 'YXsUO6dkeh91QXSm';
    // 3. API 基础链接
    const API_BASE_URL = 'https://umami-olive-gamma.vercel.app/api';
    // --- 配置结束 ---

    // 使用公开分享的 API 接口，不需要任何登录权限！
    const statsUrl = `${API_BASE_URL}/share/${SHARE_TOKEN}/stats?websiteId=${WEBSITE_ID}`;

    try {
        // 获取从你博客建站到现在的全量时间戳
        const startAt = new Date('2026-05-13').getTime(); // 对应你 fluid 的配置时间
        const endAt = Date.now();

        // 发起公开请求
        const statsRes = await fetch(`${statsUrl}&startAt=${startAt}&endAt=${endAt}`);
        const statsData = await statsRes.json();

        // 更新页面数据显示
        if (statsData && !statsData.error) {
            const pvElement = document.getElementById('umami-pv');
            const uvElement = document.getElementById('umami-uv');
            // 核心修改：公开接口返回的结构通常是 statsData.pageviews.value
            if (pvElement) pvElement.innerText = statsData.pageviews.value || 0;
            if (uvElement) uvElement.innerText = statsData.visitors.value || 0;
        }
    } catch (error) {
        console.error('Umami 统计加载失败:', error);
    }
})();