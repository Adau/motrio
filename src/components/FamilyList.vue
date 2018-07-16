<template>
  <div>
    <b-row class="family-list">
      <FamilyListItem
        v-for="family in families"
        :key="family.familyId"
        :family="family"
        @clicked="setFamily"
      />
    </b-row>

    <CategoryList
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
      selectedFamilyId: 0,
      families: [],
      categories: []
    }
  },
  computed: {
    filteredCategories () {
      return this.categories.filter(category => category.familyId == this.selectedFamilyId)
    }
  },
  created () {
    axios.get('/search/categories')
      .then(response => {
        this.families = response.data.families
        this.categories = response.data.categories
      })
      .catch(e => {
        console.error(e)
      })
  },
  methods: {
    setFamily(familyId) {
      this.selectedFamilyId = familyId
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.family-list {
  padding: map-get($spacers, 4) 0;
}
</style>
