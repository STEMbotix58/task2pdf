import React from "react";

const Input = ({
  label,
  type = "text", // text | number | range | email | password | etc.
  value,
  onChange,
  placeholder,
  error = null,
  multiline = false,
  min,
  max,
  minLength,
  maxLength,
  required = true,
  id,
  name,
  className = "inputClass",
  style,
  ...rest
}) => {
  const inputProps = {
    id,
    name,
    value: value ?? "",
    onChange,
    placeholder,
    min,
    max,
    minLength,
    maxLength,
    required,
    className,
    style,
    ...rest,
  };

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold mb-2 text-slate-700"
        >
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}

      {multiline ? (
        <textarea {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}

      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
