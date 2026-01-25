import { create } from "zustand";
import { persist } from "zustand/middleware";

type ModuleProgress = {
  id: number;
  isFinished: boolean;
};

type ProgressState = {
  isPretestFinished: boolean;
  modules: ModuleProgress[];
  isModulesFinished: boolean;
  isPostTestFinished: boolean;

  finishPretest: () => void;
  finishModule: (id: number) => void;
  finishPostTest: () => void;
  resetProgress: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      isPretestFinished: true,
      isModulesFinished: true,
      isPostTestFinished: true,
      modules: [
        { id: 1, isFinished: true },
        { id: 2, isFinished: true },
        { id: 3, isFinished: true },
        { id: 4, isFinished: true },
      ],

      finishPretest: () => set({ isPretestFinished: true }),

      finishModule: (id: number) => {
        set((state) => {
          const updatedModules = state.modules.map((mod) =>
            mod.id === id ? { ...mod, isFinished: true } : mod,
          );

          const allFinished = updatedModules.every((mod) => mod.isFinished);

          return {
            modules: updatedModules,
            isModulesFinished: allFinished,
          };
        });
      },

      finishPostTest: () => set({ isPostTestFinished: true }),

      resetProgress: () =>
        set({
          isPretestFinished: false,
          isModulesFinished: false,
          isPostTestFinished: false,
          modules: [
            { id: 1, isFinished: false },
            { id: 2, isFinished: false },
            { id: 3, isFinished: false },
            { id: 4, isFinished: false },
          ],
        }),
    }),
    {
      name: "progress-storage", // name of item in localStorage
    },
  ),
);
