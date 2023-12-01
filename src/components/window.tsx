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
  audioHandlers: AudioHandlers;
  dayPassed: boolean;
}

export default function Window({
  dayNum,
  ytCode,
  disabled,
  start,
  audioHandlers,
  dayPassed,
}: WindowProps) {
  const isDisabled = disabled
    ? ""
    : "hover:bg-green-500 hover:shadow-2xl hover:shadow-color-slate-700/60 hover:cursor-pointer hover:translate-y-[-8px] transition-all ease-in-out duration-300";

  const isAvailable = dayPassed && !disabled ? "bg-green-600" : "bg-green-800";
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
          "m-2 rounded-md flex justify-center items-center transition-all ease-in-out " +
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
        ) : dayPassed && !disabled ? (
          <span className={"text-white font-bold"}>{dayNum}</span>
        ) : (
          ""
        )}
      </div>
    </WindowDialog>
  );

  //   <WindowDialog btn={ref} />;
}
