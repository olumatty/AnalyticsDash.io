import React from "react";
import "./Header.css";
import bell_icon from "../Assests/Group 1.jpg";
import profile_image from "../Assests/Naruto-730x535.jpeg";
import { BsFilter, BsJustify} from "react-icons/bs";

const Header = ({Opensidebar}) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={Opensidebar}/>
      </div>
      <div className="input-icons">
        <BsFilter className="icon" />
        <input class="input-field" type="text" placeholder="Filters" />
      </div>

      <div className="header-right">
        <img src={bell_icon} className="bell" alt="" />
        <img src={profile_image} className="profile" alt="" />
        <div className="profile-details">
          <h3>Matthew Olawale</h3>
          <p>olumatty@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
