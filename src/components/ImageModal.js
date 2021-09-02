import React from "react";

const ImageModal = ({ path, alt }) => {
  return (
    <div>
      <img src={path} alt={alt} />
    </div>
  );
};

export default ImageModal;
