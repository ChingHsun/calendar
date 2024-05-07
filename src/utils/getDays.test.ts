import { format } from "date-fns";
import getDays from "./getDays";
import { describe, it, expect } from "vitest";

describe("getDays function", () => {
  it("2024-05-15", () => {
    const currentDate = new Date("2024-05-15");

    const result = getDays(currentDate);

    expect(result).toHaveLength(35);

    expect(format(result[0], "yyyy-MM-dd")).toBe("2024-04-28");
    expect(format(result[34], "yyyy-MM-dd")).toBe("2024-06-01");
  });

  it("2012-02-09", () => {
    const currentDate = new Date("2012-02-09");

    const result = getDays(currentDate);

    expect(result).toHaveLength(35);

    expect(format(result[0], "yyyy-MM-dd")).toBe("2012-01-29");
    expect(format(result[34], "yyyy-MM-dd")).toBe("2012-03-03");
  });

  it("1997-06-03", () => {
    const currentDate = new Date("1997-06-03");

    const result = getDays(currentDate);

    expect(result).toHaveLength(35);

    expect(format(result[0], "yyyy-MM-dd")).toBe("1997-06-01");
    expect(format(result[34], "yyyy-MM-dd")).toBe("1997-07-05");
  });
});
