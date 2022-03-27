import { Component } from 'react';
import './index.css'

class Button extends Component {

    click = () => {
        this.props.handleClick(this.props.value)
    }

    render() {
        const className = (this.props.value === "=") ? "enter" : "button";
        return (
            <button className={className} value={this.props.value} onClick={this.click}>{this.props.name}</button>
        )
    }
}

export default Button