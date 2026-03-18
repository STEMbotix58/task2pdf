import React from "react";

const Button = ({
  title,
  onClick,
  variant = "primary", // primary | secondary | danger | outline
  disabled = false,
  loading = false,
  style = {},
  textStyle = {},
  type = "button",
  children,
  ...rest
}) => {
  const baseClasses =
    "px-6 py-2 rounded-md font-semibold text-sm transition duration-200 flex items-center justify-center";

  const variants = {
    primary: "bg-[#0F172A] text-white hover:opacity-90",
    secondary: "bg-gray-600 text-white hover:opacity-90",
    green: "bg-green-600 text-white hover:opacity-90",
    danger: "bg-red-600 text-white hover:opacity-90",
    outline:
      "border border-[#0F172A] text-[#0F172A] bg-transparent hover:bg-gray-100",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${
        disabled || loading ? disabledClasses : ""
      }`}
      style={style}
      {...rest}
    >
      {loading ? (
        <span
          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
          style={
            variant === "outline"
              ? { borderColor: "#0F172A transparent transparent transparent" }
              : {}
          }
        />
      ) : (
        <span style={textStyle}>{title}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
