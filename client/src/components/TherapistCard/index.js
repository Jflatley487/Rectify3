import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const TherapistCard = ({ name, specialty, _id, image }) => {
  var singleLink = `./pages/Profile/${_id}`;
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="9" lg="7" xl="5" className="mt-5">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                  {image && (
                    <MDBCardImage
                      style={{ width: "180px", borderRadius: "10px" }}
                      src={image}
                      alt={name}
                      fluid
                    />
                  )}
                </div>
                <div className="flex-grow-1 ms-3">
                  <MDBCardTitle>{name}</MDBCardTitle>
                  <MDBCardText>{specialty}</MDBCardText>
                  <div
                    className="d-flex justify-content-center align-items-center text-white bg-primary p-2"
                    style={{
                      textDecoration: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => (window.location.href = singleLink)}
                  >
                    Profile
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TherapistCard;