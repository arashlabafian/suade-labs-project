<template>
  <div id="app" class="h-100">
    <v-layout>
      <router-view />
    </v-layout>
  </div>
</template>

<script>
const VLayout = () => import("@/layouts/VLayout.vue");
export default {
  components: {
    VLayout,
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async loadPeople() {
      try {
        await this.$store.dispatch("people/getPeople");
      } catch (error) {
        this.error = error.message || "Something Went Wrong!";
      }
    },
  },
};
</script>
