<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>People Eye Color</b-card-title>
    </b-card-header>

    <b-card-body>
      <bar-chart
        :height="400"
        :data="latestBarChart.data"
        :options="latestBarChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardBody, BCardTitle } from "bootstrap-vue";
import BarChart from "@/components/base/bar-chart/BarChart.vue";

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardTitle,
    BarChart,
  },
  props: {
    eyeColors: {
      type: Array,
      default: null,
    },
    eyeColorsCount: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      latestBarChart: {
        data: {
          labels: this.eyeColors,
          datasets: [
            {
              data: this.eyeColorsCount,
              backgroundColor: ["#8D6E63", "#29B6F6", "#66BB6A"],
              borderColor: "transparent",
            },
          ],
        },
        options: {
          elements: {
            rectangle: {
              borderWidth: 2,
              borderSkipped: "bottom",
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          responsiveAnimationDuration: 500,
          legend: {
            display: false,
          },
          tooltips: {
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            backgroundColor: "#fff",
            titleFontColor: "#000",
            bodyFontColor: "#000",
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: true,
                  color: "rgba(200, 200, 200, 0.2)",
                  zeroLineColor: "rgba(200, 200, 200, 0.2)",
                },
                scaleLabel: {
                  display: false,
                },
                ticks: {
                  fontColor: "#6e6b7b",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  color: "rgba(200, 200, 200, 0.2)",
                  zeroLineColor: "rgba(200, 200, 200, 0.2)",
                },
                ticks: {
                  stepSize: 5,
                  min: 0,
                  max: 20,
                  fontColor: "#6e6b7b",
                },
              },
            ],
          },
        },
      },
    };
  },
};
</script>
