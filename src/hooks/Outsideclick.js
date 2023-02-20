import { useLayoutEffect, useRef, useEffect } from "react";

const useLatest = (value) => {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
};

export const useOutsideClick = (elemwntRef, handler, attached = true) => {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) return;

    const onClick = (e) =>
      elemwntRef.current.contains(e.target) || latestHandler.current();

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [elemwntRef, latestHandler, attached]);
};
