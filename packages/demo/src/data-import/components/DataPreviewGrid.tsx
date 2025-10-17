import React from "react";
import { DataFile } from "../types/DataPreview.types.ts";
import { DataImportSelection } from "../types/DataImportSelection.types";

interface Props {
  data: DataFile | null;
  selection: DataImportSelection | null; // selectedRow: number | null; selectedColumn: string | null;
}

export const DataPreviewGrid: React.FC<Props> = ({
  data,
  // selection,
}) => {
  if (!data) return <div>No data loaded</div>;

  return <div>{/* Render your table or AG Grid here */}</div>;
};
