import { Inter } from "next/font/google";
import Snowflake from "@/components/snowflake";
import { ReactElement, useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const audioElem = useRef<HTMLAudioElement>(null);
  const overlayElem = useRef<HTMLDivElement>(null);
  const musicStarted = useRef(false);

  useEffect(() => {
    if (audioElem.current) {
      console.log("playing");
      // audioElem.current.click();
    }
  }, []);
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
    const horizontal = getRandomInt(2500, 0);
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
        ref={overlayElem}
        onClick={playMusic}
        className={`absolute h-screen w-screen`}
      ></div>
      <audio ref={audioElem} src="jingle-bells.mp3" loop={true}></audio>
      <main className={`h-screen w-screen`}>
        {snowFlakes}

        {/* <Snowflake />
      <Snowflake horizontalOffset={50} speed={5} size={7} />
      <Snowflake horizontalOffset={100} speed={4} size={5} delay={100} />
      <Snowflake horizontalOffset={100} speed={2} size={10} delay={100} />
      <Snowflake horizontalOffset={100} speed={7} size={8} delay={100} />
      <Snowflake horizontalOffset={150} speed={3} size={5} delay={300} />
      <Snowflake speed={7} size={10} horizontalOffset={200} />
      <Snowflake horizontalOffset={250} />
      <Snowflake speed={4} size={10} horizontalOffset={300} />
      <Snowflake speed={10} size={5} horizontalOffset={350} delay={100} />
      <Snowflake speed={4} size={8} horizontalOffset={400} delay={300} />
      <Snowflake speed={6} size={7} horizontalOffset={450} delay={500} />
      <Snowflake speed={5} size={7} horizontalOffset={425} />
      <Snowflake speed={6} size={7} horizontalOffset={450} />
      <Snowflake speed={7} size={7} horizontalOffset={475} />
      <Snowflake speed={2} size={5} horizontalOffset={450} delay={100} />
      <Snowflake speed={14} size={5} horizontalOffset={500} delay={300} />
      <Snowflake speed={7} size={10} horizontalOffset={550} />
      <Snowflake horizontalOffset={600} />
      <Snowflake speed={4} size={10} horizontalOffset={700} />
      <Snowflake speed={3} size={5} horizontalOffset={725} delay={100} />
      <Snowflake speed={4} size={8} horizontalOffset={800} delay={300} />
      <Snowflake horizontalOffset={800} />
      <Snowflake speed={8} size={7} horizontalOffset={950} delay={500} />
      <Snowflake horizontalOffset={975} />
      <Snowflake speed={10} size={7} horizontalOffset={1000} />
      <Snowflake speed={2} size={5} horizontalOffset={1100} delay={100} />
      <Snowflake speed={13} size={5} horizontalOffset={1200} delay={200} />
      <Snowflake speed={8} size={8} horizontalOffset={1225} delay={100} />
      <Snowflake horizontalOffset={1300} />
      <Snowflake horizontalOffset={1325} speed={7} size={10} />
      <Snowflake horizontalOffset={1400} speed={4} size={5} delay={100} />
      <Snowflake horizontalOffset={1425} speed={12} size={8} delay={300} />
      <Snowflake horizontalOffset={1500} speed={2} size={7} delay={500} />
      <Snowflake horizontalOffset={1550} />
      <Snowflake horizontalOffset={1575} speed={10} size={7} />
      <Snowflake horizontalOffset={1600} speed={2} size={5} delay={100} />
      <Snowflake horizontalOffset={1700} speed={3} size={5} delay={300} />
      <Snowflake horizontalOffset={1800} speed={10} size={10} />
      <Snowflake horizontalOffset={1800} speed={12} size={10} />
      <Snowflake horizontalOffset={1800} speed={15} size={10} />
      <Snowflake horizontalOffset={1800} speed={7} size={10} />
      <Snowflake horizontalOffset={1800} speed={9} size={10} />
      <Snowflake horizontalOffset={1810} />
      <Snowflake horizontalOffset={1900} speed={12} size={10} />
      <Snowflake horizontalOffset={2000} speed={3} size={5} delay={100} />
      <Snowflake horizontalOffset={2050} speed={10} size={8} delay={300} />
      <Snowflake horizontalOffset={2150} speed={2} size={7} delay={500} /> */}
      </main>
    </>
  );
}
