import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/auth/AuthContext";
import { IoExitOutline } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

const AdminTopbar = ({ activeTab }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = async () => {
    try {
      await auth?.signOut?.();
    } finally {
      localStorage.clear();
      navigate("/login", { replace: true });
    }
  };

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-gray-900 capitalize">
        {activeTab}
      </h1>

      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          Home
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Logout <FaSignOutAlt color="white" size={15} />
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;
