import React from "react";
import "./Services.css";
const Services = () => {
  const services = [
    { path: "/property.jpeg", name: "Property Listing And Searches" },
    { path: "/realestate.jpeg", name: "Real Estate Consulting" },
    { path: "/propertymangae.jpeg", name: "Porperty Management" },
    { path: "/transaction.jpeg", name: "Transaction Faciliation" },
  ];

  return (
    <div className="service-out">
      <div className="service-inndiv">
        <h1>Services</h1>
      </div>

      <div className="services-box">
        {services.map((ser,idx)=>(
             <div className="ser-outbox" key={idx}>
             <img src={ser.path} alt={ser.name} />
             <div>
               <h1>{ser.name}</h1>
             </div>
           </div>
        ))}
       
      </div>
    </div>
  );
};

export default Services;
