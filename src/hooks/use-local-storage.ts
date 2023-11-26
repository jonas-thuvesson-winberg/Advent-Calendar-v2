import { useState } from "react";

const useLocalStorage = ({
  key,
  initialValue,
}: {
  key: string;
  initialValue: { opened: boolean };
}) => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key);
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  //   for (const { key, initialValue } of x) {
  const setValue = (value: { opened: boolean }) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };
  //   }

  return [state, setValue];
};

export default useLocalStorage;
