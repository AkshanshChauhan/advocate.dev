import React from "react";
import "../page.main.scss";
import TopHead from "../../Main/topHead";
import Background from "../../Main/background";

function Lawyers(info) {
    return (
        <div className="lawyersPage">
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <TopHead heading={"PREFERENCES"} />
        </div>
    )
}

export default Lawyers;