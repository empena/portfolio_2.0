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
              If you have a request or question don’t hesitate to contact me with the form below.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
