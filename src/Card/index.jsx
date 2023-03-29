import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card(info) {
    const [isLike, setIsLike] = useState(false);
    const [likeBool, setLikeBool] = useState(false);
    console.log(info.isLike)
    useEffect(()=>{
        info.isLike ? setIsLike(true) : setIsLike(false);
        info.isLike ? setLikeBool(true) : setLikeBool(false);
    }, [setIsLike]);

    function like(id) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        fetch(`https://api.theonlineattorney.in/api/v1/action/${id}?action=${ isLike ? "dislike" : "like"}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.message === "like done") {
                    setLikeBool(false);
                    setIsLike(true);
                } else {
                    setLikeBool(true);
                    setIsLike(false);
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
                        <button className={isLike ? "heart-like" : "heart"} onClick={()=>like(info.id)}></button>
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
                <Link className="viewButton" to={"/user/" + info.id}>View</Link>
            </div>
        </div>
    )
}

export default Card;