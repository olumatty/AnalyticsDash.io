import React from "react";
import "./Message.css";
import warren_img from "../Assests/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import Jenny_img from "../Assests/lucas-gouvea-aoEwuEH7YAs-unsplash.jpg";
import robert_img from "../Assests/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import brad_img from "../Assests/charlesdeluvio-kVg2DQTAK7c-unsplash (1).jpg";
import { VscArchive, VscCalendar, VscFlame, VscWindow } from "react-icons/vsc";

const Message = () => {
  return (
    <main className="Message_container">
      <div className="message-display">
        <h3>Recent Messages</h3>
        <h3>Your to-do list</h3>
      </div>
      <div className="Dashboard_display">
        <div className="message-Dashboard">
          <div className="profile-dashboard">
            <img src={warren_img} alt="" />
            <p className="Name">Wade Warren</p>
            <p className="Update">Meeting Scheduled</p>
            <p className="Time">1:32pm</p>
          </div>
          <div className="profile-dashboard">
            <img src={Jenny_img} alt="" />
            <p className="Name">Jenny Wilson</p>
            <p className="Update">Meeting Scheduled</p>
            <p className="Time">2:32pm</p>
          </div>
          <div className="profile-dashboard">
            <img src={robert_img} alt="" />
            <p className="Name">Robert Foxes</p>
            <p className="Update">Meeting Scheduled</p>
            <p className="Time">3:32pm</p>
          </div>
          <div className="profile-dashboard">
            <img src={brad_img} alt="" />
            <p className="Name">Brad Cooper</p>
            <p className="Update">Meeting Scheduled</p>
            <p className="Time">4:32pm</p>
          </div>
        </div>

        <div className="todo-list">
          <div className="to-do-item">
            <div className="icons">
              <VscArchive className="icon" />
            </div>
            <div className="Text">
              <p className="Main">Choose perfect product idea</p>
              <p className="time">Jan 18 at 5:00pm</p>
            </div>
          </div>
          <div className="to-do-item">
            <div className="icons">
              <VscCalendar className="icon" />
            </div>
            <div className="Text">
              <p className="Main">Attend the meeting</p>
              <p className="time">Jan 18 at 6:00pm</p>
            </div>
          </div>
          <div className="to-do-item">
            <div className="icons">
              <VscWindow className="icon" />
            </div>
            <div className="Text">
              <p className="Main">Attend launch program</p>
              <p className="time">Jan 22 at 2:00pm</p>
            </div>
          </div>
          <div className="to-do-item">
            <div className="icons">
              <VscFlame className="icon" />
            </div>
            <div className="Text">
              <p className="Main">Sign a board resolution</p>
              <p className="time">Jan 22 at 7:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Message;
