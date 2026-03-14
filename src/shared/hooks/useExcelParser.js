import { useState, useCallback } from "react";
import * as XLSX from "xlsx";

export const useExcelParser = (onComplete) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const normalizeReceived = useCallback((value) => {
    if (value === true) return true;
    if (value === false) return false;
    if (value == null) return false;
    if (typeof value === "number") return value === 1;
    if (typeof value === "string")
      return ["true", "yes", "1", "y"].includes(value.toLowerCase().trim());
    // Fallback: try string coercion for other types (e.g. objects)
    try {
      const s = String(value).toLowerCase().trim();
      return ["true", "yes", "1", "y"].includes(s);
    } catch (e) {
      return false;
    }
  }, []);

  const parseFile = useCallback(
    async (file) => {
      if (!file) return;

      setIsProcessing(true);

      const data = await file.arrayBuffer();

      setTimeout(() => {
        try {
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames?.[0];
          if (!sheetName) {
            onComplete && onComplete([]);
            setIsProcessing(false);
            return;
          }

          const worksheet = workbook.Sheets[sheetName];

          // Get rows as array-of-arrays instead of objects (faster & lighter)
          const rows = XLSX.utils.sheet_to_json(worksheet, {
            header: 1, // <-- important
            defval: "",
          });

          if (rows.length <= 1) {
            onComplete && onComplete([]);
            setIsProcessing(false);
            return;
          }

          const header = rows[0].map((h) => String(h).trim());
          const dataRows = rows.slice(1);

          const nameIdx =
            header.findIndex((h) => /item\s*name|name/i.test(h)) ?? -1;
          const qtyIdx = header.findIndex((h) => /qty|quantity/i.test(h)) ?? -1;
          const recvIdx =
            header.findIndex((h) => /received|is\s*received/i.test(h)) ?? -1;

          const CHUNK = 50; // process 50 rows per frame
          const result = [];
          let idx = 0;

          const processChunk = () => {
            const end = Math.min(idx + CHUNK, dataRows.length);

            for (let j = idx; j < end; j++) {
              const row = dataRows[j];
              if (!row) continue;

              const name = row[nameIdx] || "";
              if (!name) continue;

              result.push({
                id: result.length + 1,
                itemName: String(name).trim(),
                quantity: Number(row[qtyIdx]) || 0,
                received: normalizeReceived(row[recvIdx]),
              });
            }

            idx = end;

            if (idx < dataRows.length) {
              // Yield to browser to avoid freeze
              setTimeout(processChunk, 0);
            } else {
              onComplete && onComplete(result);
              setIsProcessing(false);
            }
          };

          processChunk();
        } catch (err) {
          console.error("Failed to parse Excel file:", err);
          onComplete && onComplete([]);
          setIsProcessing(false);
        }
      }, 0);
    },
    [normalizeReceived, onComplete],
  );

  return { parseFile, isProcessing };
};
