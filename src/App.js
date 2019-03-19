import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import socketIOClient from "socket.io-client";
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touchState: false,
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  touchButton = () => {
    this.setState({
      touchState: true
    });

    setTimeout(() => {
      this.setState({ touchState: false });
    }, 1500);

  }

  render() {
    const touchClassNames = classNames({
      'touch-btn': true,
      'touch-btn--active': this.state.touchState
    });

    const touchLineClassNames = classNames({
      'touch-line': true,
      'touch-line--active': this.state.touchState
    });
    return (
      <div className="App">
        <header className="App-header">
          <div
            className={touchClassNames}
            onClick={this.touchButton}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-double-right"
              class="svg-inline--fa fa-angle-double-right fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512">
              <path
                fill="#000000"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z">
              </path>
            </svg>

            <div className={touchLineClassNames}></div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
