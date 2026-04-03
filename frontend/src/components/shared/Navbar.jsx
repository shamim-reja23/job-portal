import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white">
      <div>
        <div className="text-2xl font-bold">
          Job <span className="text-[#f83002]">Portal</span>
        </div>
        <div>
          <ul className="flex font-medium gap-5 items-center">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
