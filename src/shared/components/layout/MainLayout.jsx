import React from "react";
import logo from "@/shared/assets/images/STEMbotix-Logo.png";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/shared/auth/AuthContext";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* HEADER SECTION */}
        <div className="w-full mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* LEFT SIDE — Logo + Title */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src={logo}
                alt="DocGen Logo"
                className="w-40 md:h-15 md:w-auto object-contain mr-5"
              />

              <div>
                <h1 className="text-xl md:text-3xl mt-2 font-extrabold text-blue-600 tracking-tight leading-tight">
                  PDF Generator
                </h1>
              </div>
            </div>

            {/* RIGHT SIDE — Navigation */}
            <div className="flex items-center gap-3">
              {/* Back to Home */}
              {!isHomePage && (
                <Link
                  to="/"
                  className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors"
                >
                  ← Switch Document Type
                </Link>
              )}

              {/* Login Button */}
              {!user && (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-10 px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
