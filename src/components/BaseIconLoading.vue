<template>
  <div class="text-center">
    <font-awesome-icon icon="wrench" class="icon-loading" size="2x" />
    <small class="d-block">Chargement...</small>
  </div>
</template>

<script>
export default {
  name: 'BaseIconLoading'
}
</script>

<style lang="scss" scoped>
.icon-loading {
  transform-origin: 81.25% 18.75%;
  animation: screw 2.5s ease infinite;
}

$steps: (
  8%: 12deg,
  10%: 24deg,
  18%: -24deg,
  20%: -24deg,
  28%: 24deg,
  30%: 24deg,
  38%: -24deg,
  40%: -24deg,
  48%: 24deg,
  50%: 24deg,
  58%: -24deg,
  60%: -24deg,
  68%: 24deg,
  75%: 0deg
);

@keyframes screw {
  @each $step, $rotation in $steps {
    #{$step} {
      transform: rotate($rotation);
    }
  }
}
</style>
