// @ts-nocheck
import React, { Component } from "react";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeDetail = () => {
    //class methodi hisoblanadi
    this.setState({ color: "blue", brand: "Tesla", model: "S3", year: 2024 });
  };

  componentDidMount() {
    console.log("componentDidMount");
    //runs after first render => RETRIEVE DATA FROM BACKEND SERVER
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    //runs before component unmount => test component destroy bolishidan oldin ishga tushadi
  }

  componentDidUpdate() {
    console.log("++componentDidUpdate"); //qachonki test change bolsa, ichida nimadur bolsa
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model:{this.state.model} - from{" "}
          {this.state.year}.
        </p>
        <button type="button" onClick={this.changeDetail}>
          Change detail
        </button>
      </div>
    );
  }
}
export default Test;
