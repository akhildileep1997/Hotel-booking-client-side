import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../baseUrl";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AdminAddRoom() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [facilities, setFacilities] = useState("");
  const [location,setLocation] = useState("")
  const [rentPerDay, setRentPerDay] = useState("");
  const [maxCount, setMaxCount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [type, setType] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");

  const addRoom = async () => {
    const roomDetails = {
      name,
      description,
      location,
      facilities,
      rentPerDay,
      maxCount,
      phoneNumber,
      type,
      imageUrls: [imageUrl1, imageUrl2, imageUrl3],
    };
    console.log('room details are',roomDetails);
    try {
      const { data } = await axios.post(
        `${baseUrl}/rooms/add-room`,
        roomDetails
      );
      console.log(data);
      swal.fire("Congratulation", "Room Added Successfully", "success")
        .then((result) => {
          navigate("/home");
        });
    } catch (error) {
      console.log(error);
      swal.fire("Oops", "something went wrong", "error");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div style={{ marginLeft: "100px" }} className="col-5">
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Enter Room Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Enter Room description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="enter Location"
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Enter rent-per-day Amount"
            value={rentPerDay}
            onChange={(e) => setRentPerDay(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Enter Your Facilities"
            value={facilities}
            onChange={(e) => setFacilities(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Maximum for"
            value={maxCount}
            onChange={(e) => setMaxCount(e.target.value)}
          />
        </div>

        <div className="col-5">
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Enter contact number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Enter Category"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Add first image"
            value={imageUrl1}
            onChange={(e) => setImageUrl1(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Add second image"
            value={imageUrl2}
            onChange={(e) => setImageUrl2(e.target.value)}
          />
          <input
            style={{ borderRadius: "30px" }}
            type="text"
            className="form-control mb-2"
            placeholder="Add third image"
            value={imageUrl3}
            onChange={(e) => setImageUrl3(e.target.value)}
          />
          <div>
            <button
              onClick={() => addRoom()}
              style={{ borderRadius: "30px" }}
              className="btn btn-danger form-control"
            >
              Add Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddRoom;
