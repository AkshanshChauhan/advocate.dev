import React from "react";
import NavBar from "../NavBar";
import HomePage from "./homePage";
import Background from "./background";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function Home() {
    return (
        <>
            <Background backgroundImage={""} />
            <HomePage />
        </>
    )
}

function Main() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/hs" element={""} />                
            </Routes>
        </BrowserRouter>
    )
}

export default Main;