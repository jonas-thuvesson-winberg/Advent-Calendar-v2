import useLocalStorage from "@/hooks/use-local-storage";
import Window from "./window";
import { useEffect } from "react";

const entries: { ytCode: string; start: number | null; end: number | null }[] =
  [
    {
      ytCode: "7yLxxyzGiko",
      start: null,
      end: null,
    },
  ];
export default function WindowGrid() {
  const windows = [];
  const d = new Date("2023-12-01");

  const getEntry = (
    data: {
      ytCode: string;
      start: number | null;
      end: number | null;
    } | null
  ) => {
    if (data) {
      return data;
    } else {
      return {
        ytCode: null,
        start: null,
        end: null,
      };
    }
  };

  for (let i = 0; i < 24; i++) {
    // const { opened } = dayOpened;

    const { ytCode, start, end } = getEntry(
      i < entries.length ? entries[i] : null
    );

    windows.push(
      <Window
        key={ytCode || i}
        ytCode={ytCode || ""}
        dayNum={i + 1}
        disabled={!ytCode || (d.getMonth() !== 12 && i + 1 > d.getDate())}
        start={start || 0}
      />
    );
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen max-w-full max-h-full">
      <div className="flex flex-row flex-wrap lg:w-1/2 md:w-full">
        {windows}
      </div>
    </div>
  );
}
