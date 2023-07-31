import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_THERAPIST } from "../utils/mutations";
import { Box, AppBar, Toolbar, Typography, Menu, Avatar, Button, MenuItem, Stack } from "@mui/material";
import Auth from "../utils/auth";
import TherapistCard from "../components/TherapistCard/index.js";
import Profile from "./Profile";

// Helper function to sanitize the therapist's name for use in a URL
const sanitizeURL = (name) => {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ""); // Remove any non-alphanumeric characters
};

const Therapists = ({ setIsLoggedIn }) => {
  const [selectedTherapist, setSelectedTherapist] = useState(null); // Updated state variable
  const [therapists, setTherapists] = useState([]); // Updated state variable

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = async () => {
    try {
      const response = await fetch("/api/therapists");
      const data = await response.json();
      // Assuming the therapist data includes an 'image' property for each therapist.
      // Update the data to include the image URL for each therapist.
      const therapistsWithImages = data.map((therapist) => ({
        ...therapist,
        image: `/images/TherapistImages/${sanitizeURL(therapist.name)}.jpeg`,
      }));

      setTherapists(therapistsWithImages);
    } catch (error) {
      console.log(error);
    }
  };
  
  const [addTherapist, { error, data }] = useMutation(ADD_THERAPIST);



  const handleTherapistSelection = (therapist) => {
    setSelectedTherapist(therapist);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

  
    

    if (selectedTherapist) {
      try {
        // Perform the necessary action upon therapist selection
        console.log("Selected Therapist:", selectedTherapist);

        // Example: Login the user with the selected therapist
        Auth.login(selectedTherapist.name);

        setIsLoggedIn(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">
            Select a Therapist
          </h4>
          <div className="card-body">
            <p>Choose from the top therapists:</p>

            
            {/* <ul className="list-group"> */}
            {therapists.map((therapist) => (
              <TherapistCard  
              key={therapist._id} 
              name={therapist.name} 
              specialty={therapist.specialty} 
              _id={therapist._id}
              image={therapist.image} // Pass the image URL to the TherapistCard component
              />
              ))}
            {/* </ul> */}


            {selectedTherapist && (
              <div className="mt-3">
                <p>
                  You have selected <strong>{selectedTherapist.name}</strong> as
                  your therapist.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Therapists;
