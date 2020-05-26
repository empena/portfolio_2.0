import React, {useState} from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../styles/Portfolio.css";

const LilyBrideDesign = () => {

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
                <h1 style={styles.h1}>Lily Bride Design</h1>
                <p style={styles.p2}>Logo and Brand Design by Emily Pena</p>
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
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589338132/Portfolio/LilyBrideDesign1_rwwxex.png"
              />
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589338119/Portfolio/LilyBrideDesign2_qj3iv1.png"
              />
              </div>
            </div>
          </div>
        </>
    )
  }

  return (
    <div className="column">
    {showForm && <Modal toggleForm={setShowForm} />}
    <img
                  onClick={() => setShowForm(!showForm)}
                  alt="Test"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589338121/Portfolio/LilyBrideDesign_thumb_g6xuhb.jpg"
                /> 
    </div>
      );
    };

    export default LilyBrideDesign;

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