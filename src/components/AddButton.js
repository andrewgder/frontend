import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/NotesApp add.svg";

const AddButton = () => {
  return (
    <Link to="/note/new" className="floating-button">
      <AddIcon />
    </Link>
  );
};

export default AddButton;
