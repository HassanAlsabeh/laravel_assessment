import React from "react";
import { useNavigate } from "react-router";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor: "white"}}>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="" onClick={() => navigate("/show-employees")}>
              <i class="fa fa-file"></i>
              <span className="nav-text">Employees</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="" onClick={() => navigate("/show-companies")}>
              <i className="	fa fa-list-alt"></i>
              <span className="nav-text">Companies</span>
            </a>
          </li>
          
        </ul>
        <ul className="logout">
          <li onClick={() => {
            // localStorage.removeItem("id")
            // localStorage.removeItem("token")
            // navigate("/")
          }}>
            <a href="#">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
