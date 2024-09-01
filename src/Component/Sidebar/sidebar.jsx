import { BiSolidReport } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { SiGoogleanalytics } from "react-icons/si";
import { SlDiamond } from "react-icons/sl";
import './sidebar.css';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-logo">
          <SlDiamond className="icon_header" />
          DIAMOND
        </div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href=" ">
            <GoHome className="icon" id ="icons" />
            Home
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href=" ">
            <BsPeopleFill className="icon" id ="icons" />
            Customer
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href=" ">
            <SiGoogleanalytics className="icon" />
            Analytics
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href=" ">
            <BiSolidReport className="icon" />
            Reports
          </a>
        </li>
      </ul>

      <ul className="sidebar-downlist">
        <li className="sidebar-downlist-item">
          <a href=" ">
            <FiSettings className="icon" id ="icons" />
            Setting
          </a>
        </li>

        <li className="sidebar-downlist-item">
          <a href=" ">
            <HiOutlineLogout className="icon" id ="icons" />
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
