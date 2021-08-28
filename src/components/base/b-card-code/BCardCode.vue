<template>
  <b-card no-body>
    <div class="card-header">
      <div>
        <b-card-title>{{ $attrs.title }}</b-card-title>
      </div>
    </div>
    <b-card-body>
      <slot />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardTitle, BCardBody } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardTitle,
    BCardBody,
  },
};
</script>
