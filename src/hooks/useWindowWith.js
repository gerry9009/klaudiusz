import { useEffect, useState } from "react";

const useWindowWith = (callback) => {
  const [windowWith, setWindowWith] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWith(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWith(window.innerWidth);
      }
      if (callback) {
        callback();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);

  return windowWith;
};

export default useWindowWith;
