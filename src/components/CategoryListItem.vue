<template>
  <b-col cols="6" md="2">
    <figure
      :class="{ 'category': true, 'category--active': isActive }"
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
    },
    isActive: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.category {
  text-align: center;

  &:hover,
  &--active {
    color: theme-color('primary');
    cursor: pointer;
  }

  &__picture {
    margin-bottom: map-get($spacers, 2);
  }
}
</style>
