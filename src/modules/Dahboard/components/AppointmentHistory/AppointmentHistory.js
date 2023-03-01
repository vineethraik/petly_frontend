import React from "react";
import {useNavigate} from 'react-router-dom';

function AppointmentHistory({ data }) {
    const navigate =useNavigate();
  return (
    <>
      <div className="event_container" onClick={()=>navigate(`/owner/pet/event/${data.id}`)}>
      <p>Name:{data.name}</p>
      <p>Date:{new Date(data.date).toLocaleDateString(
  'en-gb',
  {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
) }</p>
      <p>Status:{data.status}</p>
      </div>
    </>
  );
}

export default AppointmentHistory;
