import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class WelcomeMsg1 extends Component {
    render() {
        return (
            <Spring
            from={{opacity: 1}}
            to={{opacity: 0}}
            config={{duration: 3500}}
            >
                {props => (
                    <div style={props}>
                        <div className="namaste">
                            <h1>Namaste</h1>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

const namaste = {
    background: 'gray',
    color: 'white',
    padding: '1.5rem',
}

export default WelcomeMsg1