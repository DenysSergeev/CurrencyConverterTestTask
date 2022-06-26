import React from "react";
//import { Link } from "react-router-dom";
import "./Header.css";
import Nav from "../Nav";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <header className="header">
        <div className="main-header">
          <div className="container">
            <h1 className="site-title">Currency converter</h1>
          </div>
        </div>
        <Nav />
      </header>
      );
  }
        
}

export default Header;