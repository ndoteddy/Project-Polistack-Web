import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
        this.handleMessageofGuest = this.handleMessageofGuest.bind(this);
        this.state = {
            SignatureOfGuest: "",
            MessageofGuest: "",
        };
    }

    handleSignatureOfGuest(event) {
        this.setState({ SignatureOfGuest: event.target.value });
    }
    handleMessageofGuest(event) {
        this.setState({ MessageofGuest: event.target.value });
    }

    addToGuestBook = event => {
        event.preventDefault();
        this.setState({
            SignatureOfGuest: event.target.value,
            MessageofGuest: event.target.value,
        });

        axios.post('https://rocky-depths-82678.herokuapp.com/api/signatures', {
            SignatureOfGuest: this.state.SignatureOfGuest,
            MessageofGuest: this.state.MessageofGuest,
        })
            .then(response => {
                console.log(response, 'Signature added!');
                toast("Guestbook has been submitted!")
            })
            .catch(err => {
                console.log(err, 'Signature not added, try again');
                toast("Error happened!")
            });

        this.setState({
            SignatureOfGuest: "",
            MessageofGuest: "",
        });
    };
    notify = () => toast("Wow so easy !");
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Guest Management System</h1>
            <h4 className="App-Subtitle">React + Node + Mongo</h4>

        </header>

          <Form>
              <FormGroup>
                  <Label for="exampleEmail" sm={2}>Name</Label>
                  <Col sm={10}>
                  <input
                      bsSize="lg"
                      value={this.state.SignatureOfGuest}
                      onChange={this.handleSignatureOfGuest}
                      name="SignatureOfGuest"
                      id="SignatureOfGuest"
                  />
                  </Col>
              </FormGroup>

              <FormGroup>
                  <Label for="exampleMessage" sm={2}>Message</Label>
                  <Col sm={10}>
                  <Input
                      bsSize="lg"
                      value={this.state.MessageofGuest}
                      onChange={this.handleMessageofGuest}
                      name="MessageofGuest"
                      id="MessageofGuest" />
                  </Col>
              </FormGroup>
              <FormGroup>
                  <Label for="btn" sm={2}></Label>
                  <Col sm={10}>
                  <Button
                      color="success"
                      type="submit"
                      onClick={this.addToGuestBook}
                  >
                      Submit to Guestbook
                  </Button>
                  <ToastContainer />
                  </Col>
              </FormGroup>
          </Form>


            <footer  className="App-footer">
                Copyright by @ndoaja 2017 - MIT License
            </footer>
      </div>

    );
  }
}


export default App;
