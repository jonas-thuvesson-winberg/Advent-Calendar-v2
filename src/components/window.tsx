import { forwardRef, useState } from "react";
import WindowDialog from "./window-dialog";
import useLocalStorage from "@/hooks/use-local-storage";

export interface WindowProps {
  dayNum: number;
  ytCode: string;
  disabled: boolean;
  start: number;
}

export default function Window({
  dayNum,
  ytCode,
  disabled,
  start,
}: WindowProps) {
  const additional = disabled
    ? ""
    : "hover:bg-green-700 hover:shadow-2xl hover:shadow-color-slate-800/60 hover:cursor-pointer";

  const [initialEntry, setEntry] = useLocalStorage({
    key: `day-${dayNum}`,
    initialValue: {
      opened: false,
    },
  });

  const [opened, setOpened] = useState(initialEntry?.opened);

  return (
    <WindowDialog start={start} video={ytCode} disabled={disabled}>
      <div
        style={{
          minWidth: "100px",
          minHeight: "100px",
          pointerEvents: disabled ? "none" : "auto",
        }}
        className={
          "m-2 bg-green-800 rounded-md flex justify-center items-center transition-all ease-in-out " +
          additional
        }
        onClick={() => {
          console.log("click");
          setOpened(true);
          setEntry({ opened: true });
        }}
      >
        {opened ? (
          <span style={{ fontSize: "1.5rem" }}>🌟</span>
        ) : (
          <span className="font-bold">{dayNum}</span>
        )}
      </div>
    </WindowDialog>
  );

  //   <WindowDialog btn={ref} />;
}
