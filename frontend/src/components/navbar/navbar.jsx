import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expanded-sm">
      <div className="branding mx-3">
        <h1>Flash Study</h1>
      </div>

      <div className="admin-login ml-auto mx-3">
        <button className="btn btn-primary">Admin Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
