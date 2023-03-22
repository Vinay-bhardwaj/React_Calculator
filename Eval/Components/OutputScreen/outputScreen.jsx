import React from "react";
import { Component } from "react";
import './outputScreen.css'

class Outputscreen extends Component {
    render(){
        return(
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Outputscreen;