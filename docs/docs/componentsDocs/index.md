# 快速开始

#### 安装组件库

```bash
npm install ruran-ui
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'ruran-ui/dist/css/index.css';
import UI from 'ruran-ui';
Vue.use(UI);


// 按需引入
import 'ruran-ui/dist/css/demo.css';
import RCard from 'ruran-ui/dist/card.umd';
Vue.use(RCard);
```
