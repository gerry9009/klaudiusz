import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";

import { viewer, viewer_close_btn } from "../styles/imageViewer.module.css";

const ImageViewer = ({ images, id, handleCloseImageViewer }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const index = images.findIndex((element) => {
      return element.node.id === id;
    });

    setSelectedImage(index);
  }, [id, images]);

  useEffect(() => {
    const img = getImage(images[selectedImage].node);
    setImage(img);
  }, [selectedImage, images]);

  const handleCloseClick = () => {
    handleCloseImageViewer();
  };

  const handleOnClick = (e) => {
    if (e.target.tagName === "DIV") {
      handleCloseImageViewer();
    }
  };

  const handleNext = () => {
    if (selectedImage === images.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImage - 1 < 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div
      className={viewer}
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
      role="button"
      tabIndex={0}
    >
      <button onClick={handleCloseClick} className={viewer_close_btn}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {images.length > 1 && (
        <button onClick={handlePrev}>
          <FontAwesomeIcon icon={faAngleDown} rotation={90} />
        </button>
      )}
      <div>
        <GatsbyImage image={image} alt={"szöveg"} />
      </div>
      {images.length > 1 && (
        <button onClick={handleNext}>
          <FontAwesomeIcon icon={faAngleDown} rotation={270} />
        </button>
      )}
    </div>
  );
};

export default ImageViewer;
