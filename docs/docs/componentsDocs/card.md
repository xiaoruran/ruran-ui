# Card
卡片组件

### 示例
<r-card imgSrc="/1.jpg"  summary="test" :width="250"/>

### 代码
```html
<r-card imgSrc="/1.jpg"  summary="test" :width="250"/>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---  | ---  | ---  | ---  | ---  |
|width| 卡片宽度| Number| false| - |
|imgSrc| 图片资源地址| String| true|-|
|imgHeight| 图片高度| Number| false| - |
|summary| 卡片概要| String/Slot| false|-|
|header| 卡片头部| Slot| false| - |
|footer| 卡片底部| Slot| false| - |



<!-- 引入vue组件 -->
<script setup>
import RCard from '../components/card.vue'
</script>