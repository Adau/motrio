<template>
  <b-row class="family-list">
    <FamilyListItem
      v-for="family in families"
      :key="family.familyId"
      :family="family"
      :isActive="family == selectedFamily"
      @clicked="$emit('clicked', family)"
    />
  </b-row>
</template>

<script>
import FamilyListItem from './FamilyListItem.vue'

export default {
  name: 'FamilyList',
  components: {
    FamilyListItem
  },
  props: {
    families: {
      type: Array,
      required: true
    },
    selectedFamily: {
      type: Object,
      required: false
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
