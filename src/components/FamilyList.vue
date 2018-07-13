<template>
  <b-row class="py-4">
    <FamilyItem
      v-for="family in families"
      :key="family.familyId"
      :family="family"
    />
  </b-row>
</template>

<script>
import axios from 'axios'
import FamilyItem from './FamilyItem.vue'

export default {
  components: {
    FamilyItem
  },
  data () {
    return {
      families: []
    }
  },
  created () {
    axios.get('/api/search/categories') // https://motrio.com/fr-fr/search/categories
      .then(response => {
        this.families = response.data.families
      })
      .catch(e => {
        console.error(e)
      })
  }
}
</script>
