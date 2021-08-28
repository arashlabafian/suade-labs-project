<template>
  <div class="vertical-layout floating-nav h-100">
    <nav-menu>
      <template #header="slotProps">
        <slot name="vertical-menu-header" v-bind="slotProps" />
      </template>
    </nav-menu>

    <transition name="zoom-fade" mode="out-in">
      <layout-content>
        <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data" />
        </template>
      </layout-content>
    </transition>
  </div>
</template>

<script>
import LayoutContent from "@/components/layouts/layout-content/LayoutContent.vue";

import NavMenu from "@/components/layouts/nav-menu/NavMenu.vue";

export default {
  components: {
    NavMenu,
    LayoutContent,
  },
};
</script>
