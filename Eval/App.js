//import logo from './logo.svg';
//import './App.css';

import React, { Component } from "react";
import Buttons from "./Components/Buttons/buttons";
import Buttonbox from "./Components/ButtonBox/buttonBox";
import Outputscreen from "./Components/OutputScreen/outputScreen";


class Calculator extends Component {
  constructor() {
      super();
      this.state = { 
        data: ''
      }
  }

  calculate = () => {
      try {
          const result = eval(this.state.data);
          this.setState({data: result});
      } catch (e) {
          this.setState({data: 'error'})
      }
  }

  handleClick = e => {
      const value = e.target.getAttribute('data-value');
      switch(value) {
          case 'clear':
              this.setState({ data: ''});
              break;
          case 'equal':
              this.calculate();
              break;
          default:
              this.setState({ data: this.state.data + value});
      }
  }
  render(){
      return(
          <div className="Calculator">
            <h1 align ="center">CALCULATOR</h1>
              <Outputscreen data={this.state.data}/>
              <Buttonbox>

                  <Buttons onClick={this.handleClick} label="7" value="7" />
                  <Buttons onClick={this.handleClick} label="8" value="8" />
                  <Buttons onClick={this.handleClick} label="9" value="9" />
                  <Buttons onClick={this.handleClick} label="X" value="*" />

                  <Buttons onClick={this.handleClick} label="4" value="4" />
                  <Buttons onClick={this.handleClick} label="5" value="5" />
                  <Buttons onClick={this.handleClick} label="6" value="6" />
                  <Buttons onClick={this.handleClick} label="-" value="-" />

                  <Buttons onClick={this.handleClick} label="1" value="1" />
                  <Buttons onClick={this.handleClick} label="2" value="2" />
                  <Buttons onClick={this.handleClick} label="3" value="3" />
                  <Buttons onClick={this.handleClick} label="+" value="+" />

                  <Buttons onClick={this.handleClick} label="." value="." />
                  <Buttons onClick={this.handleClick} label="0" value="0" />
                  <Buttons onClick={this.handleClick} label="=" value="equal" />
                  <Buttons onClick={this.handleClick} label="%" value="/" />
                  <Buttons onClick={this.handleClick} label="C" value="clear" />
              </Buttonbox>
          </div>
      );
  }
}

export default Calculator;

// import React, { Component } from "react";
// import { Box } from "./Components/Box/box";
// import { OutScreen } from "./Components/OutputScreen/outputScreen";
// import { ButtonBox } from "./Components/ButtonBox/buttonBox";
// import { Buttons } from "./Components/Buttons/buttons";


// class Calculator extends Component{
//   constructor(){
//     super()
//     this.state ={
//       data : ""
//     }
//   }

//   calculate = () => {
//     const result = eval(this.state.data);
//     this.setState({data: result});
//   }

//   handleClick = (e) => {
//     const value = e.target.getAttribute('data-value');
//         switch(value) {
//             case 'clear':
//                 this.setState({ data: ''});
//                 break;
//             case 'equal':
//                 this.calculate();
//                 break;
//             default:
//                 this.setState({ data: this.state.data + value});
//         }
//   }

//   render(){
//     console.log("hello")
//     return(
//       <div className="calculator">
//         <h1 align = "center">Calculator</h1>
//         <div className="functons">
//         <OutScreen data = {this.state.data} />
//         <ButtonBox>
//           <Buttons onClick={this.handleClick} label="C" value="clear" />
//           <Buttons onClick={this.handleClick} label="7" value="7" />
//           <Buttons onClick={this.handleClick} label="4" value="4" />
//           <Buttons onClick={this.handleClick} label="1" value="1" />
//           <Buttons onClick={this.handleClick} label="." value="dot" />

//           <Buttons onClick={this.handleClick} label="/" value="/" />
//           <Buttons onClick={this.handleClick} label="8" value="8" />
//           <Buttons onClick={this.handleClick} label="5" value="5" />
//           <Buttons onClick={this.handleClick} label="2" value="2" />
//           <Buttons onClick={this.handleClick} label="0" value="0" />

//           <Buttons onClick={this.handleClick} label="x" value="*" />
//           <Buttons onClick={this.handleClick} label="9" value="9" />
//           <Buttons onClick={this.handleClick} label="6" value="6" />
//           <Buttons onClick={this.handleClick} label="3" value="3" />
//           <Buttons onClick={this.handleClick} label="" value="null" />

//           <Buttons onClick={this.handleClick} label="-" value="-" />
//           <Buttons onClick={this.handleClick} label="+" size="2" value="+" />
//           <Buttons onClick={this.handleClick} label="=" size="2" value="equal" />
//         </ButtonBox>
//         </div>
        
//       </div>
//     )
//   }
// }
// export default Calculator;