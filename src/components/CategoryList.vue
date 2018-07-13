<template>
  <b-row
    v-if="categories.length"
    class="category-list"
  >
    <CategoryItem
      v-for="category in categories"
      :key="category.categoryId"
      :category="category"
    />
  </b-row>
</template>

<script>
import CategoryItem from './CategoryItem.vue'

export default {
  components: {
    CategoryItem
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.category-list {
  @include full-width();

  position: relative;
  padding: map-get($spacers, 4) 0;
  background-color: theme-color('light');
  color: color('white');

  &::after {
    @include arrow();

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    z-index: 1;
  }
}
</style>
