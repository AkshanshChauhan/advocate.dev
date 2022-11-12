import React from "react";
import rcr from "../Images/realReview.svg";

function RealClientReview(info) {
    return (
        <div className="realClientReview">
            <div className="realClientReviewTop">
                <img src={rcr} width={"100px"} alt={""} />
                <h1 style={{fontWeight: "500"}}>REAL CLIENT REVIEW</h1>
            </div>
            <div className="realClientReviewSections">
                <div className="realClientReviewSection">
                    <i>I am satisfied with Tonii Roulston’s representation, everything was resolved as expected. 5 stars.</i>
                    <p><b><i>K.S.</i></b></p>
                </div>
                <div className="realClientReviewSection">
                    <i>I would recommend Tonii Roulston and her firm to anyone</i>
                    <p><b><i>L.E.</i></b></p>
                </div>
            </div>
            {info.btn}
        </div>
    )
}

export default RealClientReview;