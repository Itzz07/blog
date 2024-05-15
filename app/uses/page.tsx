import {
  FaCamera,
  FaVideo,
  FaImage,
  FaMusic,
  // FaSettings,
} from "react-icons/fa";
import React from "react";
 "./../globals.css";

export default function Uses() {
  return (
    <div className="container p-32">
      <h1>Users Page</h1>
      {/* <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-gray-200 p-4 flex flex-wrap justify-content-space-between">
            <FaCamera className="text-lg text-gray-600" />
            <FaVideo className="text-lg text-gray-600 mx-4" />
            <FaImage className="text-lg text-gray-600" />
            <FaMusic className="text-lg text-gray-600 mx-4" />
            <FaSettings className="text-lg text-gray-600" />
          </div>
          <p className="text-lg text-gray-800 font-bold">MENU</p>
        </div>
      </div> */}
      <div className=" flex justify-center items-center">
        <div className="menu-container">
          <div className="menu-icon" style={{ transform: "rotate(0deg)" }}>
            Icon 1
          </div>
          <div className="menu-icon" style={{ transform: "rotate(72deg)" }}>
            Icon 2
          </div>
          <div className="menu-icon" style={{ transform: "rotate(144deg)" }}>
            Icon 3
          </div>
          <div className="menu-icon" style={{}}>
            Icon 4
          </div>
          <div className="menu-icon" style={{}}>
            Icon 5
          </div>
          <div className="menu-text">MENU</div>
        </div>
      </div>
    </div>
  );
}
