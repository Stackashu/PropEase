import React from "react";
import "./About.css";
const About = ({scrollToView}) => {
  return (
    <div className="about-out">
      <div className="head-box">
        <h1 className="about-head">About Us</h1>
      </div>

      <div className="about-inn">
        <div className="about-innleft">
          {/* this is for left side photo  */}
          <div></div>
        </div>
        <div className="about-innright">
          <h1>
            PropEase Realty Pvt Ltd is a leading real estate company dedicated
            to providing seamless property solutions. Our mission is to simplify
            the property buying, selling, and renting experience through
            innovative technology and exceptional customer service.
          </h1>
          <div>
            <h2 className="clientnum">
              Client Collaborations
            </h2>
            <h2 className="clientnum2"> 15+</h2>
          </div>
          <button onClick={()=>{scrollToView('Client')}}>
            Explore more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16.586 5.293 9.879a1 1 0 1 1 1.414-1.414L12 13.757l5.293-5.292a1 1 0 0 1 1.414 1.414L12 16.586z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
