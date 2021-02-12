import React, { useState } from "react";

import "react-dom";
import "./App.css";
function Form() {
    // const [users, setUsers] = useState({
    //     name: "",
    //     Address1: "",
    //     Address2: "",
    //     contact: ""
    // });
    const [sysncName, setName] = useState("");
    const [sysncAdd1, setAdd1] = useState("");
    const [sysncAdd2, setAdd2] = useState("");
    const [sysncCon, setCon] = useState("");
    const [sysncSelect, setSelect] = useState("");
    const [sysnStatus, setStatus] = useState("");
    const [sysncQua, setQua] = useState("");


    const updateName = (e) => setName(e.target.value);
    const updateAdd1 = (e) => setAdd1(e.target.value);
    const updateAdd2 = (e) => setAdd2(e.target.value);
    const updateCon = (e) => setCon(e.target.value);
    const updateSelect = (e) => setSelect(e.target.value);
    const updateQua = (e) => setQua(e.target.value);



    const nameerr = (e) => setStatus("Name Should not be empty");
    const add1err = (e) => setStatus("Address1 Should not be empty");
    const add2err = (e) => setStatus("Address2 Should not be empty");
    const conerr = (e) => setStatus("Contact Should not be empty");
    const fullerr = (e) => setStatus("Form Should not be empty");
    const selecterr = (e) => setSelect("Please select your item");
    const Quaerr = (e) => setQua("Please select your item");
    // const syncName = (e) => {
    //     setUsers({ ...users, name: e.target.value });
    // }
    // const syncAddress1 = (e) => {
    //     setUsers({ ...users, Address1: e.target.value });
    // }
    // const syncAddress2 = (e) => {
    //     setUsers({ ...users, Address2: e.target.value });
    // }
    // const syncContact = (e) => {
    //     setUsers({ ...users, contact: e.target.value })
    // }
    // const emptyname = (e) => setUsers.name("Username Must Not Be Empty");



    const onSubmit = () => {

        if (sysncName === "") {
            nameerr();
        }

        if (sysncCon === "") {
            conerr();
        }
        if (sysncAdd1 === "") {
            add1err();
        }
        if (sysncAdd2 === "") {
            add2err();
        }
        if (sysncSelect === "Please select from below list") {
            selecterr();
        }
        if (sysncQua === "Please select from below list") {
            Quaerr();
        }
        if (sysncName == "" && sysncAdd1 == "" && sysncAdd2 == "" && sysncCon == "") {
            fullerr();
        }

        if (sysncName !== "" && sysncAdd1 !== "" && sysncAdd2 !== "" && sysncCon !== "") {
            setName("");
            setAdd1("");
            setAdd2("");
            setCon("");
            sessionStorage.setItem("customer", JSON.stringify({ "Customer Name": sysncName, "Address1": sysncAdd1, "Address2": sysncAdd2, "Contact Number": sysncCon, "Item Selected": sysncSelect, "Quantity": sysncQua }))
            // localStorage.setItem("customer",sysncAdd1)

        }

    }

    // localStorage.setItem(JSON.stringify(users));


    return (
        <div className="formNew">
            <h2 style={{ fontFamily: "cursive", paddingLeft: "200px", paddingBottom: "10px" }}>PickUp Details</h2>
            <form >

                <div>
                    <input type="text" value={sysncName} onChange={updateName} placeholder="Enter your name" className="inputTag"></input>

                </div>
                <div>
                    <input type="number" value={sysncCon} onChange={updateCon} placeholder="Contact Number" className="inputTag"></input>

                </div>
                <div>
                    <input type="text" value={sysncAdd1} onChange={updateAdd1} placeholder="Address Line 1" className="inputTag"></input>

                </div>
                <div>
                    <input type="text" value={sysncAdd2} onChange={updateAdd2} placeholder="Address Line 2" className="inputTag"></input>

                </div>

                <span style={{ color: 'red' }}>{sysnStatus}</span>
                <div>
                    <select value={sysncSelect} onChange={updateSelect} name="CHOOSE YOUR CONTRIBUTION" id="selectbox" className="inputTag">
                        <option value="No Selection done"  >Please select from below list</option>
                        <option value="NewPaper" id="np">NewPaper</option>
                        <option value="Plastics" onclick="" id="pl">Plastics</option>
                        <option value="Metals" onclick=" " id="me">Metals</option>
                    </select>
                    <select value={sysncQua} onChange={updateQua} name="Quantiy" id="selectbox">
                        <option value="No Selection done">Approx. Quantiy</option>
                        <option value="5kg" >5Kg</option>
                        <option value="10Kg">10Kg</option>
                        <option value="15Kg">15Kg</option>
                        <option value="20Kg">20Kg</option>
                        <option value="25Kg">25Kg</option>
                        <option value="30Kg">30Kg</option>
                    </select>
                    <br></br>


                    {/* <button onClick={calnp()}>Calculate </button> */}

                </div>
            </form>
            <button type="submit" onClick={onSubmit} className="btn btn-success" style={{ cursor: "pointer", position: "absolute", left: "680px" }}>Send Request</button>
        </div>
    )
}

export default Form;



