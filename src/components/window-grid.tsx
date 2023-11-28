import useLocalStorage from "@/hooks/use-local-storage";
import Window from "./window";
import { RefObject, useEffect } from "react";
import { AudioHandlers } from "@/pages";

const entries: { ytCode: string; start: number | null; end: number | null }[] =
  [
    // 1
    {
      // katter och kyckling
      ytCode: "7yLxxyzGiko",
      start: null,
      end: null,
    },
    // 2
    {
      // kompisbandet, imse vimse spindel
      ytCode: "CIEQJStNdko",
      start: 5,
      end: null,
    },
    // 3
    {
      // Arne Alligator
      ytCode: "B-RR9wsa12Q",
      start: 4,
      end: null,
    },
    // 4
    {
      // Spindel
      ytCode: "Jle0NdI1PDc",
      start: 5,
      end: null,
    },

    // 5
    {
      // Kompisbandet, hjul på bussen
      ytCode: "YVukNZzzoIo",
      start: 5,
      end: null,
    },
    // 6
    {
      // Snigel
      ytCode: "C1d_aq8Mh6k",
      start: null,
      end: null,
    },
    // 7
    {
      // Kompisbandet, lilla snigel
      ytCode: "gSXqsz0ls2o",
      start: 5,
      end: null,
    },
    // 8
    {
      // Tiptapp
      ytCode: "TCJHC4ojVEw",
      start: 5,
      end: null,
    },
    // 9
    {
      // Kompisbandet, karlsson
      ytCode: "4eB_F1tWNjI",
      start: 5,
      end: null,
    },
    // 10
    {
      // Kalle Anka
      ytCode: "5lDdJOjU92A",
      start: 4,
      end: null,
    },
    // 11
    {
      // Marsvin
      ytCode: "cotkdOCD1eY",
      start: 0,
      end: null,
    },
  ];
export default function WindowGrid({
  audioHandlers,
}: {
  audioHandlers: AudioHandlers;
}) {
  const windows = [];
  const d = new Date(`2023-12-${entries.length}`); // for testing
  // const d = new Date();

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
    <div className="flex justify-center items-center h-screen w-screen max-w-full max-h-full">
      <div className="flex flex-row flex-wrap lg:w-1/2 md:w-full">
        {windows}
      </div>
    </div>
  );
}
