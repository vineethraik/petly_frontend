import React, { useState, useEffect, useId } from "react";
import Input from "./../Input/Input";
import database from "./../../database/database";

function Search({ source, updateAbout }) {
  const [searchString, setSearchString] = useState("");
  const [userList, setUserList] = useState([]);

  const searchStringInputId = useId();

  useEffect(() => {
    let db = new database();
    setUserList(db.getSearchResults(searchString, "about"));
  }, [searchString]);

  if (source === "about") {
    return (
      <>
        <div>
          {" "}
          <label htmlFor={searchStringInputId}>Search:</label>
          <input
            id={searchStringInputId}
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            type="text"
          />
        </div>
        <div className="">
          {userList.map((user) => (
            <button
              className="button"
              key={user.id}
              onClick={() => { 
                updateAbout(user.id);
              }}
            >
              {user.name}
            </button>
          ))}
        </div>
      </>
    );
  } else {
  }
}

export default Search;
