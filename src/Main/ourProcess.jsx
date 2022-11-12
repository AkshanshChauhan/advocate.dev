import React from "react";

import process1 from "../Images/ourProcess1.svg";
import process2 from "../Images/ourProcess2.svg";
import process3 from "../Images/ourProcess3.svg";
import process4 from "../Images/ourProcess4.svg";

function OurProcess() {
    return (
        <div className="ourProcessInner">
            <div className="ourProcessInnerSection">
                <img className={"processImage"} src={process1} alt="" />
                <p><b>Sign Up</b></p>
                <p>with The Online Attorney</p>
            </div>
            <div className="ourProcessInnerSection">
                <img className={"processImage"} src={process2} alt="" />
                <p>Put your money in</p>
                <p><b>Wallet</b></p>
            </div>
            <div className="ourProcessInnerSection">
                <img className={"processImage"} src={process3} alt="" />
                <p>Click on <span style={{backgroundImage: "url(../Images/mainLogo.svg)", padding: "10px"}}></span> to call</p>
                <p>and <span style={{backgroundImage: "url(../Images/mainLogo.svg)", padding: "10px"}}></span> to chat</p>
            </div>
            <div className="ourProcessInnerSection">
                <img className={"processImage"} src={process4} alt="" />
                <p><b>Rate & Review</b> lawyers</p>
                <p>after consultation</p>
            </div>
        </div>
    )
}

export default OurProcess;