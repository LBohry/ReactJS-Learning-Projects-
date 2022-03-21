import { Component } from "react";
import "./App.css";
class App2 extends Component {
  state = { count: 0 };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label htmlFor="input">WRITE HERE</label>
          <input type="text" value={this.state.count} size="35" id="input" />
          <div className="buttons">
            <button
              value="+"
              className="b"
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              +
            </button>
            <button
              value="-"
              className="b"
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              -
            </button>
            {console.log(this.state.count)}
          </div>
        </header>
      </div>
    );
  }
}

export default App2;
