<template>
  <b-col md="2">
    <figure
      class="family"
      @click="$emit('clicked', family)"
    >
      <b-img
        class="family__picture"
        :src="'https://motrio.com/uploads/families/' + family.familyPicto"
        width="75"
        height="75"
        alt="icon"
      />
      <figcaption>
        {{ family.family }}
      </figcaption>
    </figure>
  </b-col>
</template>

<script>
export default {
  name: 'FamilyListItem',
  props: {
    family: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.family {
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
