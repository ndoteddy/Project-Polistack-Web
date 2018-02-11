import React from "react";
import Sidebar from "../Component/Sidebar";

class EventList extends React.Component{

    constructor()
    {
        super();
        this.state = {
            data: [],
            isLoading :false
        };
    }

    componentDidMount() {
        fetch('https://desolate-taiga-45305.herokuapp.com/Event').then((Response) => Response.json()).
        then((findResponse) =>
        {
            console.log('response'+ findResponse)
            this.setState({
                data: findResponse,isLoading:true
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br/><br/><br/>
                    <div className="row">
                    <Sidebar/>
                    <div className="col-lg-9">
                        {this.state.isLoading  ?  null :  <img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" />}
                        {this.state.data.map((dynamicData) =>
                            <div className="card mt-4">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-circle" src="/img/03.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-4" id = "ename">{dynamicData.eventTitle}</h2>
                                            <p>{dynamicData.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Total Guest: {dynamicData.totalGuest}</h4>
                                    <p className="card-text">{dynamicData.desc}</p>
                                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                                    4.0 stars
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default EventList