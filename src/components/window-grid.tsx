import Window from "./window";

export default function WindowGrid() {
  const windows = [];
  for (let i = 0; i < 24; i++) {
    windows.push(<Window key={i} dayNum={i + 1} opened={i > 12} />);
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen max-w-full max-h-full">
      <div className="flex flex-row flex-wrap lg:w-1/2 md:w-full">
        {windows}
      </div>
    </div>
  );
}
