import React from "react";
import { FaFacebookF,FaInstagram,FaLinkedin,FaTwitter,FaYoutube,FaQuora,FaBus,FaRegClock,FaLocationArrow} from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <img src={`./images/footer.png`} />
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-contact">
            <h3>Contact us</h3>
            <p>Address: amet, consetetur sadipscing elitr, sed diam </p>
            <p>Email id:eirmod tempor invidunt ut labore et dolore</p>
            <p>Phone no: 123456789</p>
          </div>
          <div className="footer-contact">
            <h3>Follow us</h3>
            <div className="social">
            <span><FaFacebookF/></span>
            <span><FaLinkedin/></span>
            <span><FaInstagram/></span>
            <span><FaTwitter/></span>
            <span><FaYoutube/></span>
            <span><FaQuora/></span>
            </div>
          </div>
          <div className="footer-contact footer-address">
            <h3>Head Office</h3>
            <p>
              <span className="loaction"><FaLocationArrow/></span>Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
            <p>
              <span><FaRegClock/></span>Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr
            </p>
            <p>
              <span><FaRegClock/></span>Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr
            </p>
            <p>
              <span><FaBus/></span>Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr
            </p>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
