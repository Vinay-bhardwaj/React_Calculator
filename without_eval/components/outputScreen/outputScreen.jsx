import React, {Component} from "react";
import './outputScreen.styles.css'

class Output extends Component {
    render() {
      return( 
        <div className="output">
          {this.props.children}
        </div>
      )
    }
  }
  
  export default Output;