import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tag } from "antd";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import Aos from "aos";
import "aos/dist/aos.css";

function Room({ room, fromDate, toDate, name, props }) {

  useEffect(() => {
    Aos.init({
      duration:1000
    })
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(room);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="main p-3 shadow my-3" data-aos='fade-up'>
        <div className=" image p-2">
          <img className="smallimg" src={room.imageUrls[0]} alt="room" />
        </div>
        <div className=" content p-3">
          <h1>{room.name}</h1>
          <p>Location : {room.location }</p>
          <p>facilities : {room.facilities}</p>
          <p>Category : {room.type}</p>
          <p>Maximum for : {room.maxCount} peoples</p>
          <p>Per Day Rent : {room.rentPerDay}</p>
          <div className="d-flex" style={{ float: "right" }}>
            <button onClick={handleShow} className="btn btn-outline-dark me-2">
              View Details
            </button>
            {/* condition applying if from date and to date have value then only displaying book now */}
            {fromDate && toDate && (
              <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
                <button className="btn btn-success">Book Now</button>
              </Link>
            )}
          </div>
        </div>
        <Offcanvas
          style={{ height: "80%", width: "50%" }}
          placement="top"
          show={show}
          onHide={handleClose}
          {...props}
          className="off-canvas-main"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h1>{room.name}</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MDBCarousel showIndicators showControls fade>
              <MDBCarouselItem itemId={1}>
                <img
                  src={room.imageUrls[0]}
                  className="d-block room-image"
                  alt="..."
                />
              </MDBCarouselItem>

              <MDBCarouselItem itemId={2}>
                <img
                  src={room.imageUrls[1]}
                  className="d-block room-image"
                  alt="..."
                />
              </MDBCarouselItem>

              <MDBCarouselItem itemId={3}>
                <img
                  src={room.imageUrls[2]}
                  className="d-block room-image"
                  alt="..."
                />
              </MDBCarouselItem>
            </MDBCarousel>
            <div className="mt-3">
              <p>{room.description}</p>
              <p>
                Facilities :{" "}
                <Tag className="p-1 ms-4" color="green">
                  <h6 style={{ color: "black" ,padding:'0px',margin:'0px' }}>{room.facilities}</h6>
                </Tag>
              </p>
              <p>
                Rent-Per-Day :
                <Tag className="p-1 ms-3" color="green">
                  <h6 style={{color:'black',padding:'0px',margin:'0px'}}>{room.rentPerDay}</h6>
                </Tag>
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Room;
