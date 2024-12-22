
module.exports = {
    title: '运营知识体系',
    logo: '/images/logo/猞猁.png',
    description: '运营知识体系',
    theme: 'reco',
    themeConfig: {
        nav: [{'text': '首页', 'link': '/'}, {'text': '核心职能', 'items': [{'text': '用户运营', 'link': '/核心职能/用户运营/用户召回'}]}],
        sidebar: {'/核心职能/': [{'title': '用户运营', 'path': '/核心职能/用户运营/用户召回', 'collapsable': false, 'children': [{'title': '用户召回', 'path': '/核心职能/用户运营/用户召回'}, {'title': '用户增长', 'path': '/核心职能/用户运营/用户增长'}, {'title': '用户活跃', 'path': '/核心职能/用户运营/用户活跃'}, {'title': '用户留存', 'path': '/核心职能/用户运营/用户留存'}]}], '/': [{'title': '运营知识体系', 'path': '/', 'collapsable': false, 'children': [{'title': '运营知识体系', 'path': '/'}]}]},
    },
enhanceAppFiles: [
    {
        name: 'custom-footer',
        content: `
            export default ({
                router
            }) => {
                router.afterEach((to, from) => {
                    if (typeof window !== 'undefined') {
                        // 检查是否已经存在页脚，避免重复添加
                        if (!document.querySelector('.custom-footer')) {
                            const footer = document.createElement('footer');
                            footer.className = 'custom-footer'; // 给页脚加一个类名
                            footer.innerHTML = \`
                            <footer style="text-align: center; margin-top: 0px; padding: 0px;">
                            <p>粤ICP备2024288002号 | copyright © 2024-present</p>
                            </footer>
                            \`;
                            document.body.appendChild(footer);
                        }
                    }
                });
            };
        `
    }
],
plugins: [
    '@vuepress/plugin-back-to-top', // 返回顶部插件
    '@vuepress/plugin-medium-zoom', // 图片放大插件
]
}
