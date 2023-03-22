import React from "react";
import bg1 from "../../../Images/background5.svg";
import Background from "../../../Main/background";
import "./wishlist.scss";
import img from "./img/temp_img.svg";
const JsonData = {
    data:[
        {
            img: "./img/temp_img.svg",
            name: "Robin Mcintyre",
            location: "Bangalore, India",
            ratting: 4.4,
            work: 500,
            charge: 100
        },
        {
            img: "./img/temp_img.svg",
            name: "Robin Mcintyre",
            location: "Bangalore, India",
            ratting: 4.4,
            work: 500,
            charge: 100
        },
        {
            img: "./img/temp_img.svg",
            name: "Robin Mcintyre",
            location: "Bangalore, India",
            ratting: 4.4,
            work: 500,
            charge: 100
        },
        {
            img: "./img/temp_img.svg",
            name: "Robin Mcintyre",
            location: "Bangalore, India",
            ratting: 4.4,
            work: 500,
            charge: 100
        },
        {
            img: "./img/temp_img.svg",
            name: "Robin Mcintyre",
            location: "Bangalore, India",
            ratting: 4.4,
            work: 500,
            charge: 100
        }
    ]
}
function Template(data) {
    return (
        <div className="template">
            <div className="profile" style={{backgroundImage: "url(" + img + ")"}}>
                <input className="heart" type="checkbox" />
            </div>
            <div className="name">{data.name}</div>
            <div className="location">{data.location}</div>
            <div className="rwr">
                <div className="horiz">
                    <div className="small-text">Ratings</div>
                    <div className="value">{data.ratting}</div>
                </div>
                <div className="horiz">
                    <div className="small-text">Ratings</div>
                    <div className="value">{data.work}</div>
                </div>
                <div className="horiz">
                    <div className="small-text">Ratings</div>
                    <div className="value">{data.ratting}</div>
                </div>
            </div>
            <div className="charge">
                <p>Charge</p> ₹ {data.charge}/Min
            </div>
            <button className="button">View</button>
        </div>
    )
}

export default function Wishlist(info) {
    return (
        <>
            <Background backgroundImage={bg1} height={info.height} top={info.top}/>
            <div className="wishlist">
                <div className="heading">SAVED LAWYERS</div>
                <div className="line"></div>
                <div className="subHeading">A team of highly skilled Calgary criminal lawyers dedicated to defending you
    with a smart, assertive, strategic, defense.</div>
                <div className="template-section">
                    {
                        JsonData.data.map((ele, key)=>{
                            return <Template key={key} name={ele.name} location={ele.location} ratting={ele.ratting} work={ele.work} charge={ele.charge} img={ele.img} />
                        })
                    }
                </div>
            </div>
        </>
    )
}