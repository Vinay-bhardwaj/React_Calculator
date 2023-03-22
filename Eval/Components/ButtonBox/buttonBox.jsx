import React, { Component } from "react";
import './buttonBox.styles.css'

class Buttonbox extends Component {
    render(){
        return(
            <div className="Keypad">
                {this.props.children}
            </div>
        );
    }
}

export default Buttonbox;