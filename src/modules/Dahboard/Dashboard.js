import React, { useState, useEffect, useId,useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./Dashboard.css";

import {dbContext} from "./../../database/databaseContext";
import {eventConstants} from './../../constants/constants'

import NavBar from "./../../components/NavBar/NavBar";
import Input from "./../../components/Input/Input";
import AppointmentHistory from "./components/AppointmentHistory/AppointmentHistory";
import Reminder from "./components/Reminder/Reminder";
import Appointment from "./components/Appointment/Appointment";

function Dashboard() {
  const { id } = useParams();
  const navigate =useNavigate();
  const db = useContext(dbContext);

  const nameInputId = useId();
  const typeInputId = useId();
  const dateInputId = useId();
  const monthInputId = useId();
  const dayInputId = useId();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [errors, setErrors] = useState({});

  const [aptHistory, setAptHistory] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [reoccurringReminders, setReoccurringReminders] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAptHistory(db.getPetAppointmentHistory(id));
  }, [id]);

  useEffect(() => {
    setReminders(db.getPetOnetimeEvents(id));
  }, [id]);

  useEffect(() => {
    setReoccurringReminders(db.getPetReoccurringEvents(id));
  }, [id]);

  useEffect(() => {
    setAppointments(db.getPetAppointments(id));
  }, [id]);

  const handleSubmit = () => {
    let errs = {};
    if(name === ''){
      errs.name = "name cant be empty";
    }

    if(date === ''){
      errs.date = "date cant be empty";
    }

    if(((30*month + day) < 7)&&(type === eventConstants.state.REOCCURRING)){
      errs.month = "Repat time cant be less then 7";
    }


    if(Object.keys(errs).length !== 0){
      setErrors(errs)
      console.log(errs);
    }else{
      // navigate(`/owner/dashboard/${id}`);
      window.location.reload();
    }
  }

  return (
    <>
      <NavBar type="owner" />
      <div className="owner_dashboard color1">
        <div className="main_box color2">
          <h2>Event dashboard</h2>
          <div className="container1">
            <div className="container2">
              <h3>Appointment history</h3>
              <div className="overflow_container">
                {aptHistory.map((apth) => (
                  <AppointmentHistory key={apth.id} data={apth} />
                ))}
              </div>
            </div>
            <div className="container2">
              <div className="container3">
                <h3>Remainders</h3>
                <div className="overflow_container">
                  {reminders.map((rem) => (
                    <Reminder key={rem.id} data={rem} />
                  ))}
                </div>
              </div>
              <hr />
              <div className="container3">
                <h3>Appointments</h3>
                <div className="overflow_container">
                  {appointments.map((apt) => (
                    <Appointment key={apt.id} data={apt} />
                  ))}
                </div>
              </div>
            </div>
            <div className="container2">
              <h3>Add Remainders</h3>
              <div className="form">
                <Input
                  id={nameInputId}
                  label={"Name:"}
                  value={name}
                  setOnChange={setName}
                  error={errors.name}
                  type="name"
                />
                <div className="input_root">
                  <div className="input">
                    <label htmlFor={typeInputId}>Reminder Type:</label>
                    <select
                      id={typeInputId}
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                      name="SelectedType"
                    >
                      <option value="">Select type</option>
                      <option value={eventConstants.state.ONETIME}>One time</option>
                      <option value={eventConstants.state.REOCCURRING}>Reoccurring</option>
                    </select>
                  </div>
                </div>
                {((type !== '') && <>
                <Input
                  id={date}
                  label={(type === eventConstants.state.ONETIME)? 'Date:':'Start Date:' }
                  value={date}
                  setOnChange={setDate}
                  error={errors.date}
                  type="date"
                />
                {((type === eventConstants.state.REOCCURRING)&&<>
                <span>Repeats After:</span>
                <Input
                  id={month}
                  className={'daymonth_class'}
                  label={' Months' }
                  value={month}
                  setOnChange={setMonth}
                  error={errors.month}
                  type="number"
                />
                <Input
                  id={day}
                  label={' Days' }
                  className={'daymonth_class'}
                  value={day}
                  setOnChange={setDay}
                  error={errors.day}
                  type="number"
                />
                </>)}
                <div className="input_root button ">
            <button onClick={handleSubmit} type="button" className="button button_color" >Add event</button>
          </div>
                </>)}
              </div>
              <h3>Reoccuring Remainders</h3>
              {reoccurringReminders.map((rem) => (
                <Reminder key={rem.id} data={rem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
