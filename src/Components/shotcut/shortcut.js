import "./shortcut.css"
import React from "react";
class Shortcut extends React.Component{
    constructor(props) {
        super(props);
        this.handleOnClick = props.onClick.bind(this,props.keyStr)
        this.handleDoubleClick = props.onDoubleClick.bind(this,props.keyStr)
    }render() {
        return(
            <div onDoubleClick={this.handleDoubleClick} onClick={this.handleOnClick} className={"shortcut-wrap "+this.props.className}>
                <img src={this.props.src} alt={this.props.desc}/>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Shortcut