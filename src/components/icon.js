import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" size="1x;"/>;
    case "cross":
      return <FaTimes className="icons" size="1x;" />;
    default:
      return <FaPen className="icons" size="5x;"/>;
  }
};

export default Icon;
