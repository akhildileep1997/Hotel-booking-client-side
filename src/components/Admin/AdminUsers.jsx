import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../baseUrl';
import axios from 'axios';
import Table from 'react-bootstrap/esm/Table';


function AdminUsers() {

  const [users,setUsers] = useState([])

    useEffect(() => {
      const fetchdata = async () => {
        try {
          const { data } = await axios.get(
            `${baseUrl}/users/get-all-users`
          );
          setUsers(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchdata();
    }, []);
    console.log("User list", users);
  return (
    <div className="text-center">
      <div className="row">
        <div style={{ marginLeft: "100px" }} className="col-md-10 tex-center">
          {users.length > 0 ? (
            <Table striped bordered hover size="sm">
              <thead>
                <tr style={{ backgroundColor: "rgb(222, 39, 61)" }}>
                  <th style={{ color: "white" }}>User Id</th>
                  <th style={{ color: "white" }}> Name</th>
                  <th style={{ color: "white" }}>email</th>
                  <th style={{ color: "white" }}>Admin/Not</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.isAdmin ? "Admin" : "Not Admin"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No Users registered</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminUsers
