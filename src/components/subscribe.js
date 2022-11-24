import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

const subscribe = () => {
  // const [location, setLocation] = useState("");

  return (
    <div className="container">
      <div className="subscribe">
        <div className="subscribe-left">
          <h3>Subscribe</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <input type="text" id="address" placeholder="Enter your Email Address" />
          <Link to="/about" className="home-btn">
            Subscribe Now
            <span>
              <FiPlay />
            </span>
          </Link>
        </div>
        <div>
          <img src={`./images/subscribe.png`} />
        </div>
      </div>
    </div>
  );
};

export default subscribe;
