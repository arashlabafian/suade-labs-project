<template>
  <div class="misc-wrapper">
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">Page Not Found</h2>

        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          :to="{ path: '/' }"
        >
          Back to home
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  components: {
    BButton,
  },
};
</script>

<style lang="scss">
.misc-wrapper {
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
}
</style>
