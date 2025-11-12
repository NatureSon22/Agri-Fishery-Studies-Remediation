import { useNavigate, useParams } from "react-router";
import CenterLayout from "../components/CenterLayout";
import { MODULES, type ModuleType } from "../data/modules";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  BookOpen,
  CheckCircle2,
  Award,
  Trophy,
  ArrowLeft,
} from "lucide-react";
import { useProgress } from "../store/useProgress";

const Module = () => {
  const { id } = useParams();
  const [module, setModule] = useState<ModuleType>();
  const navigate = useNavigate();
  const { modules, finishModule } = useProgress();

  const currentModule = modules.find((m) => m.id === Number(id));
  const isFinished = currentModule?.isFinished ?? false;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const mod = MODULES.find((m) => m.id.toString() === id);
    setModule(mod);
  }, [id]);

  if (!module)
    return (
      <div className="h-screen grid place-items-center text-slate-500 font-medium">
        Module not found.
      </div>
    );

  const handleMarkComplete = () => {
    finishModule(module.id);
  };

  const isLastModule = Number(module.id) === MODULES.length;

  const handleNext = () => {
    if (isLastModule) {
      navigate("/post-test");
    } else {
      const nextModule = MODULES.find(
        (m) => Number(m.id) === Number(module.id) + 1
      );
      if (nextModule) navigate(`/modules/${nextModule.id}`);
    }
  };

  return (
    <div className="h-screen flex flex-col font-poppins bg-linear-to-b from-zinc-50 via-white to-emerald-50">
      {/* HEADER */}
      <header className="bg-white shadow-md relative z-10">
        <CenterLayout>
          <div className="w-[90%] lg:w-[55%] py-10 space-y-6">
            <button
              className="flex items-center gap-3 text-green-700 cursor-pointer transition-colors hover:text-green-800"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="size-4" />
              <p className="text-[0.9rem] font-medium">Back to Home</p>
            </button>

            <div className="flex gap-5 items-center">
              {module?.icon && (
                <div className="bg-green-100 text-green-700 p-4 rounded-xl shadow-inner">
                  <module.icon className="size-6" />
                </div>
              )}
              <div className="space-y-1">
                <p className="font-extrabold text-3xl text-green-700">
                  {module?.title}
                </p>
                <p className="text-[0.95rem] text-slate-600">
                  {module?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </CenterLayout>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto py-14">
        <CenterLayout>
          <div className="w-[90%] md:w-[70%] lg:w-[55%] mx-auto space-y-14">
            {/* PRE-TEST SECTION */}
            <section className="relative bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-[6px] border-green-600">
              <div className="absolute -top-5 left-6 bg-green-600 text-white p-3 rounded-full shadow-md">
                <ClipboardCheck className="size-5" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-green-700 mt-2">
                  Pre-Test
                </h2>
                <p className="text-[0.95rem] text-slate-600 leading-relaxed">
                  Complete this short quiz to check your current knowledge
                  before you start. It’s just to see what you already know!
                </p>
                <p className="text-sm text-green-700 italic mt-2">
                  Embedded Google Form – Pre-Test for Topic {module.id}
                </p>
              </div>
            </section>

            {/* LESSON MATERIALS */}
            <section className="relative bg-linear-to-br from-green-50 via-white to-emerald-100 p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-[6px] border-emerald-600">
              <div className="absolute -top-5 left-6 bg-emerald-600 text-white p-3 rounded-full shadow-md">
                <BookOpen className="size-5" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-emerald-700 mt-2">
                  Lesson Materials
                </h2>

                <p className="text-[0.95rem] text-slate-700 leading-relaxed">
                  Study the learning materials provided below. Review them
                  carefully to understand the key concepts and processes for
                  this module.
                </p>

                <div className="mt-6 border border-emerald-200 rounded-xl overflow-hidden shadow-sm bg-white">
                  {module.fileURL ? (
                    <iframe
                      src={module.fileURL}
                      title="Lesson Material PDF"
                      className="w-full h-[600px] border-none"
                    />
                  ) : (
                    <p className="p-6 text-slate-500 text-center italic">
                      No lesson material available for this module yet.
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* POST-TEST SECTION */}
            <section className="relative bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-[6px] border-yellow-500">
              <div className="absolute -top-5 left-6 bg-yellow-500 text-white p-3 rounded-full shadow-md">
                <CheckCircle2 className="size-5" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-yellow-600 mt-2">
                  Post-Test
                </h2>
                <p className="text-[0.95rem] text-slate-600 leading-relaxed">
                  After studying the lesson, take this assessment to evaluate
                  what you’ve learned. This helps track your progress and
                  mastery of the topic.
                </p>
                <p className="text-sm text-yellow-600 italic mt-2">
                  Embedded Google Form – Post-Test for Topic {module.id}
                </p>
              </div>
            </section>

            {/* COMPLETE MODULE SECTION */}
            <section className="relative text-center bg-linear-to-br from-green-600 to-emerald-500 p-14 rounded-2xl shadow-xl text-white overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/symphony.png')] opacity-15 pointer-events-none" />
              {!isFinished ? (
                <>
                  <Award className="size-12 mx-auto mb-4 text-yellow-300" />
                  <h2 className="text-3xl font-extrabold">
                    Ready to Finish This Module?
                  </h2>
                  <p className="text-sm opacity-90 mt-2 max-w-md mx-auto">
                    Mark this module as complete to unlock the next topic and
                    continue your Agri-Fishery journey!
                  </p>
                  <button
                    onClick={handleMarkComplete}
                    className="mt-6 cursor-pointer bg-white text-green-700 font-semibold px-10 py-3 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
                  >
                    Mark as Complete
                  </button>
                </>
              ) : (
                <div className="animate-fade-in">
                  <CheckCircle2 className="size-12 mx-auto mb-4 text-yellow-300 animate-bounce" />
                  <h2 className="text-3xl font-extrabold">Module Completed!</h2>
                  <p className="text-sm opacity-90 mt-2 max-w-md mx-auto">
                    {isLastModule
                      ? "You've completed all modules! You're ready for the final post-test."
                      : "Excellent work! You've successfully completed this topic. Move forward to the next module to continue learning."}
                  </p>
                </div>
              )}
            </section>
          </div>
        </CenterLayout>
      </main>

      {/* FOOTER */}
      <footer className="py-10 bg-white shadow-inner border-t border-slate-200">
        <CenterLayout>
          <div className="w-[90%] lg:w-[55%] flex gap-5 items-center justify-between">
            {Number(id) > 1 && (
              <button
                onClick={() => {
                  const prevModule = MODULES.find(
                    (m) => Number(m.id) === Number(module.id) - 1
                  );
                  if (prevModule) navigate(`/modules/${prevModule.id}`);
                }}
                className="text-[0.95rem] cursor-pointer flex items-center gap-3 border-2 border-green-600 text-green-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-green-600 hover:text-white"
              >
                <ChevronLeft />
                <p>Previous Topic</p>
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={!isFinished}
              className={`text-[0.95rem] ml-auto cursor-pointer flex items-center gap-3 font-semibold px-8 py-3 rounded-xl transition-all duration-300 ${
                isFinished
                  ? isLastModule
                    ? "bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                    : "bg-green-600 text-white hover:bg-green-700 shadow-[0_0_15px_rgba(250,204,21,0.25)]"
                  : "border-2 border-green-600 text-green-700 opacity-50 cursor-not-allowed"
              }`}
            >
              <p>{isLastModule ? "Proceed to Final Test" : "Next Topic"}</p>
              {isLastModule ? <Trophy /> : <ChevronRight />}
            </button>
          </div>
        </CenterLayout>
      </footer>
    </div>
  );
};

export default Module;
