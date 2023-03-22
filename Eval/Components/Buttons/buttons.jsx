import React from "react";
import { Component } from "react";
import './button.styles.css'

class Buttons extends Component {
    render(){
        return(
            <div 
                className="Button"
                onClick={this.props.onClick}
                data-size={this.props.size}
                data-value={this.props.value}>
                {this.props.label}
            </div>
        );
    }
}

export default Buttons;