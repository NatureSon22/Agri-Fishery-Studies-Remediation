import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import CenterLayout from "../components/CenterLayout";
import { useNavigate } from "react-router";
import { useProgress } from "../store/useProgress";

const PreTest = () => {
  const navigate = useNavigate();
  const formLink = "https://forms.gle/example-link";
  const { isPretestFinished, finishPretest } = useProgress();

  return (
    <div className="min-h-screen bg-zinc-50 text-slate-700 font-poppins space-y-10 flex flex-col">
      {/* Header */}
      <div className="shadow bg-white">
        <CenterLayout>
          <div className="w-[90%] lg:w-[50%] py-10 space-y-6">
            <button
              className="flex items-center gap-3 text-green-700 cursor-pointer transition-colors hover:text-green-800"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="size-4" />
              <p className="text-[0.9rem] font-medium">Back to Home</p>
            </button>

            <div className="space-y-2">
              <p className="font-extrabold text-3xl text-green-700">
                Warm-Up Assessment
              </p>
              <p className="text-[0.95rem] text-slate-600">
                Take this quick warm-up to gauge your current understanding
                before your training begins.
              </p>
            </div>
          </div>
        </CenterLayout>
      </div>

      {/* Test Card Section */}
      <CenterLayout>
        <div className="border border-green-100 rounded-xl shadow-md bg-white w-[90%] md:w-[70%] lg:w-[50%] p-8 lg:py-12 flex flex-col items-center justify-center text-center space-y-6 transition-all duration-300 hover:shadow-green-200">
          {!isPretestFinished ? (
            <>
              <p className="text-lg font-semibold text-green-700">
                Ready to start your pre-test?
              </p>
              <p className="text-sm text-slate-500 max-w-md">
                Click the button below to open the form and complete your
                assessment.
              </p>

              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <ExternalLink className="size-5" />
                Go to Form
              </a>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle2 className="size-12 text-green-600 animate-bounce" />
                <p className="text-2xl font-extrabold text-green-700">
                  Pre-Test Completed!
                </p>
                <p className="text-sm text-slate-500 max-w-md">
                  Awesome work! You've completed the warm-up quiz. Time to move
                  on to the learning modules.
                </p>
              </div>
            </>
          )}
        </div>
      </CenterLayout>

      {/* Footer Button */}
      <CenterLayout>
        <div className="flex justify-center">
          {!isPretestFinished ? (
            <button
              onClick={() => finishPretest()}
              className="text-[0.95rem] cursor-pointer border-2 border-green-600 text-green-700 font-semibold px-10 py-3 rounded-xl transition-all duration-500 hover:bg-green-600 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Mark as Done
            </button>
          ) : (
            <button
              onClick={() => navigate("/")}
              className="text-[0.95rem] cursor-pointer bg-green-600 text-white font-semibold px-10 py-3 rounded-xl transition-all duration-500 hover:bg-green-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Proceed to Modules
            </button>
          )}
        </div>
      </CenterLayout>
    </div>
  );
};

export default PreTest;