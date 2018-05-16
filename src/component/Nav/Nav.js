import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../ducks/reducer";
import "./Nav.css";

const Nav = () => {
  console.log(this.props);
  return (
    <div className="nav-container">
      <nav className="nav">
        <Link to="/dashboard">
          <button> Home</button>
        </Link>
        <Link to="/post/:postid">
          <button> New Post</button>
        </Link>
        <Link to="/">
          <button> Logout</button>
        </Link>
      </nav>
    </div>
  );
};
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUser })(Nav);
