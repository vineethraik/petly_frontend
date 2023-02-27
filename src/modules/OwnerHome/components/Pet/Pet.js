import React from "react";
import './Pet.css'

function Pet({ pet }) {
  return (
    <div className="pet color1">
      <div>
        Pet:
        {pet.pet_type}
      </div>
      <div>
        Name:
        {pet.name}
      </div>
      <div>
        Breed:
        {pet.breed}
      </div>
      <div>
        Last Vacinated On:
        {(new Date(pet.last_vaccinated_on).toLocaleString())}
      </div>
      <div className="p_links">
        <a href={`/owner/pet/${pet.id}`} className="edit button_color">
          Edit
        </a>
        <a href={`/owner/dashboard/${pet.id}`} className="events button_color">
          Events
        </a>
      </div>
    </div>
  );
}


export default Pet;