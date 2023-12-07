import React, { useEffect } from "react";
import { Tabs } from "antd";
import AdminBooking from "../components/Admin/AdminBooking";
import AdminUsers from "../components/Admin/AdminUsers";
import AdminRooms from "../components/Admin/AdminRooms";
import { useNavigate } from "react-router-dom";
import AdminAddRoom from "../components/Admin/AdminAddRoom";
function Admin() {

  const navigate = useNavigate()


  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('loggedUser')).isAdmin) {
   navigate('/home')
 }
  },[])

  return (
    <div className="p-5">
      <div className="p-2 shadow " style={{ width: "100%" }}>
        <Tabs style={{ width: "100%" }}>
          <Tabs.TabPane tab="Bookings" key="1">
            <div>
              <AdminBooking />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Users" key="2">
            <div className="text-center">
              <AdminUsers />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Rooms" key="3">
            <div className="text-center">
              <AdminRooms />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Add Rooms" key="4">
            <div className="text-center">
              <AdminAddRoom />
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Admin;
