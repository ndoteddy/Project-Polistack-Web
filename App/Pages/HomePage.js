import React from "react";
import {Link} from "react-router-dom";

class HomePage extends React.Component{

    constructor(){
        super();
        this.state = { title : "Welcome"};
    }

    render() {
        return (
            <div>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                            <h2 className="masthead-subheading mb-0">Need Planner For Your Event ?</h2>
                        <Link to='/Event/Create' className="btn btn-primary btn-xl rounded-pill mt-5">CREATE AN EVENT</Link>
                    </div>
                </header>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src="img/01.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">SIMPLICITY</h2>
                                    <p>Simple - Clean - Hi-Tech For Your Event <br/>
                                        From Concept until Event is held</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src="img/02.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="display-4">ROBUST</h2>
                                    <p>Realiable in concept from wedding to conference <br/>
                                        Powerfull in Data Management
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src="img/03.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">CUTTING EDGE</h2>
                                    <p>From QR Code with LIVE Notif - Cloud Computing <br/>You will have Hi-Tech Event</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage