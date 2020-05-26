import React from "react";
import "../styles/Portfolio.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LWABuilders from "../modals/LWABuilders";
import DigitalGloveBox from "../modals/DigitalGloveBox";

const Code = () => {
  return (
    <>
      <Navbar />
      <div className="scrolling-box">
        <div style={styles.headerContainer}>
          <h1>Code Portfolio</h1>
        </div>
        <section id="code">
          <div className="portfolioContainer">
            <div className="row">
              <LWABuilders />
              <DigitalGloveBox />
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Code;

const styles = {
  headerContainer: {
    backgroundColor: "#232323",
    width: "auto",
    height: "auto",
    color: "#00FFD1",
    textAlign: "center",
    padding: "50px",
    paddingTop: "100px",
    marginTop: "1.5em",
  },
};
