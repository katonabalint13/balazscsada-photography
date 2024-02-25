import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "../Components/gallery.css";

import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";
import img16 from "../img/img16.jpg";
import img17 from "../img/img17.jpg";
import img18 from "../img/img18.jpg";
import img19 from "../img/img19.jpg";
import img20 from "../img/img20.jpg";

function CityGallery() {
  let data = [
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
    { id: 15, imgSrc: img15 },
    { id: 16, imgSrc: img16 },
    { id: 17, imgSrc: img17 },
    { id: 18, imgSrc: img18 },
    { id: 19, imgSrc: img19 },
    { id: 20, imgSrc: img20 },
  ];

  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} />
        <CloseIcon onClick={() => setModal(false)} />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} loading="lazy" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CityGallery;
