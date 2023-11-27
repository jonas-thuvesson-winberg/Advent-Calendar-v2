import { Inter } from "next/font/google";
import Snowflake from "@/components/snowflake";
import { ReactElement, useRef } from "react";
import WindowGrid from "@/components/window-grid";
import NoSsr from "@/components/no-ssr";
import {
  SpringRef,
  animated,
  config,
  useSpring,
  useTransition,
} from "react-spring";

const inter = Inter({ subsets: ["latin"] });

const maxW = 4600;
const maxH = 3300;

export interface AudioHandlers {
  pauseMusic: () => void;
  playMusic: () => void;
}

export default function Home() {
  const [santaStyle, santaAnimRef] = useSpring(() => ({
    config: config.slow,
    from: { opacity: 1, transform: "rotate(0turn)" },
  }));

  const [overlayStyle, overlayAnimRef] = useSpring(() => ({
    config: config.slow,
    from: { opacity: 1 },
  }));

  const audioElem = useRef<HTMLAudioElement>(null);
  const overlayElem = useRef<HTMLDivElement>(null);
  const enteredPage = useRef(false);

  const turnDownMusic = () => {
    if (audioElem.current) {
      audioElem.current.pause();
      audioElem.current.volume = 0.5;
    }
  };

  const playMusic = () => {
    if (audioElem.current) {
      audioElem.current.volume = 0.5;
      audioElem.current.play();
    }
  };

  const audioHandlers: AudioHandlers = {
    pauseMusic: turnDownMusic,
    playMusic,
  };

  const onClick = () => {
    if (enteredPage.current) return;
    santaAnimRef.start({
      to: { opacity: 0, transform: "rotate(1turn)" },
      onStart: () => {
        console.log("start");
        playMusic();
        enteredPage.current = true;

        setTimeout(() => {
          overlayElem.current?.classList.add("hidden");
          console.log("off");
        }, 500);
      },
    });
    overlayAnimRef.start({
      to: { opacity: 0 },
    });
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
      <NoSsr key={i}>
        <Snowflake
          size={size}
          speed={speed}
          horizontalOffset={horizontal}
          delay={delay}
        />
      </NoSsr>
    );
  }

  return (
    <>
      <animated.div
        style={overlayStyle}
        ref={overlayElem}
        className={`z-10 absolute h-screen w-screen flex justify-center items-center bg-black/50`}
      >
        <animated.img
          onClick={onClick}
          style={santaStyle}
          src="/santa2.png"
          width={500}
          height={500}
          alt="Santa"
        />
      </animated.div>
      <audio ref={audioElem} src="jingle-bells.mp3" loop={true}></audio>
      <main
        style={{ maxWidth: maxW + "px", maxHeight: maxH + "px" }}
        className={`h-screen w-screen bg-red-900`}
      >
        <div
          style={{
            maxWidth: maxW + "px",
            maxHeight: maxH + "px",
            pointerEvents: "none",
          }}
          className="z-1 w-full h-full absolute overflow-x-hidden overflow-y-hidden"
        >
          {snowFlakes}
        </div>
        <NoSsr>
          <WindowGrid audioHandlers={audioHandlers} />
        </NoSsr>
      </main>
    </>
  );
}
