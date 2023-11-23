import React, { ReactComponentElement, Ref, useEffect, useRef } from "react";
import { useOutOfBounds } from "../hooks/use-out-of-bounds";
import { setTimeout } from "timers";
import { init } from "next/dist/compiled/webpack/webpack";

export default function SnowBall({
  speed = 3,
  size = 5,
  horizontalOffset = 0,
  delay = 0,
}: {
  speed?: number;
  size?: number;
  horizontalOffset?: number;
  delay?: number;
}) {
  const [componentRef, outOfBoundsRef] = useOutOfBounds();

  let counterRef = useRef(0);
  let initRef = useRef(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const progress = () => {
      componentRef.current.style.transform = `translate(${horizontalOffset}px, ${counterRef.current}px)`;
      counterRef.current = counterRef.current + speed;
    };

    interval = setInterval(() => {
      if (componentRef.current) {
        if (outOfBoundsRef.current || !initRef.current) {
          console.log(outOfBoundsRef.current);
          setTimeout(() => {
            counterRef.current = 0;
            initRef.current = true;
          }, delay);
        }

        progress();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [
    counterRef,
    speed,
    horizontalOffset,
    delay,
    componentRef,
    outOfBoundsRef,
  ]);

  return (
    <div
      ref={componentRef}
      style={{
        padding: `${size}px`,
        transform: `translate(${horizontalOffset}px, ${counterRef.current}px)`,
      }}
      className={`ml-2 inline absolute rounded-xl bg-white`}
    ></div>
  );
}

// export function SnowFall() {
//   const snowBall = React.useRef<typeof SnowBall>();
//   const [componentRef, outOfBounds] = useOutOfBounds<typeof SnowBall>();
// }
