import React from "react";
import ContactForm from "../forms/ContactForm";
import "../styles/Contact.css";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contactContainerOne">
        <div className="contactContainerTwo">
          <div className="contact">
            <h1 className="h1">Contact</h1>
            <p className="p2">
              If you have a request or question don’t hesitate to contact me
              with the form below.
            </p>
            <ContactForm />
          </div>
          <div className="findme">
            <h1 className="h1">Find Me</h1>
            <div className="iconContainer">
              <a href="https://github.com/empena" className="circle">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/emilypena/"
                className="circle"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
            <br />
            <br />
            <a href="https://www.youracclaim.com/badges/b8076ad3-3d60-47b2-b439-3d60fbcb26e7/linked_in_profile">
              <img
                alt="badge"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1596426577/Portfolio/badge_o6wbu1.png"
                width="80"
                height="80"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
