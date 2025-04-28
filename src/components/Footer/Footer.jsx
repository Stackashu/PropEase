import React, { useState } from 'react';
import './Footer.css';

const footerData = [
  {
    title: "Information",
    items: ["Mobile App", "Investors", "Members", "Be Our Member"],
  },
  {
    title: "Help For You",
    items: ["Privacy Policy", "Terms & Conditions", "Contact Us"],
  },
  {
    title: "Social Media",
    items: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
  },
  {
    title: "Services",
    items: ["Property Listing And Searches", "Real Estate Consulting", "Property Management"],
  },
];

const Footer = () => {
  const [openTray, setOpenTray] = useState(null);

  const handleToggle = (index) => {
    setOpenTray(openTray === index ? null : index);
  };

  return (
    <div className="box">
      <div className="up">
        <div className="left">
          <h1>PropEase</h1>
          <div className="miniPoints">
            {footerData.map((section, index) => (
              <ul key={index} className={`${openTray === index ? 'notesopen' : ''} notes`}>
                <li onClick={() =>{handleToggle(index)} } className="openertray">
                  <h2>{section.title}</h2>
                  <span className="downarrow" ></span>
                </li>
                {section.items.map((item, idx) => (
                  <li className='innerli' key={idx}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="right">
          <h3>Vision</h3>
          <h4>
            To become a trusted partner in the real estate industry, leveraging technology and expertise to deliver hassle-free property experiences.
          </h4>
        </div>
      </div>

      <div className="down">
        <h3>2025 | www.PropEase.com | All rights reserved</h3>
        <div>
          <img src="./linkedinfooter.png" alt="LinkedIn" />
          <img src="./fbfooter.png" alt="Facebook" />
          <img src="./xfooter.png" alt="X" />
          <img src="./igfooter.png" alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
