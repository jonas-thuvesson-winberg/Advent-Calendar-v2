import { forwardRef } from "react";
import WindowDialog from "./window-dialog";

export default function Window({
  dayNum,
  opened,
}: {
  dayNum: number;
  opened: boolean;
}) {
  return (
    <WindowDialog>
      <div
        style={{ minWidth: "100px", minHeight: "100px" }}
        className="m-2 bg-green-800 rounded-md flex justify-center items-center transition-all ease-in-out hover:bg-green-700 hover:shadow-2xl hover:shadow-color-slate-800/60 hover:cursor-pointer"
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
