import { AudioHandlers } from "@/pages";
import * as Dialog from "@radix-ui/react-dialog";
import {
  MouseEventHandler,
  ReactNode,
  useState,
  MouseEvent,
  RefObject,
} from "react";
import { useTransition, animated, config } from "react-spring";

export default function WindowDialog({
  children,
  video,
  disabled,
  start,
  audioHandlers,
}: {
  children: ReactNode;
  video: string;
  disabled: boolean;
  start: number;
  audioHandlers: AudioHandlers;
}) {
  const [open, setOpen] = useState(false);
  const transitions = useTransition(open, {
    from: { opacity: 0, transform: "translateY(-30px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-30px)" },
    config: config.stiff,
  });

  const handleClick: MouseEventHandler<HTMLDivElement> = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleClose = () => {
    audioHandlers.playMusic();
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {!disabled ? (
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      ) : (
        children
      )}
      {transitions((styles, item) =>
        item ? (
          <>
            <Dialog.Overlay forceMount asChild>
              <animated.div
                className="bg-black/50 absolute inset-0"
                style={{
                  opacity: styles.opacity,
                }}
              />
            </Dialog.Overlay>
            <Dialog.Content forceMount asChild>
              <Dialog.Close onClick={handleClose} asChild>
                <div className="absolute flex justify-center items-center h-screen w-screen inset-0">
                  <animated.div
                    style={styles}
                    className="z-10 md:w-[80vw] md:h-[80vh] lg:w-[60vw] lg:h-[60vh] min-h-[50vh] bg-slate-100 absolute text-black rounded-md py-7 px-5"
                    onClick={handleClick}
                  >
                    <iframe
                      className="w-full h-full"
                      // width="560"
                      src={`https://www.youtube.com/embed/${video}?start=${start}&controls=0&rel=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </animated.div>
                </div>
              </Dialog.Close>
            </Dialog.Content>
          </>
        ) : null
      )}
    </Dialog.Root>
  );
}
