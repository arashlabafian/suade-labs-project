<template>
  <div class="main-menu menu-fixed menu-accordion menu-shadow menu-light">
    <div class="navbar-header expanded">
      <slot name="header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mr-auto">
            <b-link class="navbar-brand" to="/">
              <h2 class="brand-text">Suade Labs</h2>
            </b-link>
          </li>
        </ul>
      </slot>
    </div>

    <nav-menu-items :items="navMenuItems" class="navigation navigation-main" />
  </div>
</template>

<script>
import { BLink } from "bootstrap-vue";
import navMenuItems from "@/navigation";
import NavMenuItems from "../nav-menu-items/NavMenuItems.vue";

export default {
  components: {
    NavMenuItems,
    BLink,
  },

  data() {
    return {
      navMenuItems,
    };
  },
};
</script>
