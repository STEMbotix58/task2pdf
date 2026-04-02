import React from "react";
import logo from "@/shared/assets/images/STEMbotix-Logo.png";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/shared/auth/AuthContext";
import { MdLogin } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const { user } = useAuth();
  console.log(useAuth());
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

              {/* Login / Admin Button */}
              <div className="flex items-center">
                {!user ? (
                  <Link
                    to="/login"
                    className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Login</span>
                    <MdLogin size={16} />
                  </Link>
                ) : (
                  <Link
                    to="/admin"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-600 text-blue-600 bg-white text-xs font-bold uppercase tracking-wider transition-all hover:bg-blue-50 hover:border-blue-700 active:scale-95 shadow-sm"
                  >
                    <FaUserCircle size={16} />
                    Dashboard
                  </Link>
                )}
              </div>
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
