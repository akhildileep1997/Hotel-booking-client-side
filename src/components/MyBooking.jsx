import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import swal from "sweetalert2";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";



function MyBooking({ user }) {
const navigate = useNavigate()
  if (!localStorage.getItem("loggedUser")) {
 navigate('/login')
  }


  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${baseUrl}/booking/get-booked-roomById`,
          { userid: user._id }
        );

        console.log(response.data, ",,<<<>>>>>>>");
        setBooking(response.data);
        console.log(booking);
        console.log(typeof booking);
      } catch (error) {
        setError(true);
        console.error("Error fetching booking data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user._id]);

  const cancelBooking = async (bookingid, roomid) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${baseUrl}/booking/cancel-booking`, {
        bookingid,
        roomid,
      });
      setLoading(false);
      swal
        .fire("Congratulation", "Your Booking Canceled Successfully", "success")
        .then((result) => {
          window.location.reload();
        });
      console.log(data);
    } catch (error) {
      console.log(error);
      swal.fire("Oops", "something went wrong", "error");
      setBooking(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 mt-3">
      {booking.length > 0 ? (
        booking.map((item) => (
          <div className=" p-3 shadow ">
            <h5>{item.room}</h5>
            <p>
              Booking Id: <b>{item._id}</b>{" "}
            </p>
            <p>
              Check in Date: <b>{item.fromDate}</b>{" "}
            </p>
            <p>
              Check Out Date : <b>{item.toDate}</b>{" "}
            </p>
            <p>
              Amount: <b>{item.totalAmount}</b>{" "}
            </p>
            <p>
              Booking Status :{" "}
              <b>
                {item.status !== "Booked" ? (
                  <Tag color="red">Cancelled</Tag>
                ) : (
                  <Tag color="green">Confirm</Tag>
                )}
              </b>
            </p>
            {item.status !== "canceled" && (
              <div className="mb-3">
                <button
                  onClick={() => cancelBooking(item._id, item.roomId)}
                  className="btn btn-danger"
                >
                  Cancel Booking
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>
          <p>No Bookings</p>
        </div>
      )}
    </div>
  );
}

export default MyBooking;
