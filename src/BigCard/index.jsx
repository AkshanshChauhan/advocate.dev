import React from "react";
import "./bigCard.scss";
import { Link } from "react-router-dom";
function BigCard(info) {
    return (
        <div className="bigCard">
            <div className="upperBigCard" style={{backgroundImage: "url(" + info.bgurl + ")"}}></div>
            <div className="lowerBigCard">
                <h2 className="head">{info.heading}</h2>
                <p className="subHead">By <i>{info.name}</i> {info.date}</p>
                <p className="contentText">{info.content}</p>
                <div className="lowerBigCardRdMo">
                    <Link className="read-more" to={"/blog/" + info.index}><h3>Read More</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default BigCard;