import React from "react";
import { useDataImport } from "./hooks/useDataImport";
import { FileUploader } from "./components/FileUploader";
import { DataPreviewGrid } from "./components/DataPreviewGrid";
import { DataImportForm } from "./components/DataImportForm";

export const ExcelImportPage: React.FC = () => {
  const {
    data,
    selection,
    handleFileUpload,
    handleSelectionChange,
    handleImport,
  } = useDataImport();

  return (
    <div>
      <h2>Excel Import</h2>
      <FileUploader onFileSelected={handleFileUpload} />
      <DataImportForm
        selection={selection}
        onSelectionChange={handleSelectionChange}
        onImport={handleImport}
      />
      <DataPreviewGrid data={data} selection={selection} />
    </div>
  );
};
