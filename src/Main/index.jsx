import React from "react";
import NavBar from "../NavBar";
import HomePage from "./homePage";
import bg1 from "../Images/background1.svg";
import bg2 from "../Images/background2.svg";
import bg3 from "../Images/background3.svg";
import bg4 from "../Images/background4.svg";
import Background from "./background";
import Lawyers from "../Pages/Lawyers";
import Contact from "../Pages/Contact";
import MyProfile from "../Pages/MyProfile";
import Affidavit from "../Pages/Affidavit";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function Home() {
    return (
        <>
            <Background backgroundImage={bg1} />
            <HomePage />
        </>
    )
}

function Main() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lawyers" element={<Lawyers backgroundImage={bg2} height={500} top={60} />} />
                <Route path="/affidavit" element={<Affidavit backgroundImage={bg3} height={500} top={60} />} />
                <Route path="/contact" element={<Contact backgroundImage={bg4} height={500} top={60} />} />
                <Route path="/myprofile" element={<MyProfile backgroundImage={bg2} height={500} top={60} />} />        
            </Routes>
        </BrowserRouter>
    )
}

export default Main;