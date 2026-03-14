import React from "react";

const ErrorText = ({ children }) => {
  if (!children) return null;

  return <p className="text-red-600 text-xs mt-1">{children}</p>;
};

export default ErrorText;
