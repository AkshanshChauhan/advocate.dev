import React from "react";
import "../page.main.scss";
import TopHead from "../../Main/topHead";
import Background from "../../Main/background";

function Affidavit(info) {
    return (
        <div className="affidavitPage">
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <TopHead heading={"AFFIDAVIT"} />
        </div>
    )
}

export default Affidavit;