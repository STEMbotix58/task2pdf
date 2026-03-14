import React from "react";

const TextareaInput = ({
  label,
  id,
  name,
  value,
  onChange,
  rows = 3,
  required = false,
  maxLength,
  placeholder,
  error = null,
  className = "inputClass resize-none",
  style,
  ...rest
}) => {
  return (
    <div className="mb-4" style={style}>
      {label && (
        <label htmlFor={id} className="labelClass">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}

      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value ?? ""}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className={className}
        {...rest}
      />

      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextareaInput;
