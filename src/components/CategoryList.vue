<template>
  <b-row
    v-if="categories.length"
    class="category-list"
  >
    <CategoryListItem
      v-for="category in categories"
      :key="category.categoryId"
      :category="category"
    />
  </b-row>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'

export default {
  name: 'CategoryList',
  components: {
    CategoryListItem
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
  justify-content: center;
  padding: map-get($spacers, 4) 0;
  background-color: gray('200');
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
