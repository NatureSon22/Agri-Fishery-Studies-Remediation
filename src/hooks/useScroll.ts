import { useCallback } from "react";

export type Sections = "pre-test" | "modules" | "post-test";

export function useScroll() {
  const scrollToSection = useCallback((id: Sections) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return scrollToSection;
}
