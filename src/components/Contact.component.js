import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import {
  contact,
  contact_name,
  contact_input,
  contact_information,
} from "../styles/contact.module.css";

const host = "http://localhost:8000";
const email = "gerry900908@gmail.com";

const Contact = () => {
  return (
    <div className={contact}>
      <h3>Kapcsolat</h3>
      <div>
        <form action={`https://formsubmit.co/${email}`} method="POST">
          {/* after submission, move to an alternative page */}
          <input type="hidden" name="_next" value={`${host}/contact/thanks/`} />
          <div className={contact_name}>
            <div className={contact_input}>
              <input type="text" name="csaladnev" id="csaladnev" required />
              <label for="csaladnev">Családnév</label>
            </div>
            <div className={contact_input}>
              <input type="text" name="keresztnev" id="keresztnev" required />
              <label for="keresztnev">Keresztnév</label>
            </div>
          </div>
          <div className={contact_input}>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=""
            />
            <label for="email">Email</label>
          </div>
          <div className={contact_input}>
            <input type="tel" name="telefon" id="telefon" required />
            <label for="telefon">Telefon</label>
          </div>
          <div className={contact_input}>
            <textarea
              name="uzenet"
              id="uzenet"
              placeholder="Üzenet"
              required
            ></textarea>
          </div>
          <input type="submit" value="Küld" />
        </form>
        <div className={contact_information}>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>cím</p>
            <p>1215 Bp. Szép utca 1</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <p>telefon</p>
            <p>+36 30/123-4567</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>email</p>
            <p>klaudiusz@info.hu</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGlobe} />
            <p>weboldal</p>
            <p>klaudiusz.hu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
