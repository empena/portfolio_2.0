import React from "react";
import "../styles/Portfolio.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import DownTheAisle from "../modals/DownTheAisle";
import FourAndOne from "../modals/FourAndOne";
import Electra from "../modals/Electra";
import GWConnections from "../modals/GWConnections";
import GWFeels from "../modals/GWFeels";
import GWMemories from "../modals/GWMemories";
import LilyBrideDesign from "../modals/LilyBrideDesign";
import LWA from "../modals/LWA";
import PartyPop from "../modals/PartyPop";
import PosterCollection from "../modals/PosterCollection";
import ReadyToPop from "../modals/ReadyToPop";
import Wigwam from "../modals/Wigwam";
import BattersUp from "../modals/BattersUp";
import Benton from "../modals/Benton";

const Design = () => {
  return (
    <>
      <Navbar />
      <div className="scrolling-box">
        <div style={styles.headerContainer}>
          <h1>Design Portfolio</h1>
        </div>
        <section id="code">
          <div className="portfolioContainer">
            <div className="row">
              <DownTheAisle />
              <FourAndOne />
              <Electra />
              <GWConnections />
              <GWFeels />
              <GWMemories />
              <LilyBrideDesign />
              <LWA />
              <PartyPop />
              <PosterCollection />
              <ReadyToPop />
              <Wigwam />
              <BattersUp />
              <Benton />
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Design;

const styles = {
  headerContainer: {
    backgroundColor: "#232323",
    fontSize: "20px",
    width: "auto",
    height: "auto",
    color: "#00FFD1",
    textAlign: "center",
    padding: "50px",
    paddingTop: "70px",
    marginTop: "1.5em",
  },
};
