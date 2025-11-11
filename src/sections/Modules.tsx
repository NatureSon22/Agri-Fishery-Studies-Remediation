import CenterLayout from "../components/CenterLayout";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import { MODULES } from "../data/modules";
import { useProgress } from "../store/useProgress";
import { Lock } from "lucide-react";
import { useScroll } from "../hooks/useScroll";

const Modules = () => {
  const navigate = useNavigate();
  const { isPretestFinished, modules } = useProgress();
  const scroll = useScroll();

  return (
    <CenterLayout>
      <div
        className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto space-y-10 py-10"
        id="modules"
      >
        <Header
          title="Explore the Modules"
          subtitle="Embark on hands-on lessons that bring your Agri-Fishery journey to life."
        />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MODULES.map((mod) => {
              // ✅ Determine if the module is unlocked
              const prevModule = modules.find((m) => m.id === mod.id - 1);
              const isUnlocked = mod.id === 1 || prevModule?.isFinished;

              return (
                <div
                  key={mod.id}
                  className={`relative bg-linear-to-br from-green-50 via-white to-green-100 rounded-2xl shadow-md transition-all duration-500 overflow-hidden group ${
                    isUnlocked
                      ? "hover:shadow-lg"
                      : "opacity-60 pointer-events-none"
                  }`}
                >
                  {/* Subtle gradient hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-green-200/20 via-transparent to-yellow-100/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />

                  <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-green-100 text-green-700 p-3 rounded-xl shadow-inner group-hover:bg-green-200 transition-all duration-300">
                        <mod.icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-green-800 group-hover:text-green-700 transition-colors">
                          {mod.title}
                        </h3>
                        <p className="text-sm text-slate-600">{mod.subtitle}</p>
                      </div>
                    </div>

                    {/* Module button */}
                    <button
                      disabled={!isUnlocked}
                      onClick={() => navigate(`/modules/${mod.id}`)}
                      className={`mt-3 font-semibold py-3 rounded-lg transition-all duration-300 ${
                        isUnlocked
                          ? "bg-green-700 text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      {isUnlocked ? "OPEN MODULE" : "LOCKED"}
                    </button>
                  </div>

                  {/* 🔒 Optional lock overlay */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-20">
                      <Lock className="size-8 text-green-700" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 🔒 Overall lock if pretest not finished */}
          {!isPretestFinished && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-30 flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-300">
              <div className="bg-green-100 p-6 rounded-full mb-6 shadow-inner">
                <Lock className="size-10 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Modules Locked
              </h2>
              <p className="text-slate-600 mb-6 max-w-md">
                Please complete the{" "}
                <span className="font-semibold text-green-700">Pre-Test</span>{" "}
                before unlocking your learning modules.
              </p>
              <button
                onClick={() => scroll("pre-test")}
                className="cursor-pointer bg-green-700 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-green-800 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Go to Pre-Test
              </button>
            </div>
          )}
        </div>
      </div>
    </CenterLayout>
  );
};

export default Modules;
