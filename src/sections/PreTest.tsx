import { BookOpenText, Sparkles } from "lucide-react";
import CenterLayout from "../components/CenterLayout";
import Header from "../components/Header";
import { useNavigate } from "react-router";

const PreTest = () => {
  const navigate = useNavigate();

  return (
    <CenterLayout>
      <div
        className="w-[90%] md:w-[80%] lg:w-[70%] space-y-7 mx-auto"
        id="pre-test"
      >
        <Header
          title="Warm-Up Assessment"
          subtitle="Every journey begins with a single step. Let’s see where your knowledge starts!"
        />

        <div className="relative shadow bg-linear-to-br from-green-50 via-white to-green-100 py-10 rounded-xl grid place-items-center gap-9 transition-all duration-500 hover:shadow-green-200 hover:scale-[1.03] hover:-translate-y-1 overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-t from-green-200/30 via-transparent to-white opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>

          <div className="relative">
            <div className="absolute inset-0 bg-green-400/30 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-white w-24 h-20 rounded-xl grid place-items-center text-green-700 border border-green-200 shadow-sm transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
              <BookOpenText className="size-10" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-2">
            <p className="font-extrabold text-2xl text-green-700">
              Overall Pre-Test
            </p>
            <p className="text-[0.9rem] text-slate-600">
              Take this quick warm-up to gauge your current understanding before
              your training begins.
            </p>
          </div>

          {/* Button */}
          <button
            className="text-[0.95rem] z-10 border-2 border-green-600 text-green-700 font-semibold cursor-pointer px-10 py-3 rounded-xl transition-all duration-500 hover:bg-green-600 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
            onClick={() => navigate("/pre-test")}
            type="button"
          >
            Begin the Test
          </button>

          {/* Floating sparkle accent */}
          <div className="absolute top-6 right-6 text-green-400/60 animate-pulse">
            <Sparkles className="size-6" />
          </div>
        </div>
      </div>
    </CenterLayout>
  );
};

export default PreTest;
