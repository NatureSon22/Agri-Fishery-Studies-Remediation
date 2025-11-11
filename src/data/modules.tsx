import { Wrench, Tractor, Sprout, Egg, type LucideIcon } from "lucide-react";

export type ModuleType = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  fileURL: string;
};

export const MODULES: ModuleType[] = [
  {
    id: 1,
    title: "Farm Tools & Equipment",
    subtitle: "Identify and use agricultural tools and implements effectively.",
    icon: Wrench,
    fileURL:
      "https://edqlvcqwrb.ucarecd.net/279be620-fc25-4103-820f-8c62c21ed18c/",
  },
  {
    id: 2,
    title: "Crop Care & Maintenance",
    subtitle: "Learn the essential practices for healthy and productive crops.",
    icon: Sprout,
    fileURL:
      "https://edqlvcqwrb.ucarecd.net/e32038b0-3d95-469d-9ad5-1df44abf6635/",
  },
  {
    id: 3,
    title: "Breeds of Poultry & Livestock",
    subtitle: "Discover common breeds of chickens, ducks, and quails.",
    icon: Egg,
    fileURL:
      "https://edqlvcqwrb.ucarecd.net/9203b63b-758d-4a21-9001-66ed74fbb15e/",
  },
  {
    id: 4,
    title: "Livestock Tools & Materials",
    subtitle:
      "Understand the tools and materials used in modern animal farming.",
    icon: Tractor,
    fileURL:
      "https://edqlvcqwrb.ucarecd.net/860b93f7-a60f-4ca5-98a7-c5c914cba47b/",
  },
];
