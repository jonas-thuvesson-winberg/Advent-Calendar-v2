export default function Window({
  dayNum,
  opened,
}: {
  dayNum: number;
  opened: boolean;
}) {
  return (
    <div
      style={{ minWidth: "100px", minHeight: "100px" }}
      className="m-2 bg-green-800 rounded-md shadow-xl flex justify-center items-center"
    >
      {opened ? (
        <span style={{ fontSize: "1.5rem" }}>🌟</span>
      ) : (
        <span className="font-bold">{dayNum}</span>
      )}
    </div>
  );
}
