import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";


function Landing() {

  useEffect(() => {
    Aos.init({
      duration:1000
    })
  },[])

    const navigate = useNavigate()
    function handleToLogin() {
        navigate('./login')
    }
  return (
    <div className="landing-main-div ">
      <div className="landing-items" data-aos='fade-up'>
        <div className="landing-text">
          <h1 style={{fontWeight:'bold'}}>
            Securely book rooms on our site, <br />
            Over 1000+ individuals are swiftly reserving <br /> their
            accommodations through our platform
            <br />
          </h1>
          <div>
            <h2
              style={{
                color: "blue",
                fontFamily: 'font-family: "Montserrat", sans-serif;',
              }}
            >
              Are You Next ?
            </h2>
          </div>
          <div>
            <h1>
              Flat 50% Offer <br /> for Your first Booking
            </h1>
            <h3>Be the next one to grab the offer</h3>
          </div>
          <div>
            <button onClick={() => handleToLogin()}>Get Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing
