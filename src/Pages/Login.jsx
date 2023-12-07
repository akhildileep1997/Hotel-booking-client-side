import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Aos from 'aos'
import 'aos/dist/aos.css'


function Login() {
  //for toast
  const toast = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [Success, setSuccess] = useState();

  useEffect(() => {
    Aos.init({
     duration:2000
   }) 
  },[])

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Incorrect email or password",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      try {
        const user = {
          email,
          password,
        };
        setLoading(true);
        const { data } = await axios.post(`${baseUrl}/users/login`, user);
        setLoading(false);
        localStorage.setItem("loggedUser", JSON.stringify(data));
        toast({
          title: "Login Success",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        navigate("/home");
        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(true);
        toast({
          title: "Incorrect email or password",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        console.log(error);
      }
    }
  };
  return (
    <div className="login-main-div">
      <div className="login-div">
        <div className="login-text">
          <h1 style={{ fontSize: "50px", fontWeight: "bolder" }}>
            There’s a smarter way to IdealRooms around
          </h1>
          <p style={{letterSpacing:'2px'}} className="mt-4">
            Sign up with your email and get exclusive access to discounts
            and savings on idealROom stays and with our many travel partners.
          </p>
        </div>
        <div className="login-content" data-aos='fade-left'>
          <div>
            <span className="text-center" style={{ backgroundColor: "red" }}>
              <h1
                className="my-3 p-1"
                style={{
                  color: "rgb(244, 238, 238)",
                  fontSize: "50px",
                  fontWeight: "bolder",
                  backgroundColor: "rgb(222, 39, 61)",
                }}
              >
                Login
              </h1>
            </span>
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div>
              <button
                onClick={() => handleLogin()}
                className="btn btn-danger form-control rounded shadow"
              >
                Login
              </button>
              <div className="mt-2 text-center">
                <span className="text-secondary">
                  Don't Have an Account ?
                  <Link to={"/register"}>
                    <span
                      className="text-danger"
                      style={{ fontSize: "20px", marginLeft: "10px" }}
                    >
                      Register Here...
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
