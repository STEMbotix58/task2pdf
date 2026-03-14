import React from "react";
import { FaAngleDown } from "react-icons/fa";

const SelectInput = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error = null,
  required = false,
  id,
  name,
  className = "selectClass",
  style,
}) => {
  return (
    <div className="mb-4" style={style}>
      {label && (
        <label htmlFor={id} className="labelClass">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}

      <div className="relative w-full">
        <select
          id={id}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          className={className}
          required={required}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <FaAngleDown />
        </div>
      </div>

      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectInput;
