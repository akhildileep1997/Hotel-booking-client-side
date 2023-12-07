import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }
  const user = JSON.parse(localStorage.getItem('loggedUser'))
  console.log("name",user);
  return (
    <div>
      <MDBNavbar className="navbar" expand="lg" light>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/home"><h3 className='ms-3 p-2' style={{color:'white',fontWeight:'bold'}}>IdealRooms!</h3></MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar>
            <MDBNavbarNav>
              {user ? (
                <>
                  <Dropdown className="ms-auto">
                    <Dropdown.Toggle
                    style={{border:'2px solid white'}}
                      variant="warning" id="dropdown-basic">
                      <i className="fa-solid fa-user me-3"></i>
                      {user.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <Link
                          style={{ color: "rgb(222, 39, 61)" }}
                          to={"/profile"}
                        >
                          <i className="fa-solid fa-hotel me-3"></i>Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{ color: "rgb(222, 39, 61)" }}
                        href="#/action-2"
                        onClick={() => handleLogout()}
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket me-3"></i>{" "}
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <MDBNavbarLink
                    className="link ms-auto text-light"
                    active
                    aria-current="page"
                  >
                    <Link style={{ color: "white" }} to={"/register"}>
                      Register
                    </Link>
                  </MDBNavbarLink>
                  <MDBNavbarLink
                    className="text-light"
                    active
                    aria-current="page"
                  >
                    <Link style={{ color: "white" }} to={"/login"}>
                      Login
                    </Link>
                  </MDBNavbarLink>
                </>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Navbar





