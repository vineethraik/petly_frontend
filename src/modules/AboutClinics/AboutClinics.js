import React, { useState} from "react";
import "./AboutClinics.css";

import NavBar from "./../../components/NavBar/NavBar";
import Search from './../../components/Search/Search'
import AboutContent from './components/AboutContent/AboutContent';
import database from './../../database/database'

function AboutClinics() {
    const db =new database();
  const [about, setAbout] = useState({  });

  const updateAbout = (id) => {
    setAbout(db.getClinicAbout(id));
  }

  return (
    <>
      <NavBar type="owner" />
      <div className="clinic_about">
        <div className=" main_box color2">
          <div className="container1">
            <div className="container2">
              <h2>Clinics</h2>
              <div className="searchContainer">
                <Search source="about" updateAbout={updateAbout} />
              </div>
            </div>
            <div className="container3" style={{ position: "relative" }}>
              <AboutContent data={about}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutClinics;
