import React from "react";

const FormHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-5 ${className}`}>
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>

      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
  );
};

export default FormHeader;
