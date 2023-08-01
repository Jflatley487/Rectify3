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
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const TherapistCard = ({ name, specialty, _id, image }) => {
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
                  <MDBCardText>id {_id}</MDBCardText>
                  <Link style={{ textDecoration: "none", color: "inherit" }}>
                  <Button
                    variant="outline"
                    color="#0F0"
                    onClick={(event) => {
                      window.location.href = `/Profile/${_id}`;
                    }}
                    >
                    Profile
                  </Button>
                  </Link>
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