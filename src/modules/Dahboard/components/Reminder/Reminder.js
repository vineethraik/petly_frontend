import React from "react";
import { useNavigate } from "react-router-dom";

function Reminder({ data }) {
  const navigate = useNavigate();

  console.log(data);
  return (
    <>
      <div
        className="event_container"
        onClick={() => navigate(`/owner/pet/event/${data.id}`)}
      >
        <p>Name:{data.name}</p>
        <p>
          Date:
          {new Date(data.date).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        {(data.state === 'Reoccurring')?<p>{`Repeats every ${data.month} months and ${data.day} days`}</p>:null}
      </div>
    </>
  );
}

export default Reminder;
