// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Header from "./Component/CommonComponent/Header";
// import Sidebar from "./Component/CommonComponent/Sidebar";

// import Dashboard from "./Component/Pages/Dashboard";
// import ProductDetails from "./Component/Pages/ProductDetails";
// import CategoryProducts from "./Component/Pages/CategoryProducts";
// import Login from "./Component/Authentication/Login";
// import Favorites from "./Component/Pages/Favorites";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <div className="flex min-h-[calc(100vh-100px)]">
//         <Sidebar />
//         <main className="min-w-0 flex-1 bg-[#f8f9fb] p-4 md:p-6">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/products/:id" element={<ProductDetails />} />
//             <Route path="/category/:category" element={<CategoryProducts />}/>
//             <Route path="/favorites" element={<Favorites/>}/>
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "./Component/Navigate/AuthLayout";
import MainLayout from "./Component/Navigate/MainLayout";

import Dashboard from "./Component/Pages/Dashboard";
import ProductDetails from "./Component/Pages/ProductDetails";
import CategoryProducts from "./Component/Pages/CategoryProducts";
import Favorites from "./Component/Pages/Favorites";

import Login from "./Component/Authentication/Login";
import Signup from "./Component/Authentication/SignUp";

import NotFound from "./Component/Pages/Notfound";
import ProtectedRoute from "./Component/Navigate/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        
        <Route element={<ProtectedRoute/>}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<CategoryProducts />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Route>

       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;