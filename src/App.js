import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    advice: ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h2 className="heading">{advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}
