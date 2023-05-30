import React, { Component } from 'react';
import './Emotionality.css';
import './angry.svg'
import './ok.svg'
import './happy.svg'

export class Emotionality extends Component {
    render() {
        return(
            <>
            <div><p>{this.props.inf.inf6}</p></div>
                <div className="imgAll">
                    <div className="progressbar">
                        <img className="img" src="angry.svg"/>
                            <span className="span" style={{height: 15% }}><img src="angry.svg"/></span>
                    </div>
                    <div className="progressbar">
                        <img className="a1" src="angry.svg"/>
                            <span className="a2" style={{height: 85%;}}><img src="angry.svg"/></span>

                    </div>
                    <div className="progressbar">
                        <img className="img" src="ok.svg"/>
                            <span className="span" style={{height: 15%;}}><img src="ok.svg"/></span>
                    </div>
                    <div className="progressbar">
                        <img className="a1" src="ok.svg"/>
                            <span className="a2" style={{height: 85%;}}><img src="ok.svg"/></span>

                    </div>
                    <div className="progressbar">
                        <img className="img" src="happy.svg"/>
                            <span className="span" style={{height: 15%;}}><img src="happy.svg"/></span>
                    </div>
                    <div className="progressbar">
                        <img className="a1" src="happy.svg"/>
                            <span className="a2" style={{height: 85%;}}><img src="happy.svg"/></span>

                    </div>>
                </div>
            </>
        )
    }
}