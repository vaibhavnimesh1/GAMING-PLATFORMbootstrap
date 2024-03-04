import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { Link } from "react-router-dom";

const DashboardItem = ({ number, icon }) => (
  <div className="col-4  bg-light card  py-lg-4 px-0  py-sm-3 ">
    <p className=" text-center card-logo">
      <FontAwesomeIcon icon={icon} />
    </p>
    <p className="card-title text-center py-2 ">Dashboard </p>
  </div>
);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Dashboard = () => (
  <>
    {/* Navbar */}
    <div className="logo container d-flex justify-content-center align-content-lg-center flex-column mt-5 mb-5">
      <img
        src="https://img.freepik.com/free-vector/crash-test-dummy-car-seat-grid-background_1308-75255.jpg"
        alt="Dummy Logo"
      />
      <h1 className="text-center mt-2 text-light"> <Link to="/">saurab</Link></h1>
    </div>
    {/* Navbar */}
    <div className="container bg-white rounded-4 bg-body-secondary custom-padding">
      <div className="row p-2 d-flex col justify-content-around rounded-3 position-relative card-box ">
        {/* outside box */}
        <div className="row container-fluid rounded-1  text-center border-1 border-dark pb-3 bg-light position-absolute outside-box">
          <div className="col">
            <h3 className="mt-2 fw-bolder ">
              <Link to="/">Today</Link>
            </h3>
            <p className=" fw-bold py-1">Date</p>
            <div className="bg-body-secondary rounded-2 p-1">
              <div className="col container">
                <ul className="p-0 d-flex flex-column gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <li
                      key={item}
                      className="d-flex align-content-center justify-content-between "
                    >
                      <span>Deposit</span>
                      <span>84126515</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* outside box */}
        {array.map((item) => (
          <DashboardItem key={item} number={item} icon={faChartLine} />
        ))}
      </div>
    </div>
  </>
);

export default Dashboard;
