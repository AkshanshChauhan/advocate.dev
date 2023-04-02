import React from "react";
import "../page.main.scss";
import Card from "../../Card";
import Pref from "./prefScroll";
import { useState, useEffect } from "react";
import Footer from "../../Footer";
// import img1 from "./imgs/logo1.svg";
// import img2 from "./imgs/logo2.svg";
// import img3 from "./imgs/logo3.svg";
// import img4 from "./imgs/logo4.svg";
// import img5 from "./imgs/logo5.svg";
// import img6 from "./imgs/logo6.svg";
// import img7 from "./imgs/logo7.svg";
// import img8 from "./imgs/logo8.svg";
import TopHead from "../../Main/topHead";
import Background from "../../Main/background";

// const arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

function ThisTop(data) {
    return (
        <div style={{
            display: "grid",
            justifyContent: "center",
            alignItmes: "center"
        }}>
            <img src={data.srcImg} alt="" width={100} height={100} style={{justifySelf: "center", margin: "10px 0px"}}/>
            <TopHead heading={data.head} subHead={data.sub} />
        </div>
    )
}

function Lawyers(info) {
    const [clickIndex, setClickIndex] = useState(0);
    const [allUsers, setAllUsers] = useState([]);
    console.log(clickIndex, allUsers)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
    const getAllUsersData = ()=>{
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/case_area/3", requestOptions)
            .then(response => response.json())
            .then(result => setAllUsers(result))
            .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        getAllUsersData();
    },[]);

    const subText = "A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence.";

    const [allOps, setAllOps] = useState([]);
    function getAllOps() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/case_area/all", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result) {
                    setAllOps(result)
                }
            })
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        getAllOps();
    }, [])

    return (
        <div className="lawyersPage">
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <TopHead heading={"PREFERENCES"} />
            <Pref clickCheck={setClickIndex} />
            {allOps.map((e, i)=>{
                return(clickIndex===i+1 ? <ThisTop srcImg={"https://api.theonlineattorney.in"+e.case_icon} head={e.case_name+" LAWYERS"} sub={subText} /> : "")
            })}
            <div className="cards">
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
            </div>
            <Footer />
        </div>
    )
}

export default Lawyers;