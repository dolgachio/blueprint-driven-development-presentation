import React from "react";
import { DataImportSelection } from "../types/DataImportSelection.types";

interface Props {
  selection: DataImportSelection;
  onSelectionChange: (selection: DataImportSelection) => void;
  onImport: () => void;
}

export const DataImportForm: React.FC<Props> = ({
  selection,
  onSelectionChange,
  onImport,
}) => (
  <div>
    <button onClick={onImport}>Import</button>
  </div>
);
