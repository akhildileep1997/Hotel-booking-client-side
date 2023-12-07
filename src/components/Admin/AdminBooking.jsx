import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import Table from "react-bootstrap/Table";
import { Tag } from "antd";

function AdminBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/booking/get-all-bookings`);
        setBookings(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  console.log("Bookingd data", bookings);

  return (
    <div className="text-center">
      <div className="row">
        <div style={{ marginLeft: "100px" }} className="col-md-10 tex-center">
          {bookings.length > 0 ? (
            <Table striped bordered hover size="sm">
              <thead>
                <tr style={{ backgroundColor: "rgb(222, 39, 61)" }}>
                  <th style={{ color: "white" }}>Booking Id</th>
                  <th style={{ color: "white" }}>Room Name</th>
                  <th style={{ color: "white" }}>User Id</th>
                  <th style={{ color: "white" }}>Check In</th>
                  <th style={{ color: "white" }}>Check Out</th>
                  <th style={{ color: "white" }}>Total Days</th>
                  <th style={{ color: "white" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((item) => (
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.room}</td>
                    <td>{item.userId}</td>
                    <td>{item.fromDate}</td>
                    <td>{item.toDate}</td>
                    <td>{item.totalDays}</td>
                    <td>
                      {item.status === "Booked" ? (
                        <Tag color="green">Booked</Tag>
                      ) : (
                        <Tag color="red">Cancelled</Tag>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No Bookings As Of Now</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminBooking;
