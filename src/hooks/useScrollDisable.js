import { useEffect, useState } from "react";

const useScrollDisable = (state) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [documentWidth, setDocumentWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setDocumentWidth(document.documentElement.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${windowWidth - documentWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = 0;
    }
  }, [state, windowWidth, documentWidth]);
};

export default useScrollDisable;
