<template>
  <b-card title="Gender">
    <pie-chart
      :height="275"
      :data="doughnutChart.data"
      :options="doughnutChart.options"
      class="mb-3"
    />

    <div class="d-flex align-items-center text-primary">
      <span class="font-weight-bold ml-75 mr-25">Male </span>
      <span>- {{ malePercent }}</span>
    </div>
    <div class="d-flex align-items-center text-danger">
      <span class="font-weight-bold ml-75 mr-25">Female </span>
      <span>- {{ femalePercent }}</span>
    </div>
  </b-card>
</template>

<script>
import { BCard } from "bootstrap-vue";
import PieChart from "@/components/base/pie-chart/PieChart.vue";

export default {
  components: {
    PieChart,
    BCard,
  },
  props: {
    genders: {
      type: Array,
      default: null,
    },
    genderCount: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      doughnutChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          responsiveAnimationDuration: 500,
          cutoutPercentage: 60,
          legend: { display: false },
          tooltips: {
            callbacks: {
              label(tooltipItem, data) {
                const label = data.datasets[0].labels[tooltipItem.index] || "";
                const value = data.datasets[0].data[tooltipItem.index];
                const totalValue =
                  data.datasets[0].data[0] + data.datasets[0].data[1];
                const finalValue = Math.floor((value / totalValue) * 100);
                const output = ` ${label} : ${finalValue} %`;
                return output;
              },
            },
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            backgroundColor: "#fff",
            titleFontColor: "#000",
            bodyFontColor: "#000",
          },
        },
        data: {
          datasets: [
            {
              labels: this.genders,
              data: this.genderCount,
              backgroundColor: ["#29B6F6", "#EF5350"],
              borderWidth: 0,
              pointStyle: "rectRounded",
            },
          ],
          labels: this.genders,
        },
      },

      stockData: [
        {
          device: "Men",
          symbol: "ManIcon",
          color: "text-primary",
          percentage: this.menPercent,
        },
        {
          device: "Female",
          symbol: "FemaleIcon",
          color: "text-danger",
          percentage: this.femalePercent,
        },
      ],
    };
  },
  computed: {
    malePercent() {
      const total = this.genderCount.reduce((prev, curr) => prev + curr, 0);
      const malePercent = Math.floor((this.genderCount[0] / total) * 100);
      return malePercent;
    },
    femalePercent() {
      const total = this.genderCount.reduce((prev, curr) => prev + curr, 0);
      const femalePercent = Math.floor((this.genderCount[1] / total) * 100);
      return femalePercent;
    },
  },
};
</script>
