import { Inter } from "next/font/google";
import Snowflake from "@/components/snowflake";
import { ReactElement, useEffect, useRef, useState } from "react";
import WindowGrid from "@/components/window-grid";
import NoSsr from "@/components/no-ssr";
import {
  SpringRef,
  animated,
  config,
  useSpring,
  useTransition,
} from "react-spring";
import { getRandomInt } from "@/util/get-random-int";

const inter = Inter({ subsets: ["latin"] });

export interface AudioHandlers {
  pauseMusic: () => void;
  playMusic: () => void;
}

export default function Home() {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    window.addEventListener("resize", calibrateHeight);
    calibrateHeight();
  }, []);

  const calibrateHeight = () => {
    console.log("calibrating");
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const width = Math.max(
      body.scrollWidth,
      body.offsetWidth,
      html.clientWidth,
      html.offsetWidth
    );

    setHeight(height);
    setWidth(width);
  };

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
      audioElem.current.volume = 0.4;
    }
  };

  const playMusic = () => {
    if (audioElem.current) {
      audioElem.current.volume = 0.4;
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
      to: [
        { opacity: 0.5, transform: "rotate(0.5turn)" },
        { opacity: 0, transform: "rotate(0.5turn)" },
      ],
      onStart: () => {
        console.log("start");
        playMusic();
        enteredPage.current = true;

        setTimeout(() => {
          overlayElem.current?.classList.add("hidden");
          console.log("off");
        }, 1200);
      },
    });
    overlayAnimRef.start({
      to: { opacity: 0 },
      delay: 700,
    });
  };

  const snowFlakes: ReactElement[] = [];
  for (let i = 0; i < 200; i++) {
    const size = getRandomInt(10, 3);
    const speed = getRandomInt(15, 3);
    const horizontal = getRandomInt(width, 0);
    const delay = getRandomInt(800, 0);
    snowFlakes.push(
      <Snowflake
        key={i + "_snowflake"}
        size={size}
        speed={speed}
        horizontalOffset={horizontal}
        delay={delay}
      />
    );
  }

  return (
    <NoSsr>
      <animated.div
        style={overlayStyle}
        ref={overlayElem}
        className={`z-10 absolute h-screen w-screen flex justify-center items-center bg-black/70`}
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
        style={{ height: height + "px", width: width + "px" }}
        className={`w-screen`}
      >
        <div
          style={{
            // width: maxW + "px",
            pointerEvents: "none",
          }}
          className="z-1 w-full h-full absolute overflow-x-hidden overflow-y-hidden"
        >
          {snowFlakes}

          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1
              style={{
                fontFamily: "Smooch, cursive",
                textShadow: "4px 4px 4px rgba(0,0,0,.3)",
              }}
              className="text-9xl text-white text-center m-3"
            >
              God Jul
            </h1>
            <WindowGrid audioHandlers={audioHandlers} />
          </div>
        </div>
      </main>
    </NoSsr>
  );
}
