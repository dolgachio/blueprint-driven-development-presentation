// import * as XLSX from "xlsx";
// import { DataImportSheet } from "../types/DataImport.types";
import { DataFile } from "../types/DataPreview.types.ts";

export async function parseImportFile(
  file: File
): Promise<DataFile | null> {
  return null;
  /*
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });

  const sheets: DataImportSheet[] = workbook.SheetNames.map((name) => {
    const sheet = workbook.Sheets[name];
    const json = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, {
      header: 1,
    });
    const [headers, ...rows] = json;
    const formattedRows = rows.map((r) =>
      Object.fromEntries((headers as string[]).map((h, i) => [h, r[i]]))
    );
    return { name, headers: headers as string[], rows: formattedRows };
  });

  return { fileName: file.name, sheets };
  */
}
