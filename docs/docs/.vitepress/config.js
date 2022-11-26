
module.exports = {
    // 网站标题
    title: '我的文档',
    // 网站描述
    description: 'ruran-ui with vitePress',
    // 打包目录
    dest: './dist',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      siteTitle: '组件库文档',
      sidebar: {
        '/componentsDocs/':[
          {
            text:"快速开始",
            items:[
              {text:'卡片',link:"/componentsDocs/card.md"},
            ]
          }
        ]
      },
      smoothScroll: true,
      // 导航栏配置
      nav:[
          {text: '组件库', link: '/componentsDocs/',activeMatch:'/componentsDocs/' },
          // {text: '掘金', link: 'https://juejin.cn/user/1855631359481847/posts'},
          {text: 'Github', link: 'https://github.com/xiaoruran'}
      ],
    },
    plugins: [
        '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
        '@vuepress/back-to-top',          // 返回顶部插件
        '@vuepress/medium-zoom',          // 图片预览插件
        '@vuepress/nprogress',        //页面顶部进度条
    ],
}