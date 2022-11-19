import React from "react";
import "../affidavit.scss";
import { useState } from "react";
import AffiFormOne from "./affidavitForm/formOne";
import AffiFormTwo from "./affidavitForm/formTwo";
import AffiFormThree from "./affidavitForm/formThird";

export default function SubAffidavit() {
    const [affiFormNum, setAffiFormNum] = useState(1);
    return (
        <>
            <div className="create">
                <div className="createTop">
                    <p className={affiFormNum===1 ? "createTopLink selected" : "createTopLink"}>{affiFormNum===1 ? <span className="round selected_round">1</span> : <span className="round_tick"></span>}CREATE</p>
                    <p className={affiFormNum===2 ? "createTopLink selected" : "createTopLink"}>{affiFormNum===2 ? <span className="round selected_round">2</span> :  affiFormNum===1 ? <span className="round">2</span> : <span className="round_tick"></span>}E-SIGNATURE</p>
                    <p className={affiFormNum===3 ? "createTopLink selected" : "createTopLink"}>{affiFormNum===3 ? <span className="round selected_round">3</span> : affiFormNum===1 || affiFormNum===2 ? <span className="round">3</span> : <span className="round_tick"></span>}DOCUMENT</p>
                </div>
            </div>
            {affiFormNum===1 ? <AffiFormOne next={setAffiFormNum} /> : null}
            {affiFormNum===2 ? <AffiFormTwo next={setAffiFormNum} /> : null}
            {affiFormNum===3 ? <AffiFormThree next={setAffiFormNum} /> : null}
        </>
    )
}