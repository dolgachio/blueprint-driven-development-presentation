import { describe, it } from "vitest";
import { DataCell } from "../types/DataPreview.types";

import { formatDataCellForPreview as sut } from "./formatDataCellForPreview";

describe("formatDataCellForPreview", () => {
  let dataCell: DataCell | null;

  it("should return None for null input", () => {
    dataCell = null;

    expect(sut(dataCell)).toBe("None");
  });

  describe("when input is a number", () => {
    it("should add currency formatting to it", () => {
      dataCell = 1234.56;

      expect(sut(dataCell)).toBe("$1,234.56");
    });
  });
});
