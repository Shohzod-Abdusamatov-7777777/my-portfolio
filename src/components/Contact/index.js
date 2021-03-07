import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactElements,
  ContactList,
  ContactImg,
} from "./ContactElements";

const Contact = () => {
  return (
    <React.Fragment>
      <ContactContainer>
        <ContactWrapper>
          <ContactTitle>
            𝓒𝓞𝓝𝓣𝓐𝓒𝓣𝓢 𝓜𝓔<span></span>
          </ContactTitle>
          <ContactElements>
            <ContactImg data-aos="zoom-in"></ContactImg>
            <ContactList>
              <div>
                <div className="contact">
                  <h1>📧 E-MAIL:&nbsp;</h1>
                  <a href="mailto:shohzodabdusamatov10@gmail.com">
                    shohzodabdusamatov10@gmail.com
                  </a>
                </div>
                <div className="contact">
                  <h1>☎️ PHONE:&nbsp;</h1>
                  <a href="tel:+998915935121">+998915935121</a>
                </div>
              </div>
            </ContactList>

            <ul>
              <li data-aos="zoom-in">
                <a
                  href="https://www.facebook.com/shohzod.abdusamatov.18"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <span> Facebook</span>
                </a>
              </li>
              <li data-aos="zoom-in">
                <a
                  href="https://t.me/none777777777"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-telegram" aria-hidden="true"></i>
                  <span> Telegram</span>
                </a>
              </li>
              <li data-aos="zoom-in">
                <a
                  href="https://instagram.com/shohzod_abdusamatov?igshid=1oaexa6lq2ile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <span> Instagram</span>
                </a>
              </li>
            </ul>
          </ContactElements>
          {/* social media link */}

          {/* map and form */}
          <div className="row" style={{ marginTop: "0.5rem" }}>
            {/* google map */}
            <div className="col-12 col-md-6">
              <div className="map" data-aos="zoom-in-right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d312067.1128815996!2d67.45000364230519!3d39.9306181722542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d39.9379893!2d67.56330009999999!5e1!3m2!1suz!2s!4v1611378987420!5m2!1suz!2s"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  style={{ border: "0", width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
            {/* from group */}
            <div className="col-12 col-md-6">
              <form className="h-100 w-100 " data-aos="zoom-in-left">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="NAME"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="EMAIL"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="textarea"
                    rows="5"
                    defaultValue="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning w-100 mt-2 font-weight-bold"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </ContactWrapper>
      </ContactContainer>
    </React.Fragment>
  );
};

export default Contact;
