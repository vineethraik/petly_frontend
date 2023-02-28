import {useParams} from "react-router-dom";
import moment from 'moment';

import React, { useState, useId, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditPet.css";
import NavBar from "./../../components/NavBar/NavBar";
import Input from "./../../components/Input/Input";
import database from './../../database/database'

function EditPet() {
  const [petType, setPetType] = useState("Dog");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [lastVaccinatedOn, setLastVaccinatedOn] = useState("");
  const [helthRecord, setHelthRecord] = useState(undefined);
  const [defaultAccess, setDefaultAccess] = useState(true);
  const [errors, setErrors] = useState({});

  const nameInputId = useId();
  const typeInputId = useId();
  const breedInputId = useId();
  const lastVaccinatedOnInputId = useId();
  const healthRecordInputId = useId();
  const defaultAccessInputId = useId();

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    const db =new database();
    let pet = db.getPetData(id);
    let date = moment(Date.parse(pet.last_vaccinated_on)).format('YYYY-MM-DD');
    setPetType(pet.pet_type);
    setBreed(pet.breed);
    setDefaultAccess(pet.default_access);
    setName(pet.name);
    setLastVaccinatedOn(date);
  },[id]);

  const handleSubmit = (e) => {
    let errs = {};
    if (name === "") {
      errs.name = "name cant be empty";
    }

    if (petType === "") {
      errs.petType = "pet Type cant be empty";
    }

    if (lastVaccinatedOn === "") {
      errs.lastVaccinatedOn = "last Vaccinated On cant be empty";
    }

    if (Object.keys(errs).length !== 0) {
      setErrors(errs);
      console.log(errs);
    } else {
      console.log("owner");
      navigate("/owner");
    }
  };

  return (
    <>
      <NavBar type="owner" />
      <div className="ownerAddpet">
        <div className=" main_box color2">
          <h2>Edit Pet</h2>
          <div className="input_group">
            <div className="input_root">
              <div className="input">
                <label htmlFor={typeInputId}>Pet:</label>
                <select
                  id={typeInputId}
                  defaultValue={petType}
                  onChange={(e) => {
                    setPetType(e.target.value);
                  }}
                  name="Pet"
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                </select>
              </div>
            </div>
            <Input
              id={breedInputId}
              label={"Breed:"}
              value={breed}
              setOnChange={setBreed}
              error={errors.breed}
              type="text"
            />
          </div>
          <Input
            id={nameInputId}
            label={"Name:"}
            value={name}
            setOnChange={setName}
            error={errors.name}
            type="name"
            className="name"
          />
          <Input
            id={lastVaccinatedOnInputId}
            label={"Last vacinated on:"}
            value={lastVaccinatedOn}
            setOnChange={setLastVaccinatedOn}
            error={errors.lastVaccinatedOn}
            type="date"
            className="date"
          />
          <Input
            id={healthRecordInputId}
            label={"Health Recrd:"}
            value={helthRecord}
            setOnChange={setHelthRecord}
            error={errors.helthRecord}
            type="file"
            className="healthRecord"
          />
          <Input
            id={defaultAccessInputId}
            label={"Defaoult Access to Pet record:"}
            value={defaultAccess}
            setOnChange={setDefaultAccess}
            error={errors.defaultAccess}
            type="checkbox"
            className="defaultAccess"
          />
          <div className="input_root button ">
            <button
              onClick={handleSubmit}
              type="button"
              className="button button_color"
            >
              Edit Pet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPet;
