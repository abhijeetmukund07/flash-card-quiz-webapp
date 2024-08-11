import React from "react";
import "./CategoryNavs.css";
function CategoryNavs() {
  return (
    <div className="category-selector-bar p-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" href="#">
            Active
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="#">
            Link
          </button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CategoryNavs;
