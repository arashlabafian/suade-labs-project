<script>
import * as icons from "vue-feather-icons";

export default {
  name: "FeatherIcon",
  functional: true,
  props: {
    icon: {
      required: true,
      type: [String, Object],
    },
    size: {
      type: String,
      default: "14",
    },
  },
  render(h, { props, data }) {
    // Create Feather Icon
    const svg = h(icons[props.icon], { props: { size: props.size }, ...data });

    // Return span with children
    return h("span", { staticClass: "feather-icon position-relative" }, [svg]);
  },
};
</script>

<style lang="scss">
svg.feather {
  outline: none;
}
</style>
