import "./browser.css"
import React from "react";
class Browser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            website:"https://baidu.com"
        }
    }
    render() {
        return (
            <div className={"browser-wrap"}>
                <div className={"browser-options"}>
                    <span>地址</span>
                    <input value={this.state.website} className={"browser-address-input"}/>
                    <span className={"browser-option-go"}>➡️&nbsp;&nbsp;转到</span>
                </div>
                <iframe title={"叉劈浏览器"} className={"browser-web"} src={this.state.website}/>
            </div>
        )
    }
}
export default Browser