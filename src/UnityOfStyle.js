import React, {Component} from 'react';
import './UnityOfStyle.css'

class UnityOfStyle extends Component {
    render() {
        return (
            <>
                <div className="inf">

                            <p>{this.props.inf.inf3}</p>

                    <div className="flex-container">
                        <div className="Pablic">Публицистический {this.props.inf.inf6}</div>
                        <div className="auther">Другие стили</div>
                    </div>
                </div>

            </>
        );
    }
}

export default UnityOfStyle;