import React, { useState } from "react";
import "./wallet.style.scss";

import Background from "../../../Main/background";

import bg1 from "../../../Images/background5.svg";

const rechargePackJSON = [50, 100, 200, 3000, 500, 1000, 2000, 40000, 5000, 10000, 20000, 50000];

export default function Wallet(info) {
    const [price, setPrice] = useState(50);
    const [selPrice, setSelPrice] = useState(0);
    function Button(pr) {
        return (
            <button className={selPrice===pr.index ? "rechargePrice sel" : "rechargePrice"} onClick={(e)=>{
                setSelPrice(pr.index);
                setPrice(pr.price);
            }}>₹ {pr.price}</button>
        )
    }
    return (
        <>
        <Background backgroundImage={bg1} height={info.height} top={info.top}/>
        <div className="wallet">
            <div className="walletNav">
                <div className="walletLogo"></div>
                <div className="walletRight">
                    <p className="walletNavTitle">Wallet Balance</p>
                    <h1 className="walletBalance">₹ 0.00</h1>
                </div>
            </div>
            <div className="walletMainSection">
                <h3 className="walletTitle">Recharge Wallet</h3>
                <div className="walletSubTitle">Choose form the available recharge packs.</div>
                <div className="walletRechargePackSection">
                    {rechargePackJSON.map((e, i)=>{
                        return <Button price={e} index={i}/>
                    })}
                </div>
            </div>
            <div className="rec">
                <div className="recHead">GET RS.{price} IN</div>
                <table className="calculation">
                    <tr>
                        <td className="leftSide">Amount</td>
                        <td className="rightSide">{price}</td>
                    </tr>
                    <tr>
                        <td className="leftSide">GST @ 18%</td>
                        <td className="rightSide">{price*0.18}</td>
                    </tr>
                    <tr>
                        <td className="leftSide">Talktime Value</td>
                        <td className="rightSide">{price*0.10}</td>
                    </tr>
                    <tr>
                        <td className="leftSide">Extra Talktime</td>
                        <td className="rightSide">{price*0.10}</td>
                    </tr>
                    <tr>
                        <th className="leftSide">TOTAL</th>
                        <th className="rightSide">₹ {price + price*0.18 + price*0.10 + price*0.10}</th>
                    </tr>
                </table>
            </div>
            <button className="button">PROCESS TO PAY</button>
        </div>
        </>
    )
}