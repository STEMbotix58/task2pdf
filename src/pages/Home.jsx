import React from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaRegFileAlt, FaRegFileWord } from "react-icons/fa";
import { FaFileArrowDown, FaFileCircleCheck } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      {/* MODE SELECT UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* STEMLab Project OPTION */}
        <Link
          to="/flp-report"
          className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-lime-800 hover:shadow-xl hover:shadow-lime-100/80 transition-all duration-300 relative overflow-hidden block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-800/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-lime-800 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-cyan-800/50">
              <FaFileArrowDown color="white" size={24} />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Financial Literacy Program
            </h2>

            <div className="mt-8 flex items-center text-lime-800 font-bold text-sm">
              Start Building{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>

        {/* STEMLab Project OPTION */}
        <Link
          to="/stemlab-report"
          className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-cyan-800 hover:shadow-xl hover:shadow-cyan-800/10 transition-all duration-300 relative overflow-hidden block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-800/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-cyan-800 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-cyan-800/50">
              <FaRegFileWord color="white" size={24} />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              STEMLab Project Report
            </h2>

            <div className="mt-8 flex items-center text-cyan-800 font-bold text-sm">
              Start Building{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>

        {/* Kadi Project OPTION */}
        <Link
          to="/project"
          className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#B027F5] hover:shadow-xl hover:shadow-[#B027F5]/10 transition-all duration-300 relative overflow-hidden block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B027F5]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-[#B027F5] rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-[#B027F5]/50">
              <FaRegFileWord color="white" size={24} />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Kadi Project Report
            </h2>

            <div className="mt-8 flex items-center text-[#B027F5] font-bold text-sm">
              Start Building{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>

        {/* PROPOSAL OPTION */}
        <Link
          to="/proposal"
          className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-200">
              <FaRegFileAlt color="white" size={24} />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Project Proposal
            </h2>

            <div className="mt-8 flex items-center text-blue-600 font-bold text-sm">
              Start Building{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>

        {/* REPORT OPTION */}
        <Link
          to="/report"
          className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 relative overflow-hidden block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-emerald-200">
              <FaChartBar color="white" size={25} />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Impact Report
            </h2>

            <div className="mt-8 flex items-center text-emerald-600 font-bold text-sm">
              Generate Report{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>

        {/* Delivery OPTION */}
        <Link
          to="/delivery"
          className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 relative overflow-hidden block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-red-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-red-200">
              <FaFileCircleCheck color="white" size={25} />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Delivery Certificate
            </h2>

            <div className="mt-8 flex items-center text-red-600 font-bold text-sm">
              Generate Certificate{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
