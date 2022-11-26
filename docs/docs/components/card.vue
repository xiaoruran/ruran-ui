<template>
  <div class="r-card" :style="width?{width:width+'px'}:{}">
    <div v-if="header" class="r-card-header">
          {{header}}
     </div>
     <div v-else class="r-card-header">
         <slot name="header"></slot>
     </div>
      <div class="r-card-img" :style="imgheight?{height:imgheight+'px'}:{}">
          <img :src="imgSrc" alt="img" />
      </div>
      <div v-if="summary" class="r-card-summary">
          {{summary}}
      </div>
      <div v-else class="r-card-summary">
          <slot name="summary"></slot>
      </div>
      <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: "r-card",
  props: {
    width: {
      type: Number,
      default: 100,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgheight: {
      type: Number,
      default: 0,
    },
    header:{
        type:String,
        default:'',
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
    @import './card.scss'
</style>