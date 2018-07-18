<template>
  <div>
    <b-row class="category-list">
      <CategoryListItem
        v-for="category in categories"
        :key="category.categoryId"
        :category="category"
        :isActive="category == selectedCategory"
        @clicked="setCategory"
      />
    </b-row>

    <ProductList
      v-if="Object.keys(selectedCategory).length"
      :category="selectedCategory"
    />
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue'
import ProductList from './ProductList.vue'

export default {
  name: 'CategoryList',
  components: {
    CategoryListItem,
    ProductList
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedCategory: {}
    }
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category
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
  margin-bottom: $spacer;
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
