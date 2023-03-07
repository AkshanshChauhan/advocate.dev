import React, { useEffect } from "react";
import User from "./user";
import NavBar from "../NavBar";
import HomePage from "./homePage";
import Background from "./background";
import Lawyers from "../Pages/Lawyers";
import Contact from "../Pages/Contact";
import { useDispatch } from "react-redux";
import MyProfile from "../Pages/MyProfile";
import Affidavit from "../Pages/Affidavit";
import bg1 from "../Images/background1.svg";
import bg2 from "../Images/background2.svg";
import bg3 from "../Images/background3.svg";
import bg4 from "../Images/background4.svg";
import bg5 from "../Images/background5.svg";
import Wallet from "../Pages/MyProfile/wallet";
import Payment from "../Pages/MyProfile/payment";
import EditProfile from "../Pages/MyProfile/editProfile";
import { checkLoginAction } from "../Redux/Actions/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer_Support from "../Pages/Customer_Support";
import MyLoyality from "../Pages/MyProfile/my_loyality";

function Home() {
    return (
        <>
            <Background backgroundImage={bg1} />
            <HomePage />
        </>
    )
}

function Main() {
    const dispatch = useDispatch();
    const loginChecker = ()=> {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/profile/", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.errors){
                    console.log('not get data');
                } else {
                    dispatch(checkLoginAction());
                }
            })
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{loginChecker()});
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lawyers" element={<Lawyers backgroundImage={bg2} height={500} top={60} />} />
                <Route path="/affidavit" element={<Affidavit backgroundImage={bg3} height={500} top={60} />} />
                <Route path="/contact" element={<Contact backgroundImage={bg4} height={500} top={60} />} />
                <Route path="/myprofile" element={<MyProfile backgroundImage={bg2} height={500} top={60} />} />       
                <Route path="/myprofile/edit-profile" element={<EditProfile backgroundImage={bg5} height={400} top={60} />} /> 
                <Route path="/myprofile/payment" element={<Payment backgroundImage={bg5} height={400} top={60} />} />
                <Route path="/myprofile/wallet" element={<Wallet height={400} top={60} />} />
                <Route path="/myprofile/help-and-support" element={<Customer_Support height={400} top={60} />} />
                <Route path="/myprofile/my-loyalty-status" element={<MyLoyality height={400} top={60} />} />
                <Route path="/user/:id" element={<User/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Main;