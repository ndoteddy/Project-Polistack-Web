import React from "react";
import Sidebar from "../Component/Sidebar";


class EventDashboard extends React.Component{

    render() {

        return (
            <div>
                <div className="container">
                    <br/><br/><br/>
                    <div className="row">
                    <Sidebar/>

                    <div className="col-lg-9">
                        <br/><br/><br/>
                        <h1>Dashboard Here</h1>
                    </div>
                    </div>


                </div>

            </div>

        );
    }
}
export default EventDashboard