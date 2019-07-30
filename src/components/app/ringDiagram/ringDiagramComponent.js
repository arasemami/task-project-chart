import React, {Component} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import '../../../../node_modules/react-circular-progressbar/dist/styles.css';
import './style.css'

class RingDiagramComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="ring-container" key={this.props.name}>
                <h2>{this.props.name}</h2>
                <p className="label-of-ring">{this.props.data} {this.props.extension}</p>
                <CircularProgressbar 
                        value={(this.props.data * 100) / this.props.maxData}
                        text={`${parseInt((this.props.data * 100) / this.props.maxData)}%`}
                        strokeWidth={17}
                        styles={
                            buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(${this.props.color}, ${this.props.data / 10})`, // make color becuse in vlaue of data
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: this.props.color,
                            })
                        }
                />
            </div>
        );
    }
}

export default RingDiagramComponent;


/*  i write comment How can use this component to undretandable more esay .

    import RingDiagramComponent from components folder.

   <RingDiagramComponent 
        data={this.state.solarId / 10} // enter data to show percent
        name="solar" // name must unig also will show in title
        color="231, 76, 60" // set color in ring diagram
        extension="kw" // show the the sampe value 
    /> 

    have enjoy ;)

*/