import { computed } from "@vue/composition-api";
import router from "@/router";

export const isObject = (obj) => typeof obj === "object" && obj !== null;

export const resolveNavDataRouteName = (link) => {
  if (isObject(link.route)) {
    const { route } = router.resolve(link.route);
    return route.name;
  }
  return link.route;
};

export const isNavLinkActive = (link) => {
  const matchedRoutes = router.currentRoute.matched;

  const resolveRoutedName = resolveNavDataRouteName(link);

  if (!resolveRoutedName) return false;

  return matchedRoutes.some(
    (route) =>
      route.name === resolveRoutedName ||
      route.meta.navActiveLink === resolveRoutedName
  );
};

export const navLinkProps = (item) =>
  computed(() => {
    const props = {};
    if (item.route)
      props.to =
        typeof item.route === "string" ? { name: item.route } : item.route;
    else {
      props.href = item.href;
      props.target = "_blank";
      props.rel = "nofollow";
    }

    if (!props.target) props.target = item.target || null;

    return props;
  });
