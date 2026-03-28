import React, { useState } from "react";
import { useAuth } from "@/shared/auth/AuthContext";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import STEMLogo from "@/shared/assets/images/STEMbotix-Logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message || "Invalid credentials");
      setLoading(false);
      return;
    }

    navigate("/admin");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#eee] flex flex-col items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full">
        {/* Header Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center  rounded-2xl mb-5">
            <img src={STEMLogo} alt="" className="w-70 h-full" />

            {/* <MdLogin size={28} /> */}
          </div>
          {/* <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Admin Portal</h2> */}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-10 border border-slate-100">
          {/* Error Message */}
          {error && (
            <div className="mb-6 flex items-center gap-3 p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 animate-pulse">
              <FiAlertCircle size={20} className="shrink-0" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <FiMail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <FiLock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center py-3.5 px-4 rounded-2xl font-bold text-white bg-blue-950 hover:bg-blue-800 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all active:scale-[0.97] disabled:opacity-70 disabled:pointer-events-none"
            >
              {loading ? (
                <CgSpinner className="w-6 h-6 animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  Sign In <MdLogin size={20} />
                </span>
              )}
            </button>
          </form>
        </div>

        <Link
          to="/"
          className="mt-5 flex justify-center text-center text-xs text-slate-400 uppercase tracking-[0.2em] font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
