import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Event.css";
import NavBar from "./../../components/NavBar/NavBar";
import { eventConstants } from "./../../constants/constants";
import { dbContext } from "./../../database/databaseContext";

function Event() {
  const { id } = useParams();
  const db = useContext(dbContext);

  const [data, setData] = useState({});

  useEffect(() => {
    setData(db.getEvent(id));
    console.log(db.getEvent(id));
  }, [id]);

  return (
    <>
      <NavBar type="owner" />
      <div className="owner_event color1">
        <div className="main_box color2">
          {data.state === eventConstants.state.COMPLETED ? (
            <h2>Appointment History</h2>
          ) : data.state === eventConstants.state.ONETIME ? (
            <h2>Reminder</h2>
          ) : (
            <h2>Reoccuring Reminder</h2>
          )}
          <div className="details">
            {data.state === eventConstants.state.COMPLETED ? (
              <>
                <p>Name:{data.name}</p>
                <p>Status:{data.status}</p>
                <div className="container1">
                  <div className="container2">
                    <p>Clinic:{data.edata.clinic.name}</p>
                    <p>Location:{data.edata.clinic.location}</p>
                    <p>Contact:{data.edata.clinic.contact}</p>
                  </div>
                  <div className="container2">
                    <p>slot:{data.edata.slot.name}</p>
                    <p>date:{data.edata.slot.date}</p>
                    <p>owner:{data.edata.slot.owner}</p>
                  </div>
                </div>
                <div className="button_to">
                <button className="button button_color" onClick={()=>{window.history.back()}}>delete</button>
                  </div>
              </>
            ) : (
              <>
                <p>Reminder for:{data.name}</p>
                <p>
                  Date:
                  {new Date(data.date).toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p>
                  Created at:
                  {new Date(data.created_at).toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>

                {(data.state === eventConstants.state.ONETIME)?
                ((data.parent_id === null)?
                <p>Created by:{'User' }</p>
                :
                <>
                <p>Created by:{ `Reoccuring Reminder(${data.name})`}</p>
                <p>Note:delete parent reminder to delete this reminder</p>
                </>
                )
                :<>
                <p>Repeats Every:{`${data.month} months and ${data.day} days`}</p>
                <div className="button_to">
                <button className="button button_color" onClick={()=>{window.history.back()}}>delete</button>
                  </div>
                </>
                }

              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
