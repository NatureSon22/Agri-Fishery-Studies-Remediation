import CenterLayout from "../components/CenterLayout";
import { BookOpenText, Layers3, Trophy, Lock } from "lucide-react";
import { PROGRESS_TABS } from "../data/progress";
import { useProgress } from "../store/useProgress";
import { useScroll, type Sections } from "../hooks/useScroll";

const Progress = () => {
  const { isPretestFinished, isModulesFinished } = useProgress();
  const scroll = useScroll();

  const getIcon = (tabNumber: number, isLocked: boolean) => {
    if (isLocked) {
      return <Lock className="size-6 text-white" />;
    }

    switch (tabNumber) {
      case 1:
        return <BookOpenText className="size-6 text-white" />;
      case 2:
        return <Layers3 className="size-6 text-white" />;
      case 3:
        return <Trophy className="size-6 text-white" />;
      default:
        return null;
    }
  };

  return (
    <CenterLayout>
      <div className="w-[90%] md:w-[80%] lg:w-[65%] mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 mx-5">
          {PROGRESS_TABS.map((tab) => {
            const isAvailable =
              tab.tab === 1 ||
              (tab.tab === 2 && isPretestFinished) ||
              (tab.tab === 3 && isModulesFinished);
            const section: Sections =
              tab.tab == 1
                ? "pre-test"
                : tab.tab == 2
                ? "modules"
                : "post-test";

            return (
              <div
                key={tab.tab}
                className="flex flex-col items-center flex-1 min-w-0"
                onClick={isAvailable ? () => scroll(section) : () => {}}
              >
                {/* Card */}
                <div
                  className={`w-full bg-white border border-slate-200 shadow-sm rounded-xl text-center py-8 px-6 transition-all duration-300 ${
                    isAvailable
                      ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`size-12 grid place-items-center rounded-full ${
                        isAvailable ? "bg-green-700" : "bg-gray-400"
                      }`}
                    >
                      {getIcon(tab.tab, !isAvailable)}
                    </div>
                  </div>

                  <p className="font-semibold text-lg text-slate-800 mb-1">
                    {tab.title}
                  </p>
                  <p className="text-[0.9rem] text-slate-500 font-light">
                    {tab.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CenterLayout>
  );
};

export default Progress;
