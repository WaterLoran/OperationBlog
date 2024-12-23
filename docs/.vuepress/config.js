
module.exports = {
    title: '运营知识体系',
    logo: '/images/logo/猞猁.png',
    description: '运营知识体系',
    theme: 'reco',
    themeConfig: {
        nav: [{'text': '首页', 'link': '/'}, {'text': '核心职能', 'items': [{'text': '产品运营', 'link': '/核心职能/产品运营/功能上线推广'}, {'text': '内容运营', 'link': '/核心职能/内容运营/内容分发'}, {'text': '商业化运营', 'link': '/核心职能/商业化运营/品牌合作'}, {'text': '数据运营', 'link': '/核心职能/数据运营/数据采集与分析'}, {'text': '活动运营', 'link': '/核心职能/活动运营/数据复盘'}, {'text': '渠道运营', 'link': '/核心职能/渠道运营/渠道扩展'}, {'text': '用户运营', 'link': '/核心职能/用户运营/用户召回'}]}],
        sidebar: {'/核心职能/': [{'title': '产品运营', 'path': '/核心职能/产品运营/功能上线推广', 'collapsable': false, 'children': [{'title': '功能上线推广', 'path': '/核心职能/产品运营/功能上线推广'}, {'title': '教育用户', 'path': '/核心职能/产品运营/教育用户'}, {'title': '用户反馈与优化', 'path': '/核心职能/产品运营/用户反馈与优化'}]}, {'title': '内容运营', 'path': '/核心职能/内容运营/内容分发', 'collapsable': false, 'children': [{'title': '内容分发', 'path': '/核心职能/内容运营/内容分发'}, {'title': '内容效果评估', 'path': '/核心职能/内容运营/内容效果评估'}, {'title': '内容策划', 'path': '/核心职能/内容运营/内容策划'}, {'title': '社区管理', 'path': '/核心职能/内容运营/社区管理'}]}, {'title': '商业化运营', 'path': '/核心职能/商业化运营/品牌合作', 'collapsable': false, 'children': [{'title': '品牌合作', 'path': '/核心职能/商业化运营/品牌合作'}, {'title': '商业变现', 'path': '/核心职能/商业化运营/商业变现'}, {'title': '广告投放', 'path': '/核心职能/商业化运营/广告投放'}]}, {'title': '数据运营', 'path': '/核心职能/数据运营/数据采集与分析', 'collapsable': false, 'children': [{'title': '数据采集与分析', 'path': '/核心职能/数据运营/数据采集与分析'}, {'title': '数据驱动决策', 'path': '/核心职能/数据运营/数据驱动决策'}, {'title': '精细化运营', 'path': '/核心职能/数据运营/精细化运营'}]}, {'title': '活动运营', 'path': '/核心职能/活动运营/数据复盘', 'collapsable': false, 'children': [{'title': '数据复盘', 'path': '/核心职能/活动运营/数据复盘'}, {'title': '活动执行', 'path': '/核心职能/活动运营/活动执行'}, {'title': '活动策划', 'path': '/核心职能/活动运营/活动策划'}]}, {'title': '渠道运营', 'path': '/核心职能/渠道运营/渠道扩展', 'collapsable': false, 'children': [{'title': '渠道扩展', 'path': '/核心职能/渠道运营/渠道扩展'}, {'title': '渠道投放', 'path': '/核心职能/渠道运营/渠道投放'}, {'title': '渠道维护', 'path': '/核心职能/渠道运营/渠道维护'}]}, {'title': '用户运营', 'path': '/核心职能/用户运营/用户召回', 'collapsable': false, 'children': [{'title': '用户召回', 'path': '/核心职能/用户运营/用户召回'}, {'title': '用户增长', 'path': '/核心职能/用户运营/用户增长'}, {'title': '用户活跃', 'path': '/核心职能/用户运营/用户活跃'}, {'title': '用户留存', 'path': '/核心职能/用户运营/用户留存'}]}], '/': [{'title': '运营知识体系', 'path': '/', 'collapsable': false, 'children': [{'title': '运营知识体系', 'path': '/'}]}]},
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
