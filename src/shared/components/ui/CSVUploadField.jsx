import React, { useState } from "react";
import Papa from "papaparse";
import Input from "./Input"; // Adjust the path based on your folder structure

function CSVUploadField({ onDataParsed }) {
  const [error, setError] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setError(null); // Reset error state on new selection

    if (!file) return;

    // Optional: Validate file type before parsing
    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      setError("Please upload a valid CSV file.");
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.data.length === 0) {
          setError("The uploaded CSV file is empty.");
          return;
        }

        const row = results.data[0];
        onDataParsed(row);
      },
      error: (err) => {
        console.error(err);
        setError("Error parsing CSV file.");
      },
    });
  };

  return (
    <>
      <Input
        id="csv-upload"
        type="file"
        accept=".csv"
        onChange={handleUpload}
        error={error}
        required={false}
        className="fileInputClass"
      />
    </>
  );
}

export default CSVUploadField;
