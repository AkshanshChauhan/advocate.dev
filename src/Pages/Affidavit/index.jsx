import React from "react";
import "../page.main.scss";
import Footer from "../../Footer";
import TopHead from "../../Main/topHead";
import SubAffidavit from "./subAffidavit";
import Background from "../../Main/background"

function Affidavit(info) {
    return (
        <div className="affidavitPage">
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <TopHead heading={"AFFIDAVIT"} subHead={"An affidavit is a written statement voluntarily made by an affiant or deponent under an oath or affirmation which is administered by a person who is authorized to do so by law."} />
            <SubAffidavit />
            <Footer />
        </div>
    )
}

export default Affidavit;