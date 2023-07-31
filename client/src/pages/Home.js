import React from "react";
import { Link } from "react-router-dom";
import "../utils/css/Home.css";
//import handcuffs from "../../src/img/David-Chang-LMFT.jpeg";
import handcuffs from "../../src/img/Handcuffs.jpg";

function LandingPageButton() {
  return (
    <Link to="/about" className="">
      <button
        style={{
          flex: "center",
          minWidth: "25%",
          height: "30%",
          maxWidth: "30%",
          backgroundColor: "#39A0ED",
          color: "White",
          fontSize: "25%",
        }}
      >
        <span>Click Here To Learn More</span>
      </button>
    </Link>
  );
}

function LandingFrameMessage() {
  return (
    <div className="landing-welcome">
      <div>Welcome to Rectify!</div>
      <img src={handcuffs} alt="Broken handcuffs" className="home-image" />
      <div style={{ paddingTop: 40 }} className="landing-message">
        Unleashing Hope: Empowering former inmates to embrace a radiant future
        filled with new opportunities and possibilities.
      </div>
      <LandingPageButton />
      <br />
      <div style={{ paddingTop: 30 }} className="landing-message">
        Join our transformative journey today!
      </div>
      <br />
    </div>
  );
}

function LandingFrame() {
  return (
    <div>
      <LandingFrameMessage />
    </div>
  );
}
function Home() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}
export default Home;
