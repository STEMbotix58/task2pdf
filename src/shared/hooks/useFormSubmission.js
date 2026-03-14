import { useState } from "react";

/**
 * Hook to handle form submission with database saving
 * @param {Function} saveFn - Database save function (saveDeliverySubmission, etc.)
 * @param {Function} onSuccess - Callback after successful save
 * @param {Function} onError - Callback on error
 */

export const useFormSubmission = (saveFn, onSuccess, onError) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setError] = useState(null);

  const submitForm = async (formData, ...args) => {
    setIsSaving(true);
    setError(null);

    try {
      // Call database save function (args may include additional parameters)
      const result = await saveFn(formData, ...args);

      if (!result.success) {
        throw new Error(result.error || "Failed to save submission");
      }

      // Success callback
      if (onSuccess) onSuccess(result.id);

      return result;
    } catch (err) {
      setError(err.message);
      if (onError) onError(err.message);
      throw err;
    } finally {
      setIsSaving(false);
    }
  };

  return { submitForm, isSaving, saveError };
};
