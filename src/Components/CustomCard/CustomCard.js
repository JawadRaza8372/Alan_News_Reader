import React, { useEffect } from "react";
import "./CustomCard.scss";
import News from "../../Assets/news.jpg";
import InfoIcon from "@mui/icons-material/Info";
function CustomCard({ imglink, source, title, pdate, i, url, isActive }) {
  useEffect(() => {
    if (`${isActive}` === `${i}`) {
      const element = document.getElementById(i);
      if (element) element.scrollIntoView();
    }
  }, [i, isActive]);
  return (
    <div
      id={`${i}`}
      className="customCard"
      style={
        `${isActive}` === `${i}`
          ? { background: "#283593", color: "white" }
          : {}
      }
    >
      <div className="imgCont">
        <img src={imglink ? imglink : News} alt={title} />
        <div className="info">
          <p>{new Date(pdate).toDateString()}</p>
        </div>
        <p className="number">{i + 1}</p>
      </div>
      <h4>{title?.length > 165 ? `${title?.substring(0, 166)}...` : title}.</h4>
      <div className="footer">
        <p> By: {source}</p>
        <a href={`${url}`}>
          <InfoIcon
            id="icon"
            style={`${isActive}` === `${i}` ? { color: "white" } : {}}
          />
        </a>
      </div>
    </div>
  );
}

export default CustomCard;
