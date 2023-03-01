import React from "react";
import { useNavigate } from "react-router-dom";

function Appointment({ data }) {

  return (
    <>
      <div className="ap_container">
        <p>Reason:{data.reason}</p>
        <p>
          Date:
          {new Date(data.date).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <a
          href={`/owner/editappointment/${data.id}`}
          className="button button_color"
        >Edit</a>
      </div>
    </>
  );
}

export default Appointment;
