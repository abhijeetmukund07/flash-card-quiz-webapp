import React from "react";
import "./AdminSideBar.css";
import { MdAddCircleOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import { NavLink } from "react-router-dom";

function ClientSidebar() {
  return (
    <div className="client-sidebar">
      <div>
        <div className="client-sidebar-options">
          <NavLink to="add" className="client-sidebar-option">
            <MdAddCircleOutline fontSize={30} />
            <p className="lead">Add Card</p>
          </NavLink>

          <NavLink to={`/admin`} className="client-sidebar-option">
            <FiEdit fontSize={30} />
            <p className="lead">Edit Cards</p>
          </NavLink>

          <NavLink to={`/admin`} className="client-sidebar-option">
            <MdDeleteOutline fontSize={30} />
            <p className="lead">Delete Cards</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ClientSidebar;
