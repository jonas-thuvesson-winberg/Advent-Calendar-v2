import * as Dialog from "@radix-ui/react-dialog";
import { MouseEventHandler, ReactNode, useState, MouseEvent } from "react";
import { useTransition, animated, config } from "react-spring";

export default function WindowDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const transitions = useTransition(open, {
    from: { opacity: 0, transform: "translateY(-30px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-30px)" },
    config: config.slow,
  });

  const handleClick: MouseEventHandler<HTMLDivElement> = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
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
              <Dialog.Close asChild>
                <div className="absolute flex justify-center items-center h-screen w-screen inset-0">
                  <animated.div
                    style={styles}
                    className="bg-slate-100 absolute text-black rounded-md py-7 px-5"
                    onClick={handleClick}
                  >
                    <h1>Hello from inside the Dialog!</h1>
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
