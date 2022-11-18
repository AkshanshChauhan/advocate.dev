import React from "react";
import "../page.main.scss";
import Card from "../../Card";
import Pref from "./prefScroll";
import { useState } from "react";
import Footer from "../../Footer";
import img1 from "./imgs/logo1.svg";
import img2 from "./imgs/logo2.svg";
import img3 from "./imgs/logo3.svg";
import img4 from "./imgs/logo4.svg";
import img5 from "./imgs/logo5.svg";
import img6 from "./imgs/logo6.svg";
import img7 from "./imgs/logo7.svg";
import img8 from "./imgs/logo8.svg";
import TopHead from "../../Main/topHead";
import Background from "../../Main/background";

const arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

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
    return (
        <div className="lawyersPage">
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <TopHead heading={"PREFERENCES"} />
            <Pref clickCheck={setClickIndex} />
            { clickIndex===1 ? <ThisTop srcImg={img1} head="SEXUAL OFFENCES LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            { clickIndex===2 ? <ThisTop srcImg={img2} head="BAIL LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            { clickIndex===3 ? <ThisTop srcImg={img3} head="INTERNET CRIME LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            { clickIndex===4 ? <ThisTop srcImg={img4} head="DOMESTIC OFFENCES LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            { clickIndex===5 ? <ThisTop srcImg={img5} head="YOUTH CHARGES LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            { clickIndex===6 ? <ThisTop srcImg={img6} head="FIREARM & WEAPONS LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            { clickIndex===7 ? <ThisTop srcImg={img7} head="ASSAULTS & THREATS LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            { clickIndex===8 ? <ThisTop srcImg={img8} head="PROPERTY, FRAUD & THEFT LAWYERS" sub="A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart, assertive, strategic, defence." /> : ""}
            <div className="cards">
                {arr.map((e,i)=><Card key={i}/>)}
            </div>
            <Footer />
        </div>
    )
}

export default Lawyers;