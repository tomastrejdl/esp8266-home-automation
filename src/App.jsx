import React, { Component } from "react";
import "./App.css";
import {
  Led,
  Servo,
  NavBar,
  EspConnection,
  AddControlButton
} from "./components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      espIp: "192.168.0.105",
      servos: [
        {
          id: "servo_1",
          name: "Blinds left",
          value: 20
        },
        {
          id: "servo_2",
          name: "Blinds right",
          value: 150
        }
      ],
      leds: [
        {
          id: "led_1",
          name: "Desk light",
          value: 1
        },
        {
          id: "led_2",
          name: "Ceiling light",
          value: 0
        }
      ]
    };
    this.lastMove = 1000;
  }

  createCallback(context) {
    return function () {
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
    // this.connectToEsp();
  }

  connectToEsp = () => {
    const ip = this.state.espIp;
    if (
      !/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ip
      )
    ) {
      alert("Enter a valid IPv4 address!");
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://" + ip + ":80/status", true);
    xhr.onreadystatechange = this.createCallback(this);
    xhr.send();
  };

  handleServoAngleChange = (event) => {
    const angle = event.target.value;
    const servoId = event.target.id;
    const ip = this.state.espIp;
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
    const ip = this.state.espIp;
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

  onEspIpChange = event => {
    this.setState({ espIp: event.target.value });
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <NavBar />
          <EspConnection
            handleConnectClick={this.connectToEsp}
            onEspIpChange={this.onEspIpChange}
            espIpDefaultValue={this.state.espIp}
          />
        </header>
        <main className="app__content">
          <div className="servos">
            {this.state.servos.map(servo => (
              <Servo
                key={servo.id}
                servo={servo}
                handleServoAngleChange={this.handleServoAngleChange}
              />
            ))}
          </div>
          <div className="leds">
            {this.state.leds.map(led => (
              <Led
                key={led.id}
                led={led}
                handleLedSwitchToggle={this.handleLedSwitchToggle}
              />
            ))}
          </div>
          {/* <AddControlDialog /> */}
          <AddControlButton />
        </main>
      </div>
    );
  }
}

export default App;
