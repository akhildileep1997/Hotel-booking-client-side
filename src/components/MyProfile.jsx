import React from 'react'
import { Link } from 'react-router-dom';

function MyProfile({ user }) {
    
  return (
    <div>
      <div style={{ borderRadius: "30px" }} className="details p-3 shadow">
        <h3 className="mb-5 text-center">Profile-Details</h3>
        <h5>
          Name: <b>{user.name}</b>
        </h5>
        <p className="mt-3">
          email: <b>{user.email}</b>
        </p>
        <p>
          Admin or Not: <b>{user.isAdmin ? <Link to={'/admin'}>"Yes"</Link> : "No"}</b>
        </p>
      </div>
    </div>
  );
}

export default MyProfile
