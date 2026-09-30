import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className=" bg-[#eff4f6] px-5 py-4 md:px-8">
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold  text-[#172B3A] md:text-4xl">
            Product Dashboard
          </h1>

          <p className="mt-1 text-sm  text-[#718292] md:text-base">
            Manage all products in one place
          </p>
        </div>
         <div className="flex items-center gap-3">
          <button onClick={() => navigate("/favorites")} title="Favorites"
            className="flex h-11 w-11 items-center justify-center text-[#718292]  hover:bg-[#EAF5F9] hover:text-red-500">
            <Heart size={21} />
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-lg bg-[#18232C] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#263640]" >
            Logout
          </button>

        </div>

        
      </div>
    </header>
  );
};

export default Header;