<template>
  <div id="app">
    <b-container>
      <BaseHeader/>

      <BaseMain/>

      <BaseFooter/>
    </b-container>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import BaseMain from './components/BaseMain.vue'
import BaseFooter from './components/BaseFooter.vue'

export default {
  name: 'app',
  components: {
    BaseHeader,
    BaseMain,
    BaseFooter
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
