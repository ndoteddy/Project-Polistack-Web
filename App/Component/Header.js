import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return (
          <div>
              <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                  <div className="container">
                      <Link to='/' className="navbar-brand">POLISTACK</Link>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ml-auto">
                                  <li><Link to='/' className="nav-link">Home</Link></li>
                                  <li><Link to='/Event/Create' className="nav-link">Event</Link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
        );
    }
}