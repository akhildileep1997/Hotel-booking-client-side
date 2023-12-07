import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { DatePicker, Space } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

function Home() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  //for filtering
  const [duplicateRooms, setDuplicateRooms] = useState([]);

  //for searching
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("all");

  function filterByDate(dates) {
    // console.log(dates[0].format('DD-MM-YYYY'));
    // console.log(dates[1].format("DD-MM-YYYY"));
    const from = dates[0].format("DD-MM-YYYY");
    const to = dates[1].format("DD-MM-YYYY");
    console.log(moment(dates[0]).format("DD-MM-YY"));
    console.log(moment(dates[1]).format("DD-MM-YY"));
    setFromDate(from);
    setToDate(to);

    ///////filtering
    var tempRooms = [];
    for (const room of duplicateRooms) {
      var availability = false;

      if (room.currentBookings.length > 0) {
        for (const booking of room.currentBookings) {
          //check between or equal to dates
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            )
          ) {
            if (
              dates[0].format("DD-MM-YYYY") !== booking.fromDate &&
              dates[0].format("DD-MM-YYYY") !== booking.toDate &&
              dates[1].format("DD-MM-YYYY") !== booking.fromDate &&
              dates[1].format("DD-MM-YYYY") !== booking.toDate
            ) {
              availability = true;
            }
          }
        }
      } else {
        availability = true;
      }

      if (availability === true) {
        tempRooms.push(room);
      }
    }

    setRooms(tempRooms);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${baseUrl}/rooms/all-rooms`);
        setRooms(data);
        setDuplicateRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(duplicateRooms, "-------------------------------->duplicate");

  console.log(fromDate, toDate);

  // for searching
  const filterBySearch = () => {
    const filterRooms = duplicateRooms?.filter((room) =>
      room.location.toLowerCase().includes(searchKey.toLowerCase())
    );
    setRooms(filterRooms);
  };

  function filterByType(e) {
    setType(e);
    if (e !== "all") {
      const filterRooms = duplicateRooms.filter(
        (room) => room.type.toLowerCase() === e.toLowerCase()
      );
      setRooms(filterRooms);
    } else {
      setRooms(duplicateRooms);
    }
  }

  return (
    <div>
      <div>
        <img
          className="p-5"
          src="https://assets.oyoroomscdn.com/cmsMedia/ac15627f-c423-4383-a43b-1402ef8c3a73.png"
          alt=""
        />
      </div>
      <div className="filter mt-5">
        <div className="a">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
        <div className="b">
          <input
            style={{ padding: "7px", width: "25rem" }}
            type="text"
            className="form-control"
            placeholder="search-your-room"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyUp={filterBySearch}
          />
        </div>
        <div className="c">
          <select
            style={{ width: "15rem", padding: "7px" }}
            value={type}
            onChange={(e) => {
              filterByType(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        </div>
      </div>

      <div className="row" style={{ marginTop: "100px", marginBottom: "50px" }}>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room._id}>
              <Room room={room} fromDate={fromDate} toDate={toDate} />
            </div>
          ))
        ) : (
          <div className="text-center">
            {searchKey.length > 0 ? (
              <p className="search-error">
                Currently No rooms available for this location.
              </p>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
