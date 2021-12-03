import React from "react";
import "./SecondCard.scss";
function SecondCard({ bg, title, info, text }) {
  return (
    <div className="secndCrd" style={{ background: `${bg}` }}>
      <h4>{title}</h4>
      {info && (
        <p>
          <strong>{title?.split(" ")[2]}</strong>
          <br />
          {info}
        </p>
      )}
      <span>
        <strong>Try Saying:</strong>
        <br />
        {text}
      </span>
    </div>
  );
}

export default SecondCard;
