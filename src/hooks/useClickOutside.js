import { useEffect } from "react";
/**
 *
 * @param {useRef} wrapperRef - set aimed div wrapper div as an attribute
 * @param {useState} state
 * @param {function} callback - callback function
 */
const useClickOutside = (wrapperRef, state, callback) => {
  //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

  useEffect(() => {
    const handleClickOutsideDropdown = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, [wrapperRef, state, callback]);
};

export default useClickOutside;
