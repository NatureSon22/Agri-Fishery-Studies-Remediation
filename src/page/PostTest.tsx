import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink, Trophy, Sparkles } from "lucide-react";
import CenterLayout from "../components/CenterLayout";
import { useNavigate } from "react-router";
import Confetti from "react-confetti";
import { useProgress } from "../store/useProgress";

const PostTest = () => {
  const navigate = useNavigate();
  const formLink = "https://forms.gle/example-posttest-link";

  const { isPostTestFinished, finishPostTest } = useProgress();

  const [completed, setCompleted] = useState(isPostTestFinished);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (completed) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [completed]);

  const handleComplete = () => {
    if (!completed) {
      setCompleted(true);
      finishPostTest();
    }
  };

  return (
    <div className="relative space-y-10 min-h-screen bg-zinc-100 text-slate-700 font-poppins flex flex-col">
      {showConfetti && <Confetti recycle={false} numberOfPieces={350} />}

      {/* Header */}
      <div className="shadow bg-white">
        <CenterLayout>
          <div className="w-[90%] lg:w-[50%] py-10 space-y-6">
            <button
              className="flex items-center gap-3 text-green-700 cursor-pointer transition-colors hover:text-green-800"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="size-4" />
              <p className="text-[0.9rem] font-medium">Back to Modules</p>
            </button>

            <div className="space-y-2">
              <p className="font-extrabold text-3xl text-green-700 flex items-center gap-2">
                <Trophy className="size-7 text-yellow-500" />
                Final Assessment
              </p>
              <p className="text-[0.95rem] text-slate-600">
                You've completed all modules! Take this final test to evaluate
                your learning progress and celebrate your achievement.
              </p>
            </div>
          </div>
        </CenterLayout>
      </div>

      {/* Test Card */}
      <CenterLayout>
        <div className="relative border border-green-100 rounded-2xl shadow-lg bg-white w-[90%] md:w-[70%] lg:w-[50%] p-10 flex flex-col items-center justify-center text-center space-y-6 transition-all duration-500 hover:shadow-green-200 overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-br from-yellow-100/30 via-transparent to-green-100/30 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700"></div>

          <div className="bg-green-100 text-green-700 p-5 rounded-full shadow-inner group-hover:bg-green-200 transition-all duration-300">
            <Sparkles className="size-8 text-yellow-400" />
          </div>

          <p className="text-lg font-semibold text-green-700">
            Ready to take your final test?
          </p>
          <p className="text-sm text-slate-500 max-w-md">
            Click below to open the post-test form and complete your final
            evaluation.
          </p>

          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 cursor-pointer inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            <ExternalLink className="size-5" />
            Go to Final Form
          </a>
        </div>
      </CenterLayout>

      {/* ✅ Completion Button */}
      <CenterLayout>
        <div className="flex justify-center py-8">
          <button
            onClick={handleComplete}
            disabled={completed}
            className={`text-[0.95rem] border-2 border-green-600 font-semibold px-10 py-3 rounded-xl transition-all duration-500 ${
              completed
                ? "bg-green-600 text-white shadow-[0_0_20px_rgba(250,204,21,0.3)] cursor-default"
                : "text-green-700 hover:bg-green-600 hover:text-white hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            }`}
          >
            {completed ? "Completed ✓" : "Mark as Completed"}
          </button>
        </div>
      </CenterLayout>

      {/* ✅ Congratulations Modal */}
      {completed && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center space-y-4 w-[90%] md:w-[50%] animate-fade-in">
            <Trophy className="size-10 text-yellow-500 mx-auto" />
            <h2 className="text-3xl font-extrabold text-green-700">
              Congratulations!
            </h2>
            <p className="text-slate-600">
              You've successfully completed your Agri-Fishery Learning Journey!
              🎉
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
            >
              Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostTest;
