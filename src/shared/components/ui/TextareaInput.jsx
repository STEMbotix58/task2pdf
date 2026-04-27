import React, { useState } from "react";

const TextareaInput = ({
  label,
  minParagraph,
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
  const [paraError, setParaError] = useState(null);

  const handleBlur = (e) => {
    const text = e.target.value;

    const paragraphCount = text
      .split("\n")
      .filter((p) => p.trim() !== "").length;

    if (minParagraph && paragraphCount < minParagraph) {
      setParaError(`Minimum ${minParagraph} paragraphs required`);
    } else {
      setParaError(null);
    }
  };

  return (
    <div className="mb-4" style={style}>
      {label && (
        <label htmlFor={id} className="labelClass">
          {label}
          {required && <span className="text-red-600"> *</span>}
          {minParagraph && (
            <span className="text-gray-600 text-[12px] mt-1 block font-normal capitalize">
              {minParagraph} paragraphs minimum required.
            </span>
          )}
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
        // onBlur={handleBlur}
        {...rest}
      />

      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      {/* {paraError && <p className="text-red-600 text-xs mt-1">{paraError}</p>} */}
    </div>
  );
};

export default TextareaInput;
