import { useState } from "react";
import WindowDialog from "./window-dialog";
import useLocalStorage from "@/hooks/use-local-storage";
import { AudioHandlers } from "@/pages";
import { version } from "@/data/version";

const makeKey = (dayNum: number, version: number) => `day-${dayNum}-${version}`;

export interface WindowProps {
  dayNum: number;
  ytCode: string;
  disabled: boolean;
  start: number;
  end: number;
  audioHandlers: AudioHandlers;
  dayPassed: boolean;
}

export default function Window({
  dayNum,
  ytCode,
  disabled,
  start,
  end,
  audioHandlers,
  dayPassed,
}: WindowProps) {
  const isDisabled = disabled
    ? ""
    : `hover:bg-white/10 
      hover:border-[2px]
      hover:border-solid
      hover:border 
      hover:shadow-xl
      hover:shadow-color-slate-700/70 
      hover:cursor-pointer 
      hover:translate-y-[-4px] 
      transition
      ease-in-out 
      duration-300`;

  const isAvailable = dayPassed && !disabled ? "bg-white/40" : "bg-white/10";
  const [initialEntry, setEntry] = useLocalStorage({
    key: makeKey(dayNum, version),
    initialValue: {
      opened: false,
    },
  });

  const [opened, setOpened] = useState(initialEntry?.opened);

  return (
    <WindowDialog
      start={start}
      end={end}
      video={ytCode}
      disabled={disabled}
      audioHandlers={audioHandlers}
    >
      <div
        style={{
          minWidth: "100px",
          minHeight: "100px",
          pointerEvents: disabled ? "none" : "auto",
        }}
        className={
          "m-4 rounded-md flex justify-center items-center transition-all ease-in-out backdrop-blur-sm " +
          isDisabled +
          " " +
          isAvailable
        }
        onClick={() => {
          console.log("click");
          audioHandlers.pauseMusic();
          setOpened(true);
          setEntry({ opened: true });
        }}
      >
        {opened ? (
          <span style={{ fontSize: "1.5rem" }}>🌟</span>
        ) : // <span style={{ fontSize: "1.5rem" }}>❄️</span>
        dayPassed && !disabled ? (
          <span className={"text-black text-lg"}>{dayNum}</span>
        ) : (
          ""
        )}
      </div>
    </WindowDialog>
  );

  //   <WindowDialog btn={ref} />;
}
