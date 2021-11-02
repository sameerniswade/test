import React, { Component } from "react";
import "./App.css";
import arr from "./comp";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      info: [],
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 3,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 3,
    });
  };

  fetchdata = async () => {
    let alldata;
    console.log(fetch);
    alldata = await fetch("https://gorest.co.in/public/v1/todos").then((res) =>
      res.json()
    );
    // console.log(alldata.data);

    this.setState({ info: alldata.data });
    console.log(this.state.info);
  };
  render() {
    return (
      <div>
        <div className="counter">
          <button className="buttonCounter" onClick={this.decrement}>
            <h1>-</h1>
          </button>
          <p className="number">{this.state.count}</p>
          <button className="buttonCounter" onClick={this.increment}>
            <h1>+</h1>
          </button>
        </div>

        <div className="empCardsCmp">
          <button className="buttonCounter" onClick={this.fetchdata}>
            fetch
          </button>
          <div className="empCards">
            {this.state.info.map((data) => {
              return (
                <div className="empCard" key={data.id}>
                  <p>{data.id}</p>
                  <p>{data.status}</p>
                  <p>{data.title}</p>
                  <p>{data.due_on}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
