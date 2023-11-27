import useLocalStorage from "@/hooks/use-local-storage";
import Window from "./window";
import { RefObject, useEffect } from "react";
import { AudioHandlers } from "@/pages";

const entries: { ytCode: string; start: number | null; end: number | null }[] =
  [
    {
      ytCode: "7yLxxyzGiko",
      start: null,
      end: null,
    },
  ];
export default function WindowGrid({
  audioHandlers,
}: {
  audioHandlers: AudioHandlers;
}) {
  const windows = [];
  const d = new Date("2023-12-04");

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
    const { ytCode, start } = getEntry(i < entries.length ? entries[i] : null);
    const disabled = !ytCode || d.getMonth() + 1 !== 12 || d.getDate() < i + 1;
    windows.push(
      <Window
        key={ytCode || i}
        ytCode={ytCode || ""}
        dayNum={i + 1}
        disabled={disabled}
        start={start || 0}
        audioHandlers={audioHandlers}
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
