import "./main.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import starFill from "../Images/star.svg";
import star from "../Images/starFill.svg";

export default function User() {
    const [data, setId] = useState([]);
    console.log(data)
    const [myIdd, setMyId] = useState({});
    const [statusRev, setStat] = useState(false);
console.log(data)
    function myId() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/profile/", requestOptions)
            .then(response => response.json())
            .then(result => setMyId(result))
            .catch(error => console.log('error', error));
    }

    console.log(myIdd, data)

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
            .then((result) => {
                if(result !== null || result !== undefined) {
                    setId(result);
                    setReviews(result.reviews);
                    setStat(true)
                }
            })
            .catch(error => console.log('error', error));
    }
    const randomNames = ["Rohan", "Rahul", "Yaman", "Abhishek", "Anmol", "Lokesh", "Vinodh", "Daman", "Bobby"];
    // const reviewJson = {
    //     reviews: [
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         },
    //         {
    //             name: randomNames[Math.round(Math.random()*9)],
    //             date: "7 October 2021",
    //             rating: "4.5",
    //             title: "Charges withdrawn Peace Bond Rating",
    //             description: "Toni & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way."
    //         }
    //     ]    
    // }
    useEffect(()=>{
        getIdData();
        myId();
    },[]);

    function sendReview() {
        var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

    var formdata = new FormData();
    formdata.append("user", data.id);
    formdata.append("agent", myIdd.id);
    formdata.append("rating", check);
    formdata.append("review_title", title);
    formdata.append("review", review);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://api.theonlineattorney.in/api/v1/review_create/", requestOptions)
        .then(response => response.json())
        .then(result => {
            // alert("REVIEW SUCCESSFULLY : \nRating: " + result.rating + "\nReview Title: " + result.review_title + "\nReview: " + result.review);
            getIdData();
        })
        .catch(error => console.log('error', error));
    }

    const [check, setCheck] = useState(0);
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState({});
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
                        {data.consult==="Accept" ? <button className="user-contact">Consult Now</button> : <Link to={"/chat"} className="user-contact">Message</Link>}
                        <div className="user-rating">
                            <div className="rating">
                            <div className="rating-star" style={{backgroundImage: "url(" + starFill + ")"}}></div>
                            <div className="rating-star" style={{backgroundImage: "url(" + starFill + ")"}}></div>
                            <div className="rating-star" style={{backgroundImage: "url(" + starFill + ")"}}></div>
                            <div className="rating-star" style={{backgroundImage: "url(" + starFill + ")"}}></div>
                            <div className="rating-star" style={{backgroundImage: "url(" + starFill + ")"}}></div>
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
                <div className="review-heading">REVIEWS ({})</div>
                <div className="review-map">
                    {statusRev ? reviews.map((da)=>{
                        return (                            
                            <div className="review">
                                <div className="upper">
                                    <div className="left">
                                        <div className="name">{da.id}</div>
                                        <div className="date">{}</div>
                                    </div>
                                    <div className="right">
                                        <div className="rating-star" style={da.rating===1 || da.rating===2 || da.rating===3 || da.rating===4 || da.rating===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}></div>
                                        <div className="rating-star" style={da.rating===2 || da.rating===3 || da.rating===4 || da.rating===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}></div>
                                        <div className="rating-star" style={da.rating===3 || da.rating===4 || da.rating===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}></div>
                                        <div className="rating-star" style={da.rating===4 || da.rating===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}></div>
                                        <div className="rating-star" style={da.rating===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}></div>
                                    </div>
                                </div>
                                <div className="inner-heading-section">
                                    <div className="big-comma"></div>
                                    <div className="inner-heading">{da.review_title}</div>
                                </div>
                                <div className="review-description">{da.review}</div>
                            </div>
                        )
                    }): null}
                </div>
            </div>
            <div className="give-review-section">
                <div className="rating">
                    <div className="user-rating">
                        <div className="rating">
                            <div className="star-main" style={check===1 || check===2 || check===3 || check===4 || check===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}><input className="star" type="checkbox" onClick={()=>setCheck(1)} checked={check===1 || check===2 || check===3 || check===4 || check===5 ? true : false} /></div>
                            <div className="star-main" style={check===2 || check===3 || check===4 || check===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}><input className="star" type="checkbox" onClick={()=>setCheck(2)} checked={check===2 || check===3 || check===4 || check===5 ? true : false} /></div>
                            <div className="star-main" style={check===3 || check===4 || check===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}><input className="star" type="checkbox" onClick={()=>setCheck(3)} checked={check===3 || check===4 || check===5 ? true : false} /></div>
                            <div className="star-main" style={check===4 || check===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}><input className="star" type="checkbox" onClick={()=>setCheck(4)} checked={check===4 || check===5 ? true : false} /></div>
                            <div className="star-main" style={check===5 ? {backgroundImage: "url(" + starFill + ")"} : {backgroundImage: "url(" + star + ")"}}><input className="star" type="checkbox" onClick={()=>setCheck(5)} checked={check===5 ? true : false} /></div>
                        </div>
                    </div>
                </div>
                <textarea cols="1" rows="1" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></textarea>
                <textarea placeholder="hint: Nice way of Taking.." onChange={(e)=>setReview(e.target.value)}></textarea>
                <button className="send" onClick={()=>sendReview()}>Rate</button>
            </div>
        </div>
    )
}