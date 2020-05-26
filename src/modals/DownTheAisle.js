import React, {useState} from 'react';
import "../styles/Portfolio.css";

const DownTheAisle = () => {

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
                <h1 style={styles.h1}>Down The Aisle Package Design</h1>
              </div>
              <div style={styles.modalImg}>
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340817/Portfolio/DownTheAisle_1_hanugk.jpg"
              />
              <img
                alt="Test"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340819/Portfolio/DownTheAisle_2_lwm8ok.jpg"
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
      src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589340814/Portfolio/DownTheAisle_thumb_eihcbb.jpg"
    />  
    </div>
      );
    };

    export default DownTheAisle;

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