import { useState } from "react";
import { DataImportSelection } from "../types/DataImportSelection.types";
import { parseImportFile } from "../services/parseImportFile";
import { DataFile } from "../types/DataPreview.types.ts";

export function useDataImport() {
  const [data, setData] = useState<DataFile | null>(null);
  const [selection, setSelection] = useState<DataImportSelection>({});

  const handleFileUpload = async (file: File) => {
    const parsed = await parseImportFile(file);
    setData(parsed);
  };

  const handleSelectionChange = (newSelection: DataImportSelection) => {
    setSelection(newSelection);
  };

  const handleImport = () => {
    console.log("Importing selection", selection);
    // Add actual import logic here
  };

  return {
    data,
    selection,
    handleFileUpload,
    handleSelectionChange,
    handleImport,
  };
}
