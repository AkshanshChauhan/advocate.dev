import "./main.scss";
import React from "react";
import {useState, useEffect} from "react";
import Card from "../Card";
import Footer from "../Footer";
import TopHead from "./topHead";
import Trouble from "./trouble";
import BigCard from "../BigCard";
import Affidavit from "./affidavit";
import OurVision from "./ourVision";
import OurProcess from "./ourProcess";
import ourVision from "../Images/ourVision.svg";
import RealClientReview from "./realClientReview";
import bigCardBg1 from "../Images/bigCardBg1.svg";
import bigCardBg2 from "../Images/bigCardBg2.svg";
import bigCardBg3 from "../Images/bigCardBg3.svg";
import profileImage from "../Images/profileImage.svg";
import profileImage2 from "../Images/profileImage2.svg";
import profileImage3 from "../Images/profileImage3.svg";

function ButtonTem(vl) {
    return (
        <button style={{
            color: "white",
            margin: "40px auto",
            padding: "15px 50px",
            width: "fit-content",
            backgroundColor: "black",
        }}><h3 style={{fontWeight: "500"}}>{vl.val}</h3></button>
    )
}

function HomePage() {
    const json = [
        {   
            background: bigCardBg1,
            profileImage: profileImage,
            name: "Akshansh",
            location: "Uttrakhand , India",
            retting: 4.9,
            works: 244,
            reviews: 992,
            charge: 10000
        },
        {
            background: bigCardBg2,
            profileImage:profileImage2,
            name: "Reema",
            location: "Rajasthan, India",
            retting: 3.2,
            works: 235,
            reviews: 345,
            charge: 547
        },
        {
            background: bigCardBg3,
            profileImage: profileImage3,
            name: "Aman",
            location: "Delhi, India",
            retting: 4.2,
            works: 923,
            reviews: 5155,
            charge: 1452
        },
        {
            background: bigCardBg1,
            profileImage: profileImage,
            name: "Naveen",
            location: "Uttrakhand, India",
            retting: 4.5,
            works: 110,
            reviews: 234,
            charge: 745
        },
        {
            background: bigCardBg2,
            profileImage: profileImage2,
            name: "Surbi",
            location: "Bihar, India",
            retting: 4.7,
            works: 234,
            reviews: 674,
            charge: 900
        },
        {
            background: bigCardBg3,
            profileImage: profileImage3,
            name: "Zafri",
            location: "West Bengal, India",
            retting: 4.5,
            works: 103,
            reviews: 232,
            charge: 2000
        },
        {
            background: bigCardBg1,
            profileImage: profileImage,
            name: "Sumit",
            location: "Uttrakhand, India",
            retting: 4.5,
            works: 110,
            reviews: 234,
            charge: 745
        },
        {
            background: bigCardBg2,
            profileImage: profileImage2,
            name: "Lancy",
            location: "Bihar, India",
            retting: 4.7,
            works: 234,
            reviews: 674,
            charge: 900
        },
        {
            background: bigCardBg3,
            profileImage: profileImage3,
            name: "Kumar",
            location: "West Bengal, India",
            retting: 4.5,
            works: 103,
            reviews: 232,
            charge: 2000
        }
    ];

    const [allUsers, setAllUsers] = useState([]);

    const getAllUsersData = ()=>{
        const  requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    
        fetch("https://api.theonlineattorney.in/api/v1/all_profile/", requestOptions)
            .then(response => response.json())
            .then((result) => {
                    setAllUsers(result);
                }
            )
            .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        getAllUsersData();
    },[]);


    return (
        <div className="homePage">
            <TopHead 
                heading={"OUR PROCESS"} 
                subHead={"A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence."} 
            />
            <OurProcess />
            <div className="cards">
                {allUsers.map((e, k)=>
                    <Card 
                        profileImage={"https://api.theonlineattorney.in" + e.profile_pic}
                        name={e.first_name}
                        location={e.state + ", " + e.city}
                        ratting={e.rating}
                        works={e.work}
                        reviews={e.review}
                        charge={e.charge}
                        id={e.id}
                        isLike={e.islike}
                        key={k}
                    />
                )}
            </div>
            <Affidavit />
            <div className="cards">
                {json.map((e, k)=>
                    <BigCard 
                        bgurl={e.background} 
                        heading="What’s Coming for Legal Departments in 2023? (Adv.)" 
                        name="Akshansh" 
                        date="February 8, 2023" 
                        content="Corporate legal departments have seen some significant  changes over the past couple of years. The ongoing explosion of data volumes and rapid adoption of new communications technologies have made e-discovery operations more complex and expensive to manage, convincing many departments to move operations in-house. The requirements of privacy regulations, and the data inventory, discovery, and production capabilities necessary to meet......"
                        key={k}
                    />
                )}
            </div>
            <ButtonTem val="LOAD MORE BLOGS" />
            <RealClientReview btn={<ButtonTem val="VIEW ALL REVIEW" />} />
            <OurVision imgWidth={50} background={ourVision} color="white" width="70%" />
            <Trouble />
            <Footer />
        </div>
    )
}

export default HomePage;