import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faArrowLeft,
  faChartLine,
  faBook,
  faHandPointUp,
  faCreditCard,
  faImage,
  faUsersViewfinder,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "../App.css";
import { Link } from "react-router-dom";

const ListItem = ({ icon, title, right }) => (
  <li className=" py-3 d-flex justify-content-between align-items-center common-li" >
    <div className="card-body d-flex">
      <FontAwesomeIcon
        icon={icon}
        className="fs-1 me-4 text-center card-body-icon"
      />
      <h5 className="card-title fs-4">{title}</h5>
    </div>
    <span className="rounded-pill">
      <FontAwesomeIcon className="  fw-bolder  fs-3 " icon={right} />
    </span>
  </li>
);

const Navbar = () => {
  const clicked = () => {
    console.log("clicked");
  };
  const outerbox = () => {
    console.log("outerbox");
  };
  return (
    <div className="bg-black container-fluid position-relative">
      <div className="container bg-black d-flex flex-column align-content-center justify-content-center p-0">
        {/* Navbar */}
        <nav className="navbar container navbar-expand-lg fixed-top ">
          <div className="container-fluid text-primary bg-black shadow">
            <a className="navbar-brand fs-4 text py-2 " href="#">
              <FontAwesomeIcon
                icon={faBars}
                className="text-light fs-1 text-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              />
            </a>
            <a className="navbar-brand fs-4 text m-0 " href="#">
              <FontAwesomeIcon icon={faBell} className="text-light fs-1" />
            </a>
          </div>
        </nav>
        {/* Navbar */}

        {/* Offcanvas structure */}
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header bg-black position-relative ">
            <FontAwesomeIcon
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="fs-1 position-absolute offcanvas-icon text-white"
              icon={faArrowLeft}
            />
            <div className="logo container d-flex justify-content-center align-content-lg-center flex-column mt-5 mb-5">
              <img
                src="https://img.freepik.com/free-vector/crash-test-dummy-car-seat-grid-background_1308-75255.jpg"
                alt="Dummy Logo"
              />
              <h2 className="text-center mt-2 text-white">Saurab</h2>
              <button
                type="button"
                className="btn bg-light fs-6 text-center w-100 rounded-4 text-nowrap w-auto"
              >
                Change Password
              </button>
            </div>
          </div>
          <div className="offcanvas-body p-0 ">
        
              <ul className="border-white p-0 ">
            <Link to="/">
            <ListItem
                  icon={faChartLine}
                  title="Dashboard"
                  right={faAngleRight}
                /></Link>
                <Link to="/transaction">
                  <ListItem
                    icon={faBook}
                    title="All Transactions"
                    right={faAngleRight}
                  />
                </Link>
                <Link to="/lead">
                <ListItem
                  icon={faHandPointUp}
                  title="Lead"
                  right={faAngleRight}
                />       </Link>
                <ListItem
                  icon={faCreditCard}
                  title="Sitewise Report"
                  right={faAngleRight}
                />
                <ListItem
                  icon={faImage}
                  title="Payout Screenshot"
                  right={faAngleRight}
                />
                <ListItem
                  icon={faUsersViewfinder}
                  title="Promotional Poster"
                  right={faAngleRight}
                />
              </ul>
           
          </div>
        </div>
        {/* Offcanvas structure */}

        {/* Card-section */}

        {/* Card-section */}
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>

      {/* Offcanvas Script */}
    </div>
  );
};

export default Navbar;
