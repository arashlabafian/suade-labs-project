<template>
  <ul>
    <nav-menu-link
      v-for="item in items"
      :key="item.title"
      :item="item"
      :data-id="item.title.split(' ')[0]"
    />
  </ul>
</template>

<script>
import NavMenuLink from "../nav-menu-link/NavMenuLink.vue";

export default {
  components: {
    NavMenuLink,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
