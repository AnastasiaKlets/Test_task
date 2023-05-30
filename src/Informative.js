import React, { Component } from 'react';
import { render } from 'react-dom';
import './informative.css';

export class Informative extends Component {

    render() {
        return(
            <>
                <div className="inf">
                            <p>{this.props.inf.inf1}</p>
                            <p>{this.props.inf.inf2}</p>

                    <div className="flex-container">
                        <div className="parasites">Слова-паразиты</div>
                        <div className="Non-speech">Неречевые звуки</div>
                        <div className="Arguments">Аргументы без подтверждения</div>
                        <div className="Other">Другое в выступлении</div>
                    </div>
                </div>
            </>
        )
    }

}