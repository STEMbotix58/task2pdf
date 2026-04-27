import React from "react";

const ImageUploadField = ({
  label,
  value = [],
  onChange,
  error = null,
  minSelection = 1,
  maxSelection = 8,
  required = false,
  id = "images",
  name = "images",
}) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length < minSelection) {
      alert(`Please upload at least ${minSelection} images.`);
      return;
    }

    if (files.length > maxSelection) {
      alert(`You can only upload up to ${maxSelection} images.`);
      return;
    }

    onChange(files);
  };

  const getImageSrc = (item) => {
    if (item instanceof File) {
      return URL.createObjectURL(item);
    }

    if (typeof item === "string") {
      return item; // Supabase URL
    }

    return "";
  };

  const removeImage = (index) => {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="mb-4">
      {label && (
        <>
          <label htmlFor={id} className="labelClass">
            {label}
            {required && <span className="text-red-600"> *</span>}
            <span className="text-gray-600 text-[12px] mt-1 block font-normal">
              Exact {maxSelection} images required.
            </span>
          </label>
        </>
      )}

      <input
        type="file"
        accept="image/*"
        id={id}
        name={name}
        multiple
        onChange={handleFileChange}
        className="fileInputClass"
        required={required}
      />

      {/* Preview Grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {value.map((file, index) => (
            <div
              key={index}
              className="relative border rounded-lg overflow-hidden"
            >
              <img
                src={getImageSrc(file)}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover"
                loading="lazy"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default ImageUploadField;
