import { Inter } from "next/font/google";
import Snowflake from "@/components/snowflake";
import { ElementRef, ReactElement, useEffect, useRef, useState } from "react";
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
  // const [width, setWidth] = useState(1000);
  // const [height, setHeight] = useState(1000);
  const [init, setInit] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const gridRef = useRef<HTMLDivElement>(null);

  const calibrateHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(
      gridRef.current?.clientHeight || 0,
      body.scrollHeight,
      body.offsetHeight,
      body.clientHeight,
      html.offsetHeight,
      html.clientHeight
    );

    console.log(height);

    const width = Math.max(html.clientWidth);

    setDimensions({ height, width });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("triggered");
      window.addEventListener("resize", () => {
        calibrateHeight();
      });
      calibrateHeight();
    });
  }, []);

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
        playMusic();
        enteredPage.current = true;

        setTimeout(() => {
          overlayElem.current?.classList.add("hidden");
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
    const horizontal = getRandomInt(dimensions.width, 0);
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
        style={{
          ...overlayStyle,
          height: dimensions.height + "px",
          width: dimensions.width + "px",
        }}
        ref={overlayElem}
        className={`z-10 absolute flex justify-center items-center bg-black/70`}
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
        style={{
          height: dimensions.height + "px",
          width: dimensions.width + "px",
        }}
      >
        <div
          style={{
            pointerEvents: "none",
            height: dimensions.height + "px",
          }}
          className="z-1 absolute overflow-x-hidden overflow-y-hidden w-full"
        >
          {snowFlakes}

          <div className="flex flex-col justify-center items-center overflow-scroll">
            <h1
              style={{
                fontFamily: "Smooch, cursive",
                textShadow: "4px 4px 4px rgba(0,0,0,.3)",
              }}
              className="text-9xl text-white text-center m-3"
            >
              God Jul
            </h1>
            <div ref={gridRef}>
              <WindowGrid audioHandlers={audioHandlers} />
            </div>
          </div>
        </div>
      </main>
    </NoSsr>
  );
}
