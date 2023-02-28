import React from "react";
import "./AboutContent.css";

function AboutContent({ data }) {
  if (Object.keys(data).length !== 0) {
    return (
      <div className="about_container" style={{ position: "absolute" }}>
        <div className="top">
          <div className="title">
            <h3>{data.clinic.name}</h3>
            <div className="links">
              <a href={`/owner/bookappointment`}>Book Appointment</a>
              <a href={`/owner/message`}>Message</a>
            </div>
          </div>
          <div className= "address">
            <span>{data.clinic.location}</span>
            <span>{data.clinic.contact}</span>
          </div>
        </div>
        <hr />
        {data.about.split("\n").map((line) => (
          <p>{line}</p>
        ))}
      </div>
    );
  } else {
    return (
      <div className="about_container" style={{ position: "absolute" }}>
        <p> Select a clinic</p>
      </div>
    );
  }
}

export default AboutContent;
