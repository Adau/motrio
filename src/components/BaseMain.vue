<template>
  <main class="main">
    <h3>Recherche par <span class="text-primary">famille</span></h3>

    <BaseIconLoading v-if="isLoading"/>

    <FamilyList
      v-if="families.length"
      :families="families"
      :selectedFamily="selectedFamily"
      @clicked="setFamily"
    />

    <CategoryList
      v-if="filteredCategories.length"
      :categories="filteredCategories"
      :selectedCategory="selectedCategory"
      @clicked="setCategory"
    />

    <ProductList
      v-if="products.length"
      :products="products"
      :category="SelectedCategory"
    />

    <b-img src="../assets/img/footer-bg.jpg" fluid alt="footer" />
  </main>
</template>

<script>
import axios from 'axios'
import FamilyList from './FamilyList.vue'
import CategoryList from './CategoryList.vue'
import ProductList from './ProductList.vue'

export default {
  name: 'BaseMain',
  components: {
    FamilyList,
    CategoryList,
    ProductList
  },
  data () {
    return {
      families: [],
      categories: [],
      products: [],
      selectedFamily: false,
      selectedCategory: false,
      isLoading: false
    }
  },
  created () {
    this.setFamilies()
  },
  computed: {
    filteredCategories () {
      return this.categories.filter(category => category.familyId == this.selectedFamily.familyId)
    }
  },
  methods: {
    setFamilies () {
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
    setFamily (family) {
      this.selectedFamily = family
      this.selectedCategory = false
      this.products = []
    },
    setCategory (category) {
      this.selectedCategory = category
      this.products = []
      this.setProducts()
    },
    setProducts () {
      this.isLoading = true

      axios.get('/search/product_by_category', {
        params: {
          category: this.selectedCategory.categoryId
        }
      })
      .then(response => {
        this.isLoading = false
        this.products = response.data.products.products
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
