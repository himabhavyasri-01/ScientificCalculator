import './index.css'
import { Component } from 'react';

class Input extends Component {

    render() {
        return (
            <div className='result-container'>
                <p className="result-item">{this.props.value}</p>
            </div>
        )
    }
}

export default Input