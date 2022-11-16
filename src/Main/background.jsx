import "./main.scss";
import React from "react";
import Login from "../Authentication/Login";

function Background(get) {
    return (
        <>
            <div className="homeBackground" style={{backgroundImage: "url(" + get.backgroundImage + ")", height: get.height}}></div>
            <Login top={get.top} />
        </>
    )
}

export default Background;