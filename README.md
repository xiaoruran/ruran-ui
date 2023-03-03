# ruran-ui 组件库

### 快速开始

#### 1. 安装组件库
```bash
    npm install ruran-ui
```

#### 2. 引用组件库

```javascript
    // 全部引入
    import 'ruran-ui/dist/css/index.css';
    import UI from 'ruran-ui';
    Vue.use(UI);

    // 按需引入(引入Card组件)
    import 'ruran-ui/dist/css/demo.css';
    import RCard from 'ruran-ui/dist/card.umd';
    Vue.use(RCard);
```

#### 3. 使用组件
```html
    <r-card />
```


### 共建组件库
本组件库采用vue2.x版本开发，组件库文档使用vitepress进行，目前暂未发布上线

```bash
npm run docs:dev
```
本地查看组件库文档

#### 目录结构
`componnets`为核心组件代码
`docs`为组件库文档，采用vitepress进行编辑维护开发
`example`为组件库测试代码
`public`为静态公共资源

#### 组件库更新，npm发布
1. 注册npm账号
2. 新建package仓库
3. 改造package.json文件。private属性去掉，加上descriptions描述信息，加上main字段，指明入口文件，加上keywords关键词，方便搜索，加上anthor作者信息，加上files字段指明发布的文件目录。
4. 发布组件库
   + `npm login` 登录npm账户
   + `npm public` 发布npm组件库，每次发布前更新组件库版本



