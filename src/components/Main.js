import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//material-ui
import { Modal } from "@material-ui/core";
//styles
import { makeStyles } from "@material-ui/styles";
//axios
import axios from "axios";

//css
import "../Main.css";

//modal
import ImageModal from "./ImageModal";

const Main = () => {
  const classes = useStyles();
  const [imgs, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [path, setPath] = useState();
  const [alt, setAlt] = useState();

  const imgModal = <ImageModal path={path} alt={alt} />;

  const showImgModal = (path, alt) => {
    setPath(path);
    setAlt(alt);
    setShowModal(true);
  };
  const imgClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    console.log(imgs);
  }, [imgs]);
  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then((response) => {
        let temp = response.data.map((value) => ({
          path: value.urls.regular,
          alt: value.alt_description,
        }));
        setImages(temp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="gallery">
        {imgs.map((value) => (
          <img
            src={value.path}
            alt={value.alt}
            onClick={() => showImgModal(value.path, value.alt)}
            className={classes.point}
          />
        ))}
      </div>
      <Modal open={showModal} onClose={imgClose} className={classes.modal}>
        {imgModal}
      </Modal>
    </div>
  );
};

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    boxShadow: "none",
  },
  point:{
      cursor:"pointer"
  }
});
export default Main;
