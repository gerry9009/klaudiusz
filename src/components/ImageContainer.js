import React, { useEffect, useState } from "react";
import Image from "./Image.component";
import { v4 as uuidv4 } from "uuid";

import {
  image_container,
  image_column,
} from "../styles/imageContainer.module.css";
import useWindowWidth from "../hooks/useWindowWidth";
import ImageViewer from "./ImageViewer.component";
import useScrollDisable from "../hooks/useScrollDisable";

const ImageContainer = ({ images }) => {
  const [openImageViewer, setOpenImageViewer] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth < 768) {
      setSelectedID(null);
      setOpenImageViewer(false);
    }
  }, [windowWidth]);

  useScrollDisable(openImageViewer);

  const handleImageClick = (id) => {
    setOpenImageViewer(true);
    setSelectedID(id);
  };

  const handleCloseImageViewer = () => {
    setOpenImageViewer(false);
    setSelectedID(null);
  };

  const getImages = (images) => {
    const Images = images.map((image) => {
      // pass to the Image component image object from query
      return (
        <Image
          picture={image.node}
          handleImageClick={handleImageClick}
          key={uuidv4()}
        />
      );
    });

    return Images;
  };

  const SmallWindow = () => {
    const Images = getImages(images);

    return Images;
  };

  const MediumWindow = () => {
    const limes = Math.ceil(images.length / 2);

    const FirstColumnItems = images.slice(0, limes);
    const SecondColumnItems = images.slice(limes);

    const FirstColumn = getImages(FirstColumnItems);
    const SecondColumn = getImages(SecondColumnItems);

    return (
      <>
        <div className={image_column}>{FirstColumn}</div>
        <div className={image_column}>{SecondColumn}</div>
      </>
    );
  };

  const LargeWindow = () => {
    const limes = Math.ceil(images.length / 3);

    const FirstColumnItems = images.slice(0, limes);
    const SecondColumnItems = images.slice(limes, limes * 2);
    const ThirdColumnItems = images.slice(limes * 2);

    const FirstColumn = getImages(FirstColumnItems);
    const SecondColumn = getImages(SecondColumnItems);
    const ThirdColumn = getImages(ThirdColumnItems);

    return (
      <>
        <div className={image_column}>{FirstColumn}</div>
        <div className={image_column}>{SecondColumn}</div>
        <div className={image_column}>{ThirdColumn}</div>
      </>
    );
  };

  const ChangeLayout = () => {
    if (windowWidth > 992) {
      return <LargeWindow />;
    } else if (windowWidth > 768) {
      return <MediumWindow />;
    } else {
      return <SmallWindow />;
    }
  };

  return (
    <div className={image_container}>
      <ChangeLayout />
      {openImageViewer && (
        <ImageViewer
          images={images}
          id={selectedID}
          handleCloseImageViewer={handleCloseImageViewer}
        />
      )}
    </div>
  );
};

export default ImageContainer;
