import React, { useState } from "react";
import "../authStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import LandingFooter from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./Register.css"; 
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain at least 1 digit.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validatePassword(password)) {
        return;
      }
      const res = await axios.post("http://localhost:3000/api/register", {
        name,
        lastname,
        email,
        password,
      });
      console.log('res',res);
      if (res && res.data.success) {
        toast.success("Registered Successfully");
        navigate("/login");
      } else {
        toast.error("Something went wrong");
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="authpage_godparent">
        <div className="authpage_parent">
          {/* <div className="authpage_leftdiv"> */}
          <div className="authpage_leftdiv">
          <img src='/background.jpeg' alt='image' />
          <p>A web scraper software designed to extract information from website like Filpkart, Amazon, and Myntra. It automates collecting data by simulating human interaction with web page and sends you to your destination through links, making your jounrey  eaxy to playfal.</p>
            <div/>
          <button  onClick={() => navigate("/")} className="btn authpage_floatingbtn authpage_goback"><div> Go back</div></button>
          </div>
          <div className="authpage_rightdiv">
          <form onSubmit={handleSubmit} className="authform">
          <button onClick={() => navigate("/login")} className="btn authpage_floatingbtn">Have an account? Login</button>
              <h1 className="authform_heading">Signup Page</h1>
              <div className="authform_container">
                <input
                  type="text"
                  className="form-control"
                  name="yourname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="authform_container">
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last Name"
                />
              </div>

              <div className="authform_container">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="authform_container">
              <input
          type={passwordType}
          className={`form-control ${passwordError ? "invalid" : ""}`}
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          required
          placeholder="Password"
        />
           {passwordError && <div className="error-message">{passwordError}</div>}

<button
  type="button"
  onClick={passwordToggle}
  className="toggle-button"
>
  {passwordType === "password" ? "Show" : "Hide"}
</button>

              </div>
              <div className="authform_container">
              <span>
                <input type="checkbox" id="term_condition" name="term_condition" value="true" />
              I agree with <b>Privacy Policy </b> and  <b>Term of Use</b>
              </span>
              </div>
<br></br>
              <button type="submit" className="authpage_submitbtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <LandingFooter /> */}
    </>
  );
};

export default Register;
