import { Flame, Trophy, Lock } from "lucide-react";
import CenterLayout from "../components/CenterLayout";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import { useProgress } from "../store/useProgress";
import { useScroll } from "../hooks/useScroll";

const PostTest = () => {
  const navigate = useNavigate();
  const { isModulesFinished } = useProgress();
  const scroll = useScroll();

  return (
    <CenterLayout>
      <div
        className="w-[90%] md:w-[80%] lg:w-[70%] space-y-7 mx-auto py-12 relative"
        id="post-test"
      >
        {/* Header */}
        <Header
          title="Final Assessment"
          subtitle="The moment of truth — prove your mastery and conquer the final challenge."
        />

        {/* Card container (relative for overlay control) */}
        <div className="relative">
          {/* Post-Test Card */}
          <div className="shadow-lg bg-linear-to-br from-gray-900 via-gray-800 to-black text-white py-10 rounded-xl grid place-items-center gap-9 transition-all duration-500 hover:shadow-green-500/20 hover:scale-[1.03] hover:-translate-y-1 overflow-hidden group">
            {/* Fiery glow */}
            <div className="absolute inset-0 bg-linear-to-t from-green-600/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700"></div>

            {/* Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-600/30 blur-2xl rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative w-24 h-24 bg-linear-to-tr from-green-700 to-green-500 rounded-2xl grid place-items-center shadow-lg shadow-green-900/40 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                <Trophy className="size-12 text-white drop-shadow-lg" />
              </div>
            </div>

            {/* Text */}
            <div className="text-center space-y-2">
              <p className="font-extrabold text-3xl tracking-tight text-green-400 uppercase">
                Overall Post-Test
              </p>
              <p className="text-[0.95rem] text-gray-300 mx-auto max-w-md">
                The final challenge awaits. Show your true power and earn your
                title of mastery.
              </p>
            </div>

            {/* Button */}
            <button
              className="text-[0.95rem] z-10 border-2 border-green-500 text-green-400 font-bold cursor-pointer px-10 py-3 rounded-xl tracking-wide transition-all duration-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:-translate-y-0.5"
              onClick={() => navigate("/post-test")}
            >
              Face the Final Test
            </button>

            {/* Accent flame */}
            <div className="absolute bottom-6 right-6 text-green-500/70 animate-pulse">
              <Flame className="size-6" />
            </div>
          </div>

          {/* 🔒 Overlay (now confined to card width) */}
          {!isModulesFinished && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center rounded-xl">
              <div className="bg-green-100 p-6 rounded-full mb-6 shadow-inner">
                <Lock className="size-10 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Post-Test Locked
              </h2>
              <p className="text-slate-600 mb-6 max-w-md">
                Please complete all{" "}
                <span className="font-semibold text-green-700">modules</span>{" "}
                before unlocking the Final Assessment.
              </p>
              <button
                onClick={() => scroll("modules")}
                className="cursor-pointer bg-green-700 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-green-800 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Go to Modules
              </button>
            </div>
          )}
        </div>
      </div>
    </CenterLayout>
  );
};

export default PostTest;
