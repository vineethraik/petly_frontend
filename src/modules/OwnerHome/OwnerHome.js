// import {useNavigate} from 'react-router-dom';
import React, {useContext} from 'react';
import {dbContext} from './../../database/databaseContext';
import NavBar from "./../../components/NavBar/NavBar";
import Pet from './components/Pet/Pet'
import "./OwnerHome.css";

function OwnerHome() {
  const db = useContext(dbContext);
  return (
    <>
      <div className="owner_home">
        <NavBar type="owner" />
        <div className="main_box color2">
          <div className="container1">
          <div className="links">
            
          <a href="/owner/addpet">Add Pet</a>
            <a href="/owner/message">Message</a>
            <a href="/owner/bookappointment">Book appointment</a>
            <a href="/owner/clinic/about">About Clinics</a>
          </div>
          <div className="pets">
            <h2>Pets</h2>
            {
                db.getOwnerData(window.localStorage.getItem('email')).data.map(pet => {
                    console.log(pet);
                    return <Pet key={pet.id} pet={pet} />;
                })
            }
          </div>
          <div className="container2">
            <a href="/owner/sharepet" className="sharepet_button button_color">Share Pet</a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerHome;
