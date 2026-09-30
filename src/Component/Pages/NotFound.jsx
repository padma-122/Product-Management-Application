import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEF8FC] px-4">
      <div className="text-center">

        <h1 className="text-7xl font-bold text-[#172B3A]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-[#172B3A]">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm text-[#718292]">
          Sorry, the page you are looking for does not exist.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 rounded-lg bg-[#18232C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#263640]"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
};

export default NotFound;