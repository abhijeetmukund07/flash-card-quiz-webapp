// import React from "react";
// import "./CategoryNavs.css";
// function CategoryNavs() {
//   return (
//     <div className="category-selector-bar p-3">
//       <ul className="nav nav-pills">
//         <li className="nav-item">
//           <button className="nav-link active" aria-current="page" href="#">
//             Active
//           </button>
//         </li>
//         <li className="nav-item">
//           <button className="nav-link" href="#">
//             Link
//           </button>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Link
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
//             Disabled
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default CategoryNavs;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CategoryNavs.css";

function CategoryNavs() {
  // Dummy categories data
  const categories = [
    { id: 1, name: "Category 1", path: "/category1" },
    { id: 2, name: "Category 2", path: "/category2" },
    { id: 3, name: "Category 3", path: "/category3" },
    { id: 4, name: "Category 4", path: "/category4" },
    { id: 5, name: "Category 5", path: "/category5" },
    { id: 6, name: "Category 6", path: "/category6" },
    { id: 7, name: "Category 7", path: "/category7" },
    { id: 8, name: "Category 8", path: "/category8" },
    { id: 9, name: "Category 9", path: "/category9" },
    { id: 11, name: "Category 10", path: "/category10" },
    { id: 12, name: "Category 11", path: "/category11" },
    { id: 13, name: "Category 12", path: "/category12" },
    { id: 14, name: "Category 13", path: "/category13" },
  ];

  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(location.pathname);

  return (
    <div className="category-selector-bar p-3">
      <ul className="nav nav-pills">
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <Link
              to={category.path}
              className={`nav-link ${activeCategory === category.path ? "active" : ""}`}
              onClick={() => setActiveCategory(category.path)}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryNavs;
