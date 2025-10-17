export type DataCell = string | number | boolean | null;

export type DataRow = Record<string, DataCell>;

export type DataSheet = {
  name: string;
  headers: string[];
  rows: DataRow[];
};

export type DataFile = {
  fileName: string;
  sheets: DataSheet[];
};
