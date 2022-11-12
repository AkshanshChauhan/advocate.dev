import React from "react";
import "./card.scss";

function Card(info) {
    return (
        <div className="card">
            <div className="upperCard">
                <div className="innerUpperCardLeft" style={{backgroundImage: "url(" + info.profileImage + ")"}}></div>
                <div className="innerUpperCardMid">
                    <div className="innerUpperCardMidTop">
                        <div>
                            <h3 className="supText">{info.name}</h3>
                            <p className="subText">{info.location}</p>
                        </div>
                        <button className="heart"></button>
                    </div>
                    <div className="innerUpperCardMidBottom">
                        <div>
                            <p className="small">Ratting</p>
                            <h2 className="supText">{info.ratting}</h2>
                        </div>
                        <div>
                            <p className="small">Works</p>
                            <h2 className="supText">{info.works}+</h2>
                        </div>
                        <div>
                            <p className="small">Reviews</p>
                            <h2 className="supText">{info.reviews}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lowerCard">
                <div className="innerLowerCardLeft">
                    <p className="small">Charge</p>
                    <h3 className="supText">₹ {info.charge}/Min</h3>
                    <br></br>
                </div>
                <button className="viewButton">View</button>
            </div>
        </div>
    )
}

export default Card;