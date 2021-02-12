import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useRafState } from "react-use";
import servicesImg from "../src/signup.jpg";
import img1 from "./img.jpg"
function Signup() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    // mobile: ""
  });
  const [status, setStatus] = useState("");

  const syncName = (e) => {
    setUser({ ...user, name: e.target.value })
  }
  const syncPass = (e) => {
    setUser({ ...user, password: e.target.value })
  }
  const syncEmail = (e) => {
    setUser({ ...user, email: e.target.value })
  }
  const errmesage = (e) => setStatus("Fill up the required");
  // setUser({
  //   name: "",
  //   password: "",
  //   email: "",
  //   mobile: ""
  // });
  const registerUser = () => {
    console.log("user", user);

    if (user.name === "" || user.password === "" || user.email === "") {
      errmesage();
    }
    localStorage.setItem("customer", JSON.stringify(user));
    <BrowserRouter>
      <Route exact path="/Services">
      </Route></BrowserRouter>
  }
  return (
    <>

      <div className="col p-10 " style={{
        display: "grid",
        backgroundColor: "whitesmoke",
        width: "100vw",
        height: "100vh", justifyContent: "center", alignContent: "center"
      }}>
        <form className="signupBox">
          <img className="" src={servicesImg} height="250px"></img>
          <h1 style={{ padding: "40px", marginLeft: "50px", position: "absolute", left: "600px", top: "35px", color: 'green', fontFamily: "cursive", fontWeight: "normal", fontSize: "3rem" }}>Register</h1>
          <div>
            <input style={{ width: '100%', borderRadius: "5px", justifyItems: "center", textAlign: "center" }} type="text" value={user.name} onChange={syncName} placeholder="User Name"></input>
          </div>

          <div>
            <input style={{ width: '100%', borderRadius: "5px", justifyItems: "center", textAlign: "center" }} className="signupBox" type="email" value={user.email} onChange={syncEmail} placeholder="Email"></input>
          </div>
          <div>
            <input style={{ width: '100%', borderRadius: "5px", justifyItems: "center", textAlign: "center" }} className="signupBox" type="password" value={user.password} onChange={syncPass} placeholder="password"></input>
          </div>
          <span style={{ color: 'red' }}>{status}</span>

          <div>
            <br></br>
            <button style={{ position: "relative" }} type="submit" className="btn btn-success  " onClick={registerUser}>Register</button>

            <Link to="/Services"><button className="btn btn-info " style={{ position: "relative", left: "400px", margin: "10px" }}>Services</button></Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default Signup;  