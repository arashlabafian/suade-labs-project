<template>
  <b-row v-if="loading" class="match-height">
    <b-col md="6">
      <eye-colors-chart
        :eye-colors="eyeColors"
        :eye-colors-count="eyeColorsCount"
      />
    </b-col>
    <b-col lg="6">
      <gender-chart :genders="genders" :gender-count="genderCount" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import EyeColorsChart from "./EyeColorsChart.vue";

import GenderChart from "./GenderChart.vue";

export default {
  components: {
    BRow,
    BCol,
    EyeColorsChart,
    GenderChart,
  },
  data() {
    return {
      eyeColors: ["brown", "blue", "green"],
      genders: ["male", "female"],
    };
  },
  computed: {
    receivedPeople() {
      return this.$store.getters["people/getPeople"];
    },
    eyeColorsCount() {
      const colorsCount = [0, 0, 0];
      this.receivedPeople.forEach((person) => {
        switch (person.eyeColor) {
          case "brown":
            colorsCount[0] += 1;
            break;
          case "blue":
            colorsCount[1] += 1;
            break;
          case "green":
            colorsCount[2] += 1;
            break;
          default:
            break;
        }
      });
      return colorsCount;
    },
    genderCount() {
      const genderCounter = [0, 0];
      this.receivedPeople.forEach((person) => {
        switch (person.gender) {
          case "male":
            genderCounter[0] += 1;
            break;
          case "female":
            genderCounter[1] += 1;
            break;
          default:
            break;
        }
      });
      return genderCounter;
    },
    loading() {
      return this.$store.getters["people/getPeople"].length !== 0;
    },
  },
};
</script>
