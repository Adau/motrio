<template>
  <main class="main">
    <h3>Recherche par <span class="text-primary">famille</span></h3>

    <FamilyList/>

    <b-img src="../assets/img/footer-bg.jpg" fluid alt="footer" />
  </main>
</template>

<script>
import FamilyList from './FamilyList.vue'

export default {
  name: 'BaseMain',
  components: {
    FamilyList
  }
}
</script>
