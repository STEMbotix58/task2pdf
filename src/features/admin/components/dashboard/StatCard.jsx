import React from "react";
import { FiMoreHorizontal, FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const StatCard = ({ title, value, trend, isHighlighted }) => {
  // If highlighted, use the lime green theme from the image
  const baseClasses = isHighlighted
    ? "bg-[#ccf575] text-gray-900"
    : "bg-white text-gray-900";

  const labelClasses = isHighlighted ? "text-gray-800" : "text-gray-500";

  return (
    <div
      className={`p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between ${baseClasses}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-sm font-medium ${labelClasses}`}>{title}</h3>
        {/* <button className={`${labelClasses} hover:text-gray-900`}>
          <FiMoreHorizontal />
        </button> */}
      </div>

      <div className="flex items-end justify-between">
        <span className="text-4xl font-bold">{value}</span>
        {trend && (
          <div
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md ${
              trend > 0
                ? isHighlighted
                  ? "bg-white/50 text-green-700"
                  : "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {trend > 0 ? <FiTrendingUp /> : <FiTrendingDown />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
