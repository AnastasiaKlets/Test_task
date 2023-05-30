import React, { Component } from 'react';
import "./mouthpiese.svg"
import './bubbleBlue.svg'
import './bubbleRed.svg'
import './bubbleViolet.svg'
import './bubbleYellow.svg'

export class Eloquence extends Component {

    render() {
        return(
        <>
            <div>
                <p>
                    {this.props.inf.inf4}
                </p>
            </div>
            <div>
                <img src="mouthpiese.svg" alt="рупор"></img>

                <img src="bubbleBlue.svg" alt="рупор"></img>
                <img src="bubbleRed.svg" alt="рупор"></img>
                <img src="bubbleViolet.svg" alt="рупор"></img>
                <img src="bubbleYellow.svg" alt="рупор"></img>
            </div>

        </>
        )}

}