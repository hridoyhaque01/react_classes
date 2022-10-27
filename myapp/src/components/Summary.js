import React from "react";
import img from "../assets/images/success.png";
import clasess from "../styles/Summary.module.css";

export default function Summary() {
  return (
    <div className={clasess.summary}>
      <div className={clasess.point}>
        {/* progress bar will be placed here  */}
        <p className={clasess.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={clasess.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
}
