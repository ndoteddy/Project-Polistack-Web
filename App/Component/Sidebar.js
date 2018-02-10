import React from "react";
import {Link} from "react-router-dom";


export default class Sidebar extends React.Component{
    handleChange(e)
    {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render() {

        return (


              <div className="col-lg-3">
                  <h1 className="my-4">ORGANIZER</h1>
                  <div className="list-group">
                      <a href="/Event/Create" className="list-group-item">Create Event</a>
                      <a href="/Event/List" className="list-group-item">List Event</a>
                      <a href="/Event/Polibot" className="list-group-item">Polibot</a>

                  </div>
                  <br/>
              </div>





        );
    }
}