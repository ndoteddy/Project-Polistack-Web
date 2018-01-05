import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
            })
            .catch(err => {
                console.log(err, 'Signature not added, try again');
            });

        this.setState({
            SignatureOfGuest: "",
            MessageofGuest: "",
        });
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reactor Group</h1>
            <h4 className="App-Subtitle">@ndoaja,@yohanes,@agustinus</h4>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

              <input
                  onChange={this.handleSignatureOfGuest}
                  name="SignatureOfGuest"
                  className="NameinputForm"
                  value={this.state.SignatureOfGuest}
                  placeholder="Enter your name"
              />
              <textarea
                  onChange={this.handleMessageofGuest}
                  name="MessageofGuest"
                  className="MessageinputForm"
                  value={this.state.MessageofGuest}
                  placeholder="Type a message"
              />

              <button
                  className="submitbuttonguestbook"
                  type="submit"
                  onClick={this.addToGuestBook}
              >
                  Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
              </button>

      </div>

    );
  }
}


export default App;
