import React, { Component } from "react";
import "./App.css";
import Servo from "./components/Servo";
import Led from "./components/Led";

class App extends Component {
  state = {
    servos: [],
    leds: []
  };
  lastMove = 1000;

  constructor() {
    super();
    this.lastMove = 1000;
  }

  createCallback(context) {
    return function() {
      if (this.readyState === 4 && this.status === 200) {
        const status = JSON.parse(this.responseText);
        console.log(status);
        let state = {
          servos: [],
          leds: []
        };
        for (let servo of status.servos) {
          state.servos.push(servo);
        }
        for (let led of status.leds) {
          state.leds.push(led);
        }
        context.setState(state);
      }
    };
  }

  componentDidMount() {
    const ip = document.getElementById("esp_ip").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://" + ip + ":80/status", true);
    xhr.onreadystatechange = this.createCallback(this);
    xhr.send();
  }

  initState(status) {}

  handleServoAngleChange = event => {
    const angle = event.target.value;
    const servoId = event.target.id;
    const ip = document.getElementById("esp_ip").value;
    if (performance.now() - this.lastMove > 100) {
      var xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        "http://" + ip + ":80/servo?servoId=" + servoId + "&angle=" + angle,
        true
      );
      xhr.send();
      this.lastMove = performance.now();
      console.log("move");
    }
    let servoIndex = this.state.servos.indexOf(
      this.state.servos.filter(servo => servo.id === servoId)[0]
    );
    let { servos } = this.state;
    servos[servoIndex].value = angle;
    this.setState({ servos });
  };

  handleLedSwitchToggle = event => {
    const value = event.target.checked === true ? 1 : 0;
    const ledId = event.target.id;
    const ip = document.getElementById("esp_ip").value;
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://" + ip + ":80/led?ledId=" + ledId + "&value=" + value,
      true
    );
    xhr.send();

    let ledIndex = this.state.leds.indexOf(
      this.state.leds.filter(led => led.id === ledId)[0]
    );
    let { leds } = this.state;
    leds[ledIndex].value = value;
    this.setState({ leds });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>
            <i className="material-icons icon">settings</i>
            <i className="material-icons icon icon2">settings</i>
          </div>
          <h1>ESP8266 Servo + LED</h1>
        </header>
        <main>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input
              className="mdl-textfield__input"
              type="text"
              id="esp_ip"
              defaultValue="192.168.0.105"
            />
            <label className="mdl-textfield__label" htmlFor="esp_ip">
              ESP IP
            </label>
          </div>
          {this.state.servos.map(servo => (
            <Servo
              key={servo.id}
              servo={servo}
              handleServoAngleChange={this.handleServoAngleChange}
            />
          ))}
          {this.state.leds.map(led => (
            <Led
              key={led.id}
              led={led}
              handleLedSwitchToggle={this.handleLedSwitchToggle}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
