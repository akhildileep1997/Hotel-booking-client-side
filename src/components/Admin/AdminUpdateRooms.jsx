import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import { baseUrl } from "../../baseUrl";

function AdminUpdateRooms() {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomMaxCount, setRoomMaxCount] = useState("");
  const [roomPhoneNumber, setRoomPhoneNumber] = useState("");
  const [roomRentPerDay, setRoomRentPerDay] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomFacilities, setRoomFacilities] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomImageUrl1, setRoomImageUrl1] = useState("");
  const [roomImageUrl2, setRoomImageUrl2] = useState("");
  const [roomImageUrl3, setRoomImageUrl3] = useState("");

  const { id } = useParams();
  console.log("for update id is >>>>>", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/rooms/get-room/${id}`);
        console.log(data);
        setRoomName(data.name);
        setRoomMaxCount(data.maxCount);
        setRoomPhoneNumber(data.phoneNumber);
        setRoomRentPerDay(data.rentPerDay);
        setRoomImageUrl1(data.imageUrls[0]);
        setRoomImageUrl2(data.imageUrls[1]);
        setRoomImageUrl3(data.imageUrls[2]);
        setRoomType(data.type);
        setRoomDescription(data.description);
        setRoomId(data._id);
        setRoomFacilities(data.facilities);
        console.log(data.imageUrls[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      const roomDetails = {
        name: roomName,
        maxCount: roomMaxCount,
        phoneNumber: roomPhoneNumber,
        imageUrls: [roomImageUrl1, roomImageUrl2, roomImageUrl3],
        description: roomDescription,
        facilities: roomFacilities,
        type: roomType,
        rentPerDay: roomRentPerDay,
      };
      const result = await axios.post(
        `${baseUrl}/rooms/update-room-details/` + id,
        roomDetails
      );
      console.log(result);
      swal
        .fire("Congratulation", "Room Added Successfully", "success")
        .then((result) => {
          navigate("/home");
        });
    } catch (error) {
      console.log(error);
      swal.fire("Oops", "something went wrong", "error");
    }
  };

  return (
    <>
      <div className="update-main-div">
        <div>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "red",
              textDecoration: "underline",
            }}
          >
            Update Room Details
          </h1>
        </div>
        <div className="update-div">
          <div className="update-first">
            <label>Id</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Enter Room Name"
              value={roomId}
            />
            <label>Name</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Enter Room Name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <label>Description</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Enter Room description"
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
            />
            <label>Rent-Per-Day</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Enter rent-per-day Amount"
              value={roomRentPerDay}
              onChange={(e) => setRoomRentPerDay(e.target.value)}
            />
            <label>Facilities</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Enter Your Facilities"
              value={roomFacilities}
              onChange={(e) => setRoomFacilities(e.target.value)}
            />
            <label>Maximum For</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Maximum for"
              value={roomMaxCount}
              onChange={(e) => setRoomMaxCount(e.target.value)}
            />
          </div>

          <div className="update-second ms-2">
            <label>Phone Number</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Enter contact number"
              value={roomPhoneNumber}
              onChange={(e) => setRoomPhoneNumber(e.target.value)}
            />
            <label>Category</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Enter Category"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            />
            <label>First-Image</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Add first image"
              value={roomImageUrl1}
              onChange={(e) => setRoomImageUrl1(e.target.value)}
            />
            <label>Second-Image</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-2"
              placeholder="Add second image"
              value={roomImageUrl2}
              onChange={(e) => setRoomImageUrl2(e.target.value)}
            />
            <label>Third-Image</label>
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              className="form-control mb-3"
              placeholder="Add third image"
              value={roomImageUrl3}
              onChange={(e) => setRoomImageUrl3(e.target.value)}
            />
            <div>
              <button
                onClick={() => handleUpdate()}
                style={{ borderRadius: "30px",marginTop:'17px' }}
                className="btn btn-danger form-control "
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUpdateRooms;
