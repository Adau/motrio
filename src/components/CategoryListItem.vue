<template>
  <b-col md="2">
    <figure
      class="category"
      @click="$emit('clicked', category)"
    >
      <b-img
        class="category__picture"
        :src="'https://motrio.com/uploads/categories/' + category.categoryPicto"
        width="75"
        height="75"
        alt="icon"
      />
      <figcaption>
        {{ category.category }}
      </figcaption>
    </figure>
  </b-col>
</template>

<script>
export default {
  name: 'CategoryListItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.category {
  text-align: center;

  &:hover {
    color: theme-color('primary');
    cursor: pointer;
  }

  &__picture {
    margin-bottom: map-get($spacers, 2);
  }
}
</style>
