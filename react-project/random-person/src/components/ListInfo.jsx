import React from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaLock,
  FaLocationArrow,
  FaMailBulk,
  FaCalendar,
} from "react-icons/fa";

const ListInfo = ({
  getName,
  getEmail,
  getAge,
  getLocation,
  getPhone,
  getPassword,
}) => {
  return (
    <div className="list-info">
      <button className="icon">
        <FaUser onMouseEnter={getName} size="50" />
      </button>
      <button className="icon">
        <FaMailBulk onMouseEnter={getEmail} size="50" />
      </button>
      <button className="icon">
        <FaCalendar onMouseEnter={getAge} size="50" />
      </button>
      <button className="icon">
        <FaLocationArrow onMouseEnter={getLocation} size="50" />
      </button>
      <button className="icon">
        <FaPhoneAlt onMouseEnter={getPhone} size="50" />
      </button>
      <button className="icon">
        <FaLock onMouseEnter={getPassword} size="50" />
      </button>
    </div>
  );
};
export default ListInfo;
