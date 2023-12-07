import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../baseUrl';
import Table from "react-bootstrap/Table";
import swal from "sweetalert2";
import { Link } from 'react-router-dom';


function AdminRooms() {

    const[rooms,setRooms]=useState([])

     useEffect(() => {
       const fetchdata = async () => {
         try {
           const { data } = await axios.get(`${baseUrl}/rooms/get-all-rooms`);
           setRooms(data);
           console.log(data);
         } catch (error) {
           console.log(error);
         }
       };
       fetchdata();
     }, []);
  console.log("Room List", rooms);
  
  const deleteRoom = async(id) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/rooms/delete-room/${id}`)
      console.log(data);
            swal
              .fire(
                "Congratulation",
                "Room has been removed",
                "success"
              )
              .then((result) => 
              window.location.reload()
              );
    } catch (error) {
      console.log(error);
       swal.fire("Oops", "something went wrong", "error");
    }
  }
    
  return (
    <div className="text-center">
      <div className="row">
        <div style={{ marginLeft: "100px" }} className="col-md-10 tex-center">
          {rooms.length > 0 ? (
            <Table striped bordered hover size="sm">
              <thead>
                <tr style={{ backgroundColor: "rgb(222, 39, 61)" }}>
                  <th style={{ color: "white" }}>Room Id</th>
                  <th style={{ color: "white" }}>Room Name</th>
                  <th style={{ color: "white" }}>Category</th>
                  <th style={{ color: "white" }}>Rent-Per-day</th>
                  <th style={{ color: "white" }}>Max-People-Count</th>
                  <th style={{ color: "white" }}>Mobile</th>
                  <th style={{ color: "white" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((item) => (
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.rentPerDay}</td>
                    <td>{item.maxCount}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <button>
                          <i
                            onClick={() => deleteRoom(item._id)}
                            className="fa-solid fa-trash text-danger"
                          ></i>
                        </button>
                        <Link to={`/update-room-details/${item._id}`}>
                          <button>
                            <i className="fa-solid fa-pen text-primary"></i>
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No Rooms Added</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminRooms
