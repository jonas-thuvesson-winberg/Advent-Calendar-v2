import React, {
  ComponentRef,
  ElementType,
  MutableRefObject,
  ReactElement,
  useRef,
  useState,
} from "react";

export const useOutOfBounds = () => {
  const componentRef: any = useRef();
  const isOutOfBounds = useRef(false);

  const [coordinates, setCoordinates] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  React.useEffect(() => {
    const mutationObserverCallback = (
      mutationRecord: MutationRecord[],
      observer: MutationObserver
    ) => {
      if (componentRef.current) {
        const rect = componentRef?.current.getBoundingClientRect();

        const windowHeight = Math.min(
          document.documentElement.clientHeight,
          window.innerHeight
        );
        let directions = {
          //   top: 0,
          bottom: 0,
          //   left: 0,
          //   right: 0,
        };

        // if (rect.top < 0) {
        //   directions.top = Math.abs(0 - rect.top);
        // }

        if (rect.bottom > windowHeight) {
          directions.bottom = Math.abs(windowHeight - rect.bottom);
        }

        // if (rect.left < 0) {
        //   directions.left = Math.abs(0 - rect.left);
        // }

        // if (rect.right > windowWidth) {
        //   directions.right = Math.abs(windowWidth - rect.right);
        // }

        if (coordinates.bottom !== directions.bottom) {
          isOutOfBounds.current = true;
          setCoordinates(coordinates);
        } else {
          isOutOfBounds.current = false;
        }
      }
    };

    const observer = new MutationObserver(
      mutationObserverCallback as MutationCallback
    );
    if (componentRef.current) {
      observer.observe(componentRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, [componentRef, coordinates]);

  return [componentRef, isOutOfBounds];
};
