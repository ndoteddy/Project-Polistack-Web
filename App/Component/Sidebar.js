import React from "react";
import {Link} from "react-router-dom";

export default class Sidebar extends React.Component{
    render() {
        return (
              <div className="col-lg-3">
                  <h1 className="my-4">ORGANIZER</h1>
                  <div className="list-group">
                      <Link to="/Event/Create" className="list-group-item" activeClassName='active' >Create Event</Link>
                      <Link to="/Event/List"  className="list-group-item" activeClassName='active' >List Event</Link>
                      <Link to="/Event/Polibot" className="list-group-item" activeClassName='active' >Polibot</Link>
                  </div>
                  <br/>
              </div>
        );
    }
}