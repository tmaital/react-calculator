import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClickNumber = this.handleClickNumber.bind(this);
    this.handleClickKey = this.handleClickKey.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSub = this.handleClickSub.bind(this);
    this.handleClickMul = this.handleClickMul.bind(this);
    this.handleClickDiv = this.handleClickDiv.bind(this);
    this.handleClickDot = this.handleClickDot.bind(this);
    this.handleClickEqu = this.handleClickEqu.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress, false);
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress, false);
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyPress(event) {
    if (event.keyCode > 47 && event.keyCode < 58) {
      let numberKey = event.keyCode - 48;
      this.handleClickKey(numberKey);
    } else if (event.keyCode === 46) {
      this.handleClickDot();
    } else if (event.keyCode === 47) {
      this.handleClickDiv();
    } else if (event.keyCode === 43) {
      this.handleClickAdd();
    } else if (event.keyCode === 45) {
      this.handleClickSub();
    } else if (
      event.keyCode === 42 ||
      event.keyCode === 88 ||
      event.keyCode === 120
    ) {
      this.handleClickMul();
    } else if (event.keyCode === 61 || event.keyCode === 13) {
      this.handleClickEqu();
    }
  }

  handleKeyDown(event) {
    if (event.keyCode === 8) {
      this.handleClickBack();
    } else if (event.keyCode === 46) {
      this.handleClickClear();
    }
  }

  handleClickAdd() {
    this.setState(prevState => {
      let x = prevState.count.toString().slice(-1);
      let operator = "+";
      if (
        (x === "+" || x === "-" || x === "*" || x === "/" || x === ".") &&
        prevState.count.toString().length > 1
      ) {
        return {
          count: `${prevState.count.toString().slice(0, -1)}${operator}`
        };
      } else if (
        prevState.count.toString().length < 11 &&
        prevState.count !== 0 &&
        prevState.count !== "-"
      ) {
        return { count: `${prevState.count}${operator}` };
      }
    });
  }

  handleClickSub() {
    this.setState(prevState => {
      let x = prevState.count.toString().slice(-1);
      let operator = "-";
      if (prevState.count === 0) {
        return { count: operator };
      } else if (
        x === "+" ||
        x === "-" ||
        x === "*" ||
        x === "/" ||
        x === "."
      ) {
        return {
          count: `${prevState.count.toString().slice(0, -1)}${operator}`
        };
      } else if (prevState.count.toString().length < 11) {
        return { count: `${prevState.count}${operator}` };
      }
    });
  }

  handleClickMul() {
    this.setState(prevState => {
      let x = prevState.count.toString().slice(-1);
      let operator = "*";
      if (
        (x === "+" || x === "-" || x === "*" || x === "/" || x === ".") &&
        prevState.count.toString().length > 1
      ) {
        return {
          count: `${prevState.count.toString().slice(0, -1)}${operator}`
        };
      } else if (
        prevState.count.toString().length < 11 &&
        prevState.count !== 0 &&
        prevState.count !== "-"
      ) {
        return { count: `${prevState.count}${operator}` };
      }
    });
  }

  handleClickDiv() {
    this.setState(prevState => {
      let x = prevState.count.toString().slice(-1);
      let operator = "/";
      if (
        (x === "+" || x === "-" || x === "*" || x === "/" || x === ".") &&
        prevState.count.toString().length > 1
      ) {
        return {
          count: `${prevState.count.toString().slice(0, -1)}${operator}`
        };
      } else if (
        prevState.count.toString().length < 11 &&
        prevState.count !== 0 &&
        prevState.count !== "-"
      ) {
        return { count: `${prevState.count}${operator}` };
      }
    });
  }

  handleClickDot() {
    this.setState(prevState => {
      let x = prevState.count.toString().slice(-1);
      let operator = ".";
      if (
        (x === "+" || x === "-" || x === "*" || x === "/" || x === ".") &&
        prevState.count.toString().length > 1 &&
        prevState.count.toString().includes(operator) === false
      ) {
        return {
          count: `${prevState.count.toString().slice(0, -1)}${operator}`
        };
      } else if (
        prevState.count.toString().length < 11 &&
        prevState.count !== "-" &&
        prevState.count.toString().includes(operator) === false
      ) {
        return { count: `${prevState.count}${operator}` };
      }
    });
  }

  handleClickEqu() {
    this.setState(prevState => {
      let x = prevState.count.toString().slice(-1);
      if (x === "+" || x === "-" || x === "*" || x === "/" || x === ".") {
        return {
          count: prevState.count
        };
      } else {
        let result = prevState.count;
        return {
          count: eval(result) // eslint-disable-line
        };
      }
    });
  }

  handleClickClear() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  }

  handleClickBack() {
    this.setState(prevState => {
      if (prevState.count.toString().length > 1) {
        return { count: prevState.count.toString().slice(0, -1) };
      } else {
        return { count: 0 };
      }
    });
  }

  handleClickNumber(event) {
    const name = event.target.name;
    this.setState(function one(prevState) {
      if (prevState.count === 0 || prevState.count === "0") {
        return { count: name };
      } else if (prevState.count.toString().length < 12) {
        return { count: `${prevState.count}${name}` };
      } else {
        console.log("Limit Reached");
        return { count: prevState.count };
      }
    });
  }

  handleClickKey(numberKey) {
    this.setState(function one(prevState) {
      if (prevState.count === 0 || prevState.count === "0") {
        return { count: numberKey };
      } else if (prevState.count.toString().length < 12) {
        return { count: `${prevState.count}${numberKey}` };
      } else {
        console.log("Limit Reached");
        return { count: prevState.count };
      }
    });
  }

  render() {
    return (
      <div className="page" onKeyPress={this.handleKeyPress}>
        <div className="calculator">
          <input type="text" value={this.state.count} readOnly />
          <div className="calc-buttons">
            <button className="clear" onClick={this.handleClickClear}>
              C
            </button>
            <button className="back" onClick={this.handleClickBack}>
              ￩
            </button>
            <button className="div" onClick={this.handleClickDiv}>
              ÷
            </button>

            <button name="7" className="seven" onClick={this.handleClickNumber}>
              7
            </button>
            <button name="8" className="eight" onClick={this.handleClickNumber}>
              8
            </button>
            <button name="9" className="nine" onClick={this.handleClickNumber}>
              9
            </button>
            <button className="mul" onClick={this.handleClickNumber}>
              x
            </button>

            <button name="4" className="four" onClick={this.handleClickNumber}>
              4
            </button>
            <button name="5" className="five" onClick={this.handleClickNumber}>
              5
            </button>
            <button name="6" className="six" onClick={this.handleClickNumber}>
              6
            </button>
            <button className="sub" onClick={this.handleClickSub}>
              -
            </button>

            <button name="1" className="one" onClick={this.handleClickNumber}>
              1
            </button>
            <button name="2" className="two" onClick={this.handleClickNumber}>
              2
            </button>
            <button name="3" className="three" onClick={this.handleClickNumber}>
              3
            </button>
            <button className="add" onClick={this.handleClickAdd}>
              +
            </button>

            <button name="0" className="zero" onClick={this.handleClickNumber}>
              0
            </button>
            <button className="dot" onClick={this.handleClickDot}>
              .
            </button>
            <button className="equals" onClick={this.handleClickEqu}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
