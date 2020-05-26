import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

const Home = () => {
  return (
    <>
      <Navbar2 />
      <div style={styles.header}>
        <h1>Coder & Designer</h1>
        <Link to="/design">
          <button style={styles.space}>DESIGN</button>
        </Link>
        <Link to="/code">
          <button style={styles.space}>CODE</button>
        </Link>
      </div>
    </>
  );
};

export default Home;

const styles = {
  header: {
    backgroundColor: "#232323",
    position: "fixed",
    width: "100%",
    height: "100%",
    color: "#00FFD1",
    fontSize: "30px",
    textAlign: "center",
    marginTop: "1.5em",
    paddingTop: "200px",
  },
  space: {
    margin: "20px",
  },
};
