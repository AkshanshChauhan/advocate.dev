import "./main.scss";
import React, { useEffect, useState } from "react";

export default function User() {
    const [data, setId] = useState([]);
    console.log(data)
    const getIdData = ()=> {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.theonlineattorney.in/api/v1/profile/${window.location.href.split("/")[window.location.href.split("/").length-1]}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result !== null && result !== undefined) {
                    setId(result);
                }
            })
            .catch(error => console.log('error', error));
    }
    function setCount(val) {
        setReviewCount(val)
    }
    const [count, setReviewCount] = useState();
    const randomNames = ["Rohan", "Rahul", "Yaman", "Abhishek", "Anmol", "Lokesh", "Vinodh", "Daman", "Bobby"];
    const reviewJson = {
        reviews: [
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            },
            {
                name: randomNames[Math.round(Math.random()*9)],
                date: "7 October 2021",
                rating: "4.5",
                title: "Charges withdrawn Peace Bond Rating",
                description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
            }
        ]    
    }
    useEffect(()=>{
        getIdData();
        setCount(reviewJson.reviews.length);
    },[]);
    return(
        <div className="userInformation">
            <div className="upper">
            <div className="left">
            <div className="user-name">{data.first_name + " " + data.last_name}</div>
            <div className="user-description">Named by the Calgary Herald in 2007 as a “Compelling Calgarian” 
to watch, Tonii Roulston has since built a reputation as a tough 
criminal lawyer known for her strategic thinking and 
effectiveness in the courtroom. Devoting her entire legal career of 
21 years to defending people charged with criminal offences, Tonii 
Roulston’s career has been defined by taking on a variety of tough 
and high-profile cases. She defends the rights of clients who are 
accused of the most serious charges such as murder and sexual 
assaults, but also a range from domestic assaults to firearm charges. 
She recently successfully defended the rights of a young man 
charged with refusal while driving a tractor in the Didsbury area.

Currently, Tonii conducts about 2-3 homicide trials per year to 
ensure she can devote time to all the clients who have put their 
trust in her. She considers every charge she defends just as serious, 
as the consequences to the client can have a lasting impact.

Tonii’s experience in high profile cases and her vast experience 
with serious charges, gives her a unique perspective to ensure that 
she will develop a strategic plan for success in your case, no matter 
what you have been charged with.</div>
            </div>
            <div className="right">
            <div className="user-image-section">
                <div className="user-image" style={{backgroundImage: "url(https://api.theonlineattorney.in" + data.profile_pic + ")"}}>
                    <div className="like-section"></div>
                </div>
                <div className="user-charge-and-btn">
                    <div className="user-charge-section">
                        <div className="small">Charge:</div>
                        <div className="user-charge"><b>₹100/min</b></div>
                    </div>
                    <div className="user-button-section">
                        <button className="user-contact">Consult Now</button>
                        <div className="user-rating">
                            <div className="rating">
                                <input className="star" type="checkbox" />
                                <input className="star" type="checkbox" />
                                <input className="star" type="checkbox" />
                                <input className="star" type="checkbox" />
                                <input className="star" type="checkbox" />
                                <div className="small">See Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="heading">ADDITIONAL SERVICES</div>
            <div className="line"></div>
            <div className="subHeading">Please select any additional services if you want and consult with your lawyers,
if you haven't done your recharge yet then recharge and
continue our services. </div>
            <div className="add-serv">
                <div className="add-serv-card">
                    <div className="price">₹ 50</div>
                    <div className="add-serv-icon"></div>
                    <div className="title">Legal Notice</div>
                    <div className="description">Notice is the legal concept describing a
requirement that a party be aware of legal process
 affecting their rights, obligations or duties.</div>
                </div>
                <div className="add-serv-card">
                    <div className="price">₹ 50</div>
                    <div className="add-serv-icon"></div>
                    <div className="title">Legal Notice</div>
                    <div className="description">Notice is the legal concept describing a
requirement that a party be aware of legal process
 affecting their rights, obligations or duties.</div>
                </div>
                <div className="add-serv-card">
                    <div className="price">₹ 50</div>
                    <div className="add-serv-icon"></div>
                    <div className="title">Legal Notice</div>
                    <div className="description">Notice is the legal concept describing a
requirement that a party be aware of legal process
 affecting their rights, obligations or duties.</div>
                </div>
            </div>
            <div className="exp-section">
                <div className="exp-heading">EXPERIENCE</div>
                <div>
                <div className="exp-sub-heading">10 Years</div>
                <div className="exp-description">Over the last 20 years, including 3 years at Student Legal Assistance as a 
law student and 1 year at Calgary Legal Guidance as an articling student, 
Robert David’s practice has focused primarily on defending individuals, 
both adult and youth, at the trial level. She has successfully defended 
individuals against all criminal offences including: murder, organized 
crime, sexual assault, impaired driving/DRE, drug offences, domestic 
assault, white collar crime, child pornography, and internet based crimes. 
She prides herself on defending all of her clients with the same level of 
intensity and professionalism regardless of the charges they face.</div>
                </div>
            <div>
                <div className="exp-sub-heading">Location</div>
                <div className="exp-sub">Bangalore, India</div>
            </div>
            <div>
                <div className="exp-sub-heading">Languages Spoken</div>
                <div className="exp-sub">English, Hindi</div>
            </div>
            <div>
                <div className="exp-sub-heading">Specialty Area</div>
                <div className="exp-sub">Bail, Divorce, Homesite, Drugs Addict</div>
            </div>
            </div>
            <div className="review-section">
                <div className="review-heading">REVIEWS ({count})</div>
                <div className="review-map">
                    {reviewJson.reviews.map((data)=>{
                        return (                            
                            <div className="review">
                                <div>
                                    <div className="name">{data.name}</div>
                                    <div className="date">{data.date}</div>
                                </div>
                                <div className="inner-heading-section">
                                    <div className="big-comma"></div>
                                    <div className="inner-heading">{data.title}</div>
                                </div>
                                <div className="review-description">{data.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}