import React from "react";
import bulb from "../Images/bulb.svg";

function OurVision(info) {
    return (
        <div className="ourVisionSection" style={{backgroundImage: "url(" + info.background + ")"}}>
            <img src={bulb} alt="" width={info.imgWidth} />
            <div>
                <h1 style={{color: info.color}} className="heading">OUR VISION</h1>
                <div className="line" style={{transform: "translateY(-10px)"}}></div>
                <p style={{color: info.color, width: info.width}} className="subHeading">Vaish Associates Advocates strives to be a multi-skilled knowledge based law firm, driven by ethics and human values, delivering excellence and value in the field of legal services.</p>
            </div>
        </div>
    )
}

export default OurVision;