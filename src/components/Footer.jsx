import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <div>
      <MDBFooter
        style={{ backgroundColor: "rgb(222, 39, 61)", color: "white" }}
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block text-light">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="text-light">
            <a className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="text-light">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  IdealRooms!
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="/" className="text-reset">
                    Delux
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Non-Delux
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Holiday-Package
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset"></a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Delhi
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Kerala
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Tamil-Nadu
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Rajasthan
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Maharashta, MY 10012, India
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  idealrooms@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 180 100 1080
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> 188 100 1008
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center text-light p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="/">
            idealRooms.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer
