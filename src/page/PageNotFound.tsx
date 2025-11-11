import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center h-screen bg-slate-100">
      <div className="grid place-items-center gap-7">
        <div className="text-center space-y-3">
          <p className="text-7xl font-bold text-slate-700">404</p>
          <p className="text-slate-500">Page Not Found</p>
        </div>

        <button
          className="bg-green-500 text-white py-3 px-5 rounded-3xl cursor-pointer font-semibold"
          onClick={() => navigate("/", { replace: true })}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
