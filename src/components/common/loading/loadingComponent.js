

import React, { Component } from 'react';


import './style.css';


class LoadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <div className="laoding-container">
                <div className="loading-box">
                    <h1>Loading</h1>
                    <p>Please wait to render data . . .</p>

                </div>
            </div>
         );
    }
}
 
export default LoadingComponent;