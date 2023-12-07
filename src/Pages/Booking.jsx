import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert2";
require("../baseUrl");

function Booking() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!user) {
    navigate("/login");
  }

  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [totalAmount, setTotalAmount] = useState();

  let { roomId, fromDate, toDate } = useParams();

  console.log(room);
  console.log(roomId, fromDate, toDate);

  // for calculating difference in date
  const firstDate = moment(fromDate, "DD-MM-YYYY");
  const lastDate = moment(toDate, "DD-MM-YYYY");
  const totalDays = moment.duration(lastDate.diff(firstDate)).asDays() + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post(`${baseUrl}/rooms/getroombyId`, {
          roomId: roomId,
        });
        setRoom(data);
        setTotalAmount(data.rentPerDay * totalDays);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onToken = async (token) => {
    console.log(token);
    const bookingDetails = {
      room,
      userId: JSON.parse(localStorage.getItem("loggedUser"))._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      token,
    };
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${baseUrl}/booking/book-room`,
        bookingDetails
      );
      console.log(data);
      swal
        .fire("Congratulation", "Room Booked Successfully", "success")
        .then((result) => {
          window.location.href = "/profile";
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : room ? (
        <div className="p-5">
          <div className="row justify-content-center my-5 ">
            <div className="col-md-5">
              <h1>{room?.name}</h1>
                <img className="bigImage" src={room.imageUrls[0]} alt="" />
                <div className="for-small-image">
                  <img className="small-image" src={room.imageUrls[1]} alt="" />
                  <img className="small-image ms-1" src={room.imageUrls[2]} alt="" />
                </div>
            </div>
            <div className="col-md-5 ">
              <div>
                <h1>Booking Details</h1> <hr style={{ color: "green" }} />
                <b>
                  <p>Name :{user.name} </p>
                  <p>Check In :{fromDate} </p>
                  <p>Check Out :{toDate} </p>
                  <p>Maximum for {room?.maxCount} peoples</p>
                </b>
              </div>
              <hr style={{ color: "green" }} />
              <div className="payment-div  text-right">
                <h1>Bill-Amount</h1>
                <hr />
                <p>
                  Total-days : <b>{totalDays}</b>
                </p>
                <p>
                  Rent-Per-day : <b>{room.rentPerDay}</b>
                </p>
                <h4>
                  Total Amount : <b>{totalAmount} </b>
                </h4>
                <hr style={{ color: "green" }} />
                  <div>
                    <hr style={{colir:'white'}} />
                  <StripeCheckout
                    amount={totalAmount * 100}
                    token={onToken}
                    currency="INR"
                    stripeKey="pk_test_51OF5YfSEeoVmKHWW7Y9NTnTACAqe35s6QvKjQgKJlxCiN2V2DHScWLRiCgmm1cV37FR7v9VUnuQLaeg4yNyuO5Qj003clt2yN4"
                  >
                    <button className="btn btn-success">Pay Now</button>
                  </StripeCheckout>
                </div>
                </div>
                <hr className="mt-3" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Error />
        </div>
      )}
    </div>
  );
}

export default Booking;
