import React, { useState } from "react";
import "../styles/Portfolio.css";

const Electra = () => {
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
              <h1 style={styles.h1}>Electra Type Specimen</h1>
            </div>
            <div style={styles.modalImg}>
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340746/Portfolio/Electra_1_jt1qic.jpg"
              />
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340735/Portfolio/Electra_2_kygaob.png"
              />
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340735/Portfolio/Electra_3_xzfj17.png"
              />
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340735/Portfolio/Electra_4_aidrj3.png"
              />
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340735/Portfolio/Electra_5_fjkrgb.png"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="column">
      {showForm && <Modal toggleForm={setShowForm} />}
      <img
        onClick={() => setShowForm(!showForm)}
        alt="Test"
        src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340735/Portfolio/Electra_thumb_lefdtv.jpg"
      />
    </div>
  );
};

export default Electra;

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
    width: "auto",
    border: "none",
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
