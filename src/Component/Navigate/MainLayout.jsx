import { Outlet } from "react-router-dom";
import Header from "../CommonComponent/Header";
import Sidebar from "../CommonComponent/Sidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#EEF8FC]">
      <Header />
      <div className="flex min-h-[calc(100vh-100px)]">
        <Sidebar />
        <main className="min-w-0 flex-1 p-5 md:p-8">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default MainLayout;