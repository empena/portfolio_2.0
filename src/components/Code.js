import React, { useState } from "react";
import "../styles/Portfolio.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Code = () => {
  const [showForm, setShowForm] = useState(false);

  const Modal = () => {
    return (
      <>
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h1>Project Name</h1>
            <p>Description</p>
            <a href="https://www.emilypena.me" style={styles.circle}>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.emilypena.me" style={styles.circle}>
              <FontAwesomeIcon icon={faEye} />
            </a>
            <button onClick={() => setShowForm(!showForm)}>
              {showForm ? "x" : "View"}
            </button>
            <img
              alt="Test"
              src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589342289/Portfolio/Screen_Shot_2020-05-12_at_9.57.57_PM_p6ntna.png"
            />
          </div>
        </div>
      </>
    );
  };

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
              <div className="column">
                {showForm && <Modal toggleForm={setShowForm} />}
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589342289/Portfolio/Screen_Shot_2020-05-12_at_9.57.57_PM_p6ntna.png"
                />
              </div>
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
    padding: "100px",
    marginTop: "1.5em",
  },

  modal: {
    position: "fixed",
    zIndex: "1",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.8)",
  },

  modalContent: {
    textAlign: "center",
    backgroundColor: "white",
    margin: "15% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
  },

  h1: {
    color: "#00FFD1",
  },

  p2: {
    color: "#ADADAD",
    lineHeight: "23px",
  },

  circle: {
    marginRight: "1em",
    border: "1px solid #00FFD1",
    borderRadius: "50%",
    width: "20px",
    padding: ".75em",
    textAlign: "center",
    color: "#00FFD1",
  },
};
