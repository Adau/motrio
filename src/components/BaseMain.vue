<template>
  <main class="main">
    <h3>Recherche par <span class="text-primary">famille</span></h3>

    <BaseIconLoading v-if="isLoading"/>

    <FamilyList
      :families="families"
      :selectedFamily="selectedFamily"
      @clicked="setFamily"
    />

    <CategoryList
      v-if="filteredCategories.length"
      :categories="filteredCategories"
    />

    <b-img src="../assets/img/footer-bg.jpg" fluid alt="footer" />
  </main>
</template>

<script>
import axios from 'axios'
import FamilyList from './FamilyList.vue'
import CategoryList from './CategoryList.vue'

export default {
  name: 'BaseMain',
  components: {
    FamilyList,
    CategoryList
  },
  data () {
    return {
      families: [],
      categories: [],
      selectedFamily: {},
      isLoading: false
    }
  },
  created () {
    this.isLoading = true

    axios.get('/search/categories')
      .then(response => {
        this.isLoading = false
        this.families = response.data.families
        this.categories = response.data.categories
      })
      .catch(error => {
        console.error(error)
      })
  },
  computed: {
    filteredCategories () {
      return this.categories.filter(category => category.familyId == this.selectedFamily.familyId)
    }
  },
  methods: {
    setFamily(family) {
      this.selectedFamily = family
    }
  }
}
</script>
