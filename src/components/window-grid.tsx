import useLocalStorage from "@/hooks/use-local-storage";
import Window from "./window";
import { RefObject, useEffect } from "react";
import { AudioHandlers } from "@/pages";
import { entries, getTodaysDate, parseEntry } from "@/data/day-entries";

export default function WindowGrid({
  audioHandlers,
}: {
  audioHandlers: AudioHandlers;
}) {
  const windows = [];
  const d = getTodaysDate();
  // const d = new Date();

  for (let i = 0; i < 24; i++) {
    const { ytCode, start } = parseEntry(
      i < entries.length ? entries[i] : null
    );
    console.log("here");
    console.log(ytCode);
    const disabled = !ytCode || d.getMonth() + 1 !== 12 || d.getDate() < i + 1;
    windows.push(
      <Window
        dayPassed={d.getDate() >= i + 1}
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
    // <div className="flex justify-center items-center h-screen w-screen max-w-full max-h-full">
    <div className="flex flex-row flex-wrap lg:w-1/2 md:w-full">{windows}</div>
    // </div>
  );
}
