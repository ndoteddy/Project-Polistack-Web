import React from "react";
import Sidebar from "../Component/Sidebar";


class EventCreate extends React.Component{
    constructor()
    {
        super();
        this.state = {
            eventTitle : "",
            venueName : "",
            address : "",
            description : "",
            organizerName : "",
            totalGuest : "",
            responseData:""
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleVenueNameChange = this.handleVenueNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleOrganizerNameChange = this.handleOrganizerNameChange.bind(this);
        this.handleTotalGuestChange = this.handleTotalGuestChange .bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleTitleChange(e) {
        this.setState({
            eventTitle: e.target.value
        });
    }
    handleVenueNameChange(e) {
        this.setState({
            venueName: e.target.value
        });
    }
    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        });
    }
    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    handleOrganizerNameChange(e) {
        this.setState({
            organizerName: e.target.value
        });
    }
    handleTotalGuestChange(e) {
        this.setState({
            totalGuest: e.target.value
        });
    }



    handleSubmit(data) {
        //fetch('http://localhost:3000/Event', {
        fetch('https://desolate-taiga-45305.herokuapp.com/Event', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventTitle: this.state.eventTitle,
                venueName: this.state.venueName,
                address: this.state.address,
                desc: this.state.description,
                organizerName: this.state.organizerName,
                totalGuest: this.state.totalGuest,
            })
        });
    }
    render() {

        return (
            <div>
                <div className="container">
                    <br/><br/><br/>
                    <div className="row">
                    <Sidebar/>

                    <div className="col-lg-9">
                        <section>


                            <form onSubmit={this.handleSubmit}>
                                <br/><br/><br/>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label >Event Title</label>

                                            <input type="text"
                                                   id="txtEventTitle"
                                                   required="required"
                                                   value={this.state.eventTitle}
                                                   onChange={this.handleTitleChange}
                                                   className="form-control"
                                                   placeholder="e.g : Hockey Tournament"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Venue Name</label>
                                            <input type="text"
                                                   id="txtVenue"
                                                   required="required"
                                                   value={this.state.venueName}
                                                   onChange={this.handleVenueNameChange}
                                                   className="form-control"
                                                   placeholder="e.g : Olympic Stadium"
                                            />

                                        </div>

                                    </div>
                                   {/* <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label >Start At</label>
                                            <input type="text" className="form-control" id="inputTime" placeholder="Date/Time"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label >-</label>
                                            <input type="text" className="form-control" id="inputTime" placeholder="Date/Time"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label >End At</label>
                                            <input type="text" className="form-control" id="inputTime" placeholder="Date/Time"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label >-</label>
                                            <input type="text" className="form-control" id="inputTime" placeholder="Date/Time"/>
                                        </div>
                                    </div>*/}
                                    <div className="form-group">
                                        <label >Address</label>
                                        <input type="text"
                                               id="txtAddress"
                                               required="required"
                                               value={this.state.address}
                                               onChange={this.handleAddressChange}
                                               className="form-control"
                                               placeholder="e.g: Sudirman St"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Description</label>
                                        <textarea
                                            id="txtDescription"
                                            className="form-control"
                                            rows="5"
                                            value={this.state.description}
                                            onChange={this.handleDescriptionChange}
                                            placeholder=" e.g : Free 1 Soft Drink"
                                        />



                                    </div>


                                    <div className="form-group">
                                        <label >Organizer Name</label>

                                        <input type="text"
                                               id="txtOrganizer"
                                               required="required"
                                               value={this.state.organizerName}
                                               onChange={this.handleOrganizerNameChange}
                                               className="form-control"
                                               placeholder="e.g: Orega Inc"
                                        />
                                    </div>


                                   <div className="form-group">
                                        <label >Total Guest</label>
                                       <input type="text"
                                              id="txtTotalGuest"
                                              required="required"
                                              value={this.state.totalGuest}
                                              onChange={this.handleTotalGuestChange}
                                              className="form-control"
                                              placeholder="e.g: 150"
                                       />
                                    </div>

                                    <button type="submit" className="btn btn-primary" >Create</button>
                                    <button type="submit" className="btn btn-warning">Cancel</button>

                            </form>
                        </section>

                    </div>


                    </div>
                <br/>
                </div>
            </div>
        );
    }
}
export default EventCreate