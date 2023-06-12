import React, { useState } from "react";
import "../styles/Navbar.css";
import logoImg from "../images/logo.svg";
import arrowDownIcon from "../images/icon-arrow-down.svg";
import todoIcon from "../images/icon-todo.svg";
import calendarIcon from "../images/icon-calendar.svg";
import remindersIcon from "../images/icon-reminders.svg";
import planningIcon from "../images/icon-planning.svg";
import hamburgerIcon from "../images/icon-menu.svg";
import closeMenuIcon from "../images/icon-close-menu.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickBtn = () => {
    const menuButton = document.querySelector(".menu-btn");
    menuButton.src = !isOpen ? closeMenuIcon : hamburgerIcon;
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="Navbar">
      <div className="brand">
        <img src={logoImg} alt="logo-brand" />
      </div>
      <div className={isOpen ? "brand-item open" : "brand-item"}>
        <ul className="brand-inform">
          <li className="dropdown-menu">
            <span className="dropdown-btn">
              Features
              <div className="icon-arrow">
                <img src={arrowDownIcon} alt="arrow-down" />
              </div>
            </span>
            <div className="menu shift-left">
              <ul className="real-menu">
                <li className="sub-menu link">
                  <a href="#">
                    <div className="icon">
                      <img src={todoIcon} alt="todo-list" />
                    </div>
                    Todo List
                  </a>
                </li>
                <li className="sub-menu link">
                  <a href="#">
                    <div className="icon">
                      <img src={calendarIcon} alt="calendar" />
                    </div>
                    Calendar
                  </a>
                </li>
                <li className="sub-menu link">
                  <a href="#">
                    <div className="icon">
                      <img src={remindersIcon} alt="reminders" />
                    </div>
                    Reminders
                  </a>
                </li>
                <li className="sub-menu link">
                  <a href="#">
                    <div className="icon">
                      <img src={planningIcon} alt="planning" />
                    </div>
                    Planning
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="dropdown-menu">
            <span className="dropdown-btn">
              Company
              <div className="icon-arrow">
                <img src={arrowDownIcon} alt="arrow-down" />
              </div>
            </span>
            <div className="menu shift-right">
              <ul className="real-menu">
                <li className="sub-menu link">
                  <a href="#">History</a>
                </li>
                <li className="sub-menu link">
                  <a href="#">Our Team</a>
                </li>
                <li className="sub-menu link">
                  <a href="#">Blog</a>
                </li>
                <li className="sub-menu link empty">
                  <a href="#">BLANK</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="link">
            <a href="#">Careers</a>
          </li>
          <li className="link">
            <a href="#">About</a>
          </li>
        </ul>
        <ul className="brand-authen">
          <li className="link">
            <a href="#">Login</a>
          </li>
          <li className="link btn">
            <a href="#">Register</a>
          </li>
        </ul>
      </div>
      <button className="hamburger-btn" onClick={handleClickBtn}>
        <img className="menu-btn" src={hamburgerIcon} alt="hamburger-btn" />
      </button>
      <div className="dark-background"></div>
    </nav>
  );
};

export default Navbar;
