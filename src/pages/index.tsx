import { Inter } from "next/font/google";
import Snowflake from "@/components/snowflake";
import { ReactElement, useEffect, useRef } from "react";
import WindowGrid from "@/components/window-grid";

const inter = Inter({ subsets: ["latin"] });

const maxW = 4600;
const maxH = 3300;

export default function Home() {
  const audioElem = useRef<HTMLAudioElement>(null);
  const overlayElem = useRef<HTMLDivElement>(null);
  const musicStarted = useRef(false);

  const playMusic = () => {
    if (musicStarted.current) return;
    audioElem.current?.play();
    overlayElem.current?.classList.add("hidden");
    musicStarted.current = true;
  };

  const getRandomInt = (max: number, min: number): number => {
    return Math.floor(Math.random() * max) + min;
  };

  const snowFlakes: ReactElement[] = [];
  for (let i = 0; i < 200; i++) {
    const size = getRandomInt(10, 3);
    const speed = getRandomInt(15, 3);
    const horizontal = getRandomInt(maxW, 0);
    const delay = getRandomInt(800, 0);
    snowFlakes.push(
      <Snowflake
        size={size}
        speed={speed}
        horizontalOffset={horizontal}
        delay={delay}
        key={i}
      />
    );
  }

  return (
    <>
      <div
        style={{ zIndex: "2" }}
        ref={overlayElem}
        onClick={playMusic}
        className={`absolute h-screen w-screen`}
      ></div>
      <audio ref={audioElem} src="jingle-bells.mp3" loop={true}></audio>
      <main
        style={{ maxWidth: maxW + "px", maxHeight: maxH + "px" }}
        className={`h-screen w-screen bg-red-900`}
      >
        <div
          style={{ zIndex: "1", maxWidth: maxW + "px", maxHeight: maxH + "px" }}
          className="w-full h-full absolute overflow-x-hidden overflow-y-hidden"
        >
          {snowFlakes}
        </div>
        <WindowGrid />
      </main>
    </>
  );
}
