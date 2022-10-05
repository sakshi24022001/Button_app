import React, { Component } from "react";
import ON from "./on.png";
import OFF from "./off.png";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [
        {
          button: false,
        },
        {
          button: false,
        },
        {
          button: true,
        },
        {
          button: false,
        },
        {
          button: true,
        },
      ],
    };
  }
  update = (index) => {
    console.log("index", index);
    let tmp = [...this.state.arr];
    tmp[index].button = !tmp[index].button;
    console.log("tmp", tmp);
    this.setState({
      arr : tmp
    }, ()=>{
      console.log("State", this.state);
    });


  };
  render() {
    return (
      <div>
        {this.state.arr.length && (this.state.arr) instanceof Array && this.state.arr.map((ele, index) => {
          return (
            <>
              <img src={this.state.arr[index].button ? ON : OFF} alt = "on/off" />{" "} 
              <button onClick={() => this.update(index)}>
                {ele.button ? "On" : "OFF"}
              </button>
              <br />
            </>
          );
        })}
      </div>
    );
  }
}