<template>
  <div class="backdrop">
    <ProgressSpinner />
  </div>
</template>

<script>
import ProgressSpinner from "primevue/progressspinner";

export default {
  components: { ProgressSpinner },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
