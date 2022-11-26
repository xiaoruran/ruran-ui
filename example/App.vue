<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <r-card
      :width="300"
      imgSrc="logo.png"
      header="header-test"
      summary="content-test"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">footer-slot-test</div>
        </div>
      </template>
    </r-card>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.footer {
  padding: 8px;
  border-top: 1px solid rgba(20, 30, 30, 0.2);
}
.level {
  text-align: left;
  /* border-top: 1px solid green; */
}
</style>
