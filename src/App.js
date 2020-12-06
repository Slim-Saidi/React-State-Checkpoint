import { Component } from "react";
import "./App.css";
import Pic from "./mayweather.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Floyd "Money" Mayweather',
        bio: "The Best Ever",
        profession: "Professional Boxer",
      },
      check: false,
      count: 0,
    };
  }

  show = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>Boxing Hall Of Fame</h1>
        <div> {count} </div>
        <br />
        <button onClick={this.show}>Check</button>
        <br />
        {this.state.check ? (
          <div>
            <div>
              <img src={Pic} alt={""} width={300} />
            </div>
            <h2> {this.state.person.name} </h2>
            <h3> {this.state.person.bio} </h3>
            <h3> {this.state.person.profession} </h3>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
