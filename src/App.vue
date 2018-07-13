<template>
  <div id="app">
    <b-container>
      <Header/>

      <Main/>

      <Footer/>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import "./assets/scss/bootstrap-variables";
@import "~bootstrap/scss/bootstrap";
</style>
