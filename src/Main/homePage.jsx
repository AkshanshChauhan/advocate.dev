import "./main.scss";
import React from "react";
import Card from "../Card";
import ourVision from "../Images/ourVision.svg";
import TopHead from "./topHead";
import Trouble from "./trouble";
import BigCard from "../BigCard";
import Affidavit from "./affidavit";
import OurVision from "./ourVision";
import OurProcess from "./ourProcess";
import RealClientReview from "./realClientReview";
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
            profileImage: profileImage,
            name: "Akshansh",
            location: "Uttrakhand , India",
            retting: 4.9,
            works: 244,
            reviews: 992,
            charge: 10000
        },
        {
            profileImage:profileImage2,
            name: "Reema",
            location: "Rajasthan, India",
            retting: 3.2,
            works: 235,
            reviews: 345,
            charge: 547
        },
        {
            profileImage: profileImage3,
            name: "Aman",
            location: "Delhi, India",
            retting: 4.2,
            works: 923,
            reviews: 5155,
            charge: 1452
        },
        {
            profileImage: profileImage,
            name: "Naveen",
            location: "Uttrakhand, India",
            retting: 4.5,
            works: 110,
            reviews: 234,
            charge: 745
        },
        {
            profileImage: profileImage2,
            name: "Surbi",
            location: "Bihar, India",
            retting: 4.7,
            works: 234,
            reviews: 674,
            charge: 900
        },
        {
            profileImage: profileImage3,
            name: "Zafri",
            location: "West Bengal, India",
            retting: 4.5,
            works: 103,
            reviews: 232,
            charge: 2000
        },
        {
            profileImage: profileImage,
            name: "Sumit",
            location: "Uttrakhand, India",
            retting: 4.5,
            works: 110,
            reviews: 234,
            charge: 745
        },
        {
            profileImage: profileImage2,
            name: "Lancy",
            location: "Bihar, India",
            retting: 4.7,
            works: 234,
            reviews: 674,
            charge: 900
        },
        {
            profileImage: profileImage3,
            name: "Kumar",
            location: "West Bengal, India",
            retting: 4.5,
            works: 103,
            reviews: 232,
            charge: 2000
        }
    ];

    return (
        <div className="homePage">
            <TopHead 
                heading={"OUR PROCESS"} 
                subHead={"A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence."} 
            />
            <OurProcess />
            <div className="cards">
                {json.map((e, k)=>
                    <Card 
                        profileImage={e.profileImage}
                        name={e.name}
                        location={e.location}
                        ratting={e.retting}
                        works={e.works}
                        reviews={e.reviews}
                        charge={e.charge}
                        key={k}
                    />
                )}
            </div>
            <Affidavit />
            <div className="cards">
                {json.map(()=>
                    <BigCard 
                        bgurl={profileImage} 
                        heading="What’s Coming for Legal Departments in 2022? (Adv.)" 
                        name="Akshansh" 
                        date="Febuary 3, 2022" 
                        content="Corporate legal departments have seen some significant  changes over the past couple of years. The ongoing explosion of data volumes and rapid adoption of new communications technologies have made e-discovery operations more complex and expensive to manage, convincing many departments to move operations in-house. The requirements of privacy regulations, and the data inventory, discovery, and production capabilities necessary to meet......"
                    />
                )}
            </div>
            <ButtonTem val="LOAD MORE BLOGS" />
            <RealClientReview btn={<ButtonTem val="VIEW ALL REVIEW" />} />
            <OurVision imgWidth={50} background={ourVision} color="white" width="70%" />
            <Trouble />
        </div>
    )
}

export default HomePage;