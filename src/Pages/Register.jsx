import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";


function Register() {
  //for toast
  const toast = useToast();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    Aos.init({
     duration:2000
   }) 
  },[])


  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "All fields mandatory",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else if (password === confirmPassword) {
      try {
        const user = { name, email, password, confirmPassword };
        setLoading(true);
        const { data } = await axios.post(`${baseUrl}/users/register`, user);
        setLoading(false);
         toast({
           title: "User added successfully",
           status: "success",
           duration: 3000,
           isClosable: true,
           position: "top",
         });
        navigate("/login");
        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
        alert(error.message);
      }
    } else {
      toast({
        title: "both password and confirm password should be same",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <div className="register-main-div">
      <div className="register-div">
        <div className="register-content" data-aos="fade-right">
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
              Register
            </h1>
          </span>
          <div className="mt-5">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              type="password"
              placeholder="Confirm-Password"
              value={confirmPassword || ""}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <div>
              <button
                onClick={() => handleRegister()}
                className="btn btn-danger form-control"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-2 text-center">
              <span className="text-secondary">
                Already an Account ?
                <Link to={"/login"}>
                  <span
                    className="text-danger"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Login Here...
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="register-text ms-5">
          <h1 style={{ fontSize: "50px", fontWeight: "bolder" }}>
            There’s a smarter way to IdealRooms around
          </h1>
          <p style={{ letterSpacing: "2px" }} className="mt-4">
            Sign up with your email and get exclusive access to discounts and
            savings on idealROom stays and with our many travel partners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
