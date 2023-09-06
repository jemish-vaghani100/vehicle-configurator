import React, { useState } from "react";

const Seatbelt = () => {
  const [compname, setCompname] = useState("Seatbelt");
  const [types, setTypes] = useState([
    "seat belt v1", "seat belt v2", "seat belt v3" , "seat belt v4"
  ]);

  return (
    <>
    <br/>
    <br/>
      <label for="seatbelt" style={{marginRight:30}}>{compname}:</label>

      <select name="seatbelttypes" id="seatbel" >
        {types.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </>
  );
};

export default Seatbelt;
