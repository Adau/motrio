<template>
  <div id="app">
    <b-container>
      <Header/>

      <b-img src="./assets/img/footer-bg.jpg" fluid alt="footer" />

      <Footer/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/bootstrap-variables";
@import "~bootstrap/scss/bootstrap";
</style>
