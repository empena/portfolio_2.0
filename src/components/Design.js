import React, { useState } from "react";
import "../styles/Portfolio.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Design = () => {
  const [showForm, setShowForm] = useState(false);

  const Modal = () => {
    return (
      <>
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.modalExit}
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "x" : "View"}
            </button>
            <div style={styles.modalHeader}>
              <h1 style={styles.h1}>Project Name</h1>
              <p style={styles.p2}>Description</p>
              <a href="https://www.emilypena.me" style={styles.circle}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://www.emilypena.me" style={styles.circle}>
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
            <div style={styles.modalImg}>
            <img
              alt="Test"
              src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589342289/Portfolio/Screen_Shot_2020-05-12_at_9.57.57_PM_p6ntna.png"
            />
            <img
              alt="Test"
              src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589342289/Portfolio/Screen_Shot_2020-05-12_at_9.57.57_PM_p6ntna.png"
            />
            <img
              alt="Test"
              src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589342289/Portfolio/Screen_Shot_2020-05-12_at_9.57.57_PM_p6ntna.png"
            />
            </div>
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
          <h1>Design Portfolio</h1>
        </div>
        <section id="code">
          <div className="portfolioContainer">
            <div className="row">
              <div className="column">
                {showForm && <Modal toggleForm={setShowForm} />}
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340814/Portfolio/DownTheAisle_thumb_eihcbb.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340735/Portfolio/Electra_thumb_lefdtv.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340624/Portfolio/GWConnections_thumb_jjua6z.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340596/Portfolio/GWFeels_thumb_cj3pwp.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340561/Portfolio/GWMemories_thumb_bzhkts.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589338121/Portfolio/LilyBrideDesign_thumb_g6xuhb.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589338101/Portfolio/LWA_thumb_jv5aax.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589338048/Portfolio/PartyPop_thumb_d1rgwv.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589337940/Portfolio/PosterCollection_thumb_ho0yku.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589337874/Portfolio/ReadyToPop_thumb_wdnvum.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308642/Portfolio/Wigwam_thumb_xauszz.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308642/Portfolio/BattersUp2_tlthiu.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308638/Portfolio/Benton_thumb_jj6cdm.jpg"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308637/Portfolio/4_1_thumb_gzygqh.jpg"
                />
              </div>
            </div>
          </div>
          {/* </div> */}
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
    width: "auto",
    height: "auto",
    color: "#00FFD1",
    textAlign: "center",
    padding: "50px",
    paddingTop: "100px",
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
    backgroundColor: "#232323",
    margin: "15% auto",
    padding: "2em",
    paddingBottom: "10em",
    width: "60%",
  },

  modalHeader: {
    paddingBottom: "4em",
    textAlign: "center",
    color: "#00FFD1",
  },

  modalImg: {
    width: 'auto',
    border: 'none',
  },

  modalExit: {
    border: "1px solid #ADADAD",
    borderRadius: "50%",
    width: "30px",
    padding: ".75em",
    color: "#ADADAD",
    cursor: "pointer",
    fontSize: "10px",
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
