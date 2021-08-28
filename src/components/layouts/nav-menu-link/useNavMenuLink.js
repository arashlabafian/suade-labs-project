import { ref } from "@vue/composition-api";
import { isNavLinkActive, navLinkProps } from "./utils";

export default function useNavMenuLink(item) {
  const isActive = ref(false);

  const linkProps = navLinkProps(item);

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item);
  };

  return {
    isActive,
    linkProps,
    updateIsActive,
  };
}
