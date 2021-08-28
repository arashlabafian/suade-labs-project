<template>
  <li
    class="nav-item"
    :class="{
      active: isActive,
      disabled: item.disabled,
    }"
  >
    <b-link v-bind="linkProps" class="d-flex align-items-center">
      <span class="menu-title text-truncate">{{ item.title }}</span>
    </b-link>
  </li>
</template>

<script>
import { BLink } from "bootstrap-vue";
import useNavMenuLink from "./useNavMenuLink";

export default {
  components: {
    BLink,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.updateIsActive();
      },
    },
  },
  setup(props) {
    const { isActive, linkProps, updateIsActive } = useNavMenuLink(props.item);
    return {
      isActive,
      linkProps,
      updateIsActive,
    };
  },
};
</script>
