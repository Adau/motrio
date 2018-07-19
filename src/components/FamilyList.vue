<template>
  <div>
    <BaseIconLoading v-if="isLoading"/>

    <b-row class="family-list">
      <FamilyListItem
        v-for="family in families"
        :key="family.familyId"
        :family="family"
        :isActive="family == selectedFamily"
        @clicked="setFamily"
      />
    </b-row>

    <CategoryList
      v-if="filteredCategories.length"
      :categories="filteredCategories"
    />
  </div>
</template>

<script>
import axios from 'axios'
import FamilyListItem from './FamilyListItem.vue'
import CategoryList from './CategoryList.vue'

export default {
  name: 'FamilyList',
  components: {
    FamilyListItem,
    CategoryList
  },
  data () {
    return {
      selectedFamily: {},
      families: [],
      categories: [],
      isLoading: false
    }
  },
  computed: {
    filteredCategories () {
      return this.categories.filter(category => category.familyId == this.selectedFamily.familyId)
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
  methods: {
    setFamily(family) {
      this.selectedFamily = family
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.family-list {
  margin-bottom: $spacer;
}
</style>
