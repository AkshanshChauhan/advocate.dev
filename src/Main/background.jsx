import "./main.scss";
import React from "react";
import Login from "../Authentication/Login";
import { useSelector } from "react-redux";

function Background(get) {
    const checkLogin = useSelector(state => state.checkLogin);
    return (
        <>
            <div className="homeBackground" style={{backgroundImage: "url(" + get.backgroundImage + ")", height: get.height, marginBottom: checkLogin ? 50 : 100}}></div>
            <Login top={get.top} />
        </>
    )
}

export default Background;