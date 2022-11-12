import React from "react";
import "./bigCard.scss";

function BigCard(info) {
    return (
        <div className="bigCard">
            <div className="upperBigCard" style={{backgroundImage: "url(" + info.bgurl + ")"}}></div>
            <div className="lowerBigCard">
                <h2 className="head">{info.heading}</h2>
                <p className="subHead">By <i>{info.name}</i> {info.date}</p>
                <p className="contentText">{info.content}</p>
                <div className="lowerBigCardRdMo">
                    <h3>Read More</h3>
                </div>
            </div>
        </div>
    )
}

export default BigCard;