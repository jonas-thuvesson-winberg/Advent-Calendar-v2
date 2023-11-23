import React, { ReactComponentElement, Ref, useEffect, useRef } from "react";
import { useOutOfBounds } from "../hooks/use-out-of-bounds";
import { setTimeout } from "timers";

export default function SnowBall({
  speed = 1,
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

  let counter = React.useRef(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const progress = () => {
      componentRef.current.style.transform = `translate(${horizontalOffset}px, ${counter.current}px)`;
      counter.current = counter.current + speed;
    };

    interval = setInterval(() => {
      if (componentRef.current) {
        let setTimeoutReset = false;
        if (outOfBoundsRef.current) {
          console.log(outOfBoundsRef.current);
          counter.current = 0;
          setTimeoutReset = true;
        }
        if (!setTimeoutReset) {
          progress();
        } else {
          setTimeout(() => {
            progress();
            setTimeoutReset = false;
          }, delay);
        }
      }
    }, 40);

    return () => clearInterval(interval);
  }, [counter, speed, horizontalOffset, delay, componentRef, outOfBoundsRef]);

  return (
    <div
      ref={componentRef}
      style={{
        padding: `${size}px`,
        transform: `translate(${horizontalOffset}px, ${counter.current}px)`,
      }}
      className={`ml-2 inline absolute rounded-xl bg-white`}
    ></div>
  );
}

// export function SnowFall() {
//   const snowBall = React.useRef<typeof SnowBall>();
//   const [componentRef, outOfBounds] = useOutOfBounds<typeof SnowBall>();
// }
