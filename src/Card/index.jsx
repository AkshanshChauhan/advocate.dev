import React, { useEffect, useState } from "react";
import "./card.scss";

function Card(info) {
    const [likeBool, setLikeBool] = useState(false);

    useEffect(()=>{
        info.isLike ? setLikeBool(true) : setLikeBool(false);
    });

    function like(id) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        fetch(`https://api.theonlineattorney.in/api/v1/action/${id}?action=${info.isLike ? "dislike" : "like"}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result, info.isLike);
                if(info.isLike === true) {
                    setLikeBool(false);
                } else {
                    setLikeBool(true);
                }
            })
            .catch(error => console.log('error', error));
    }

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
                        <button className={likeBool ? "heart-like" : "heart"} onClick={()=>like(info.id)}></button>
                    </div>
                    <div className="innerUpperCardMidBottom">
                        <div>
                            <p className="small">Rating</p>
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
                <button className="viewButton" onClick={()=>{
                    window.location.href = "/user/" + info.id;
                }}>View</button>
            </div>
        </div>
    )
}

export default Card;