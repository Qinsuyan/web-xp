import "./browser.css"
import React from "react";
class Browser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            website:"https://www.gouyiqin.com",
            websiteStr:"https://www.gouyiqin.com"
        }
    }
    inputWebsite = (e)=>{
       this.setState({
           websiteStr:e.target.value
       })
    }
    toWebsite = ()=>{
        let str = this.state.websiteStr
        if(str.indexOf("https://")<0){
            str = "https://"+str
        }
        this.setState({
            websiteStr:str,
            website:str
        })
    }
    preventMove = (e)=>{
        e.stopPropagation()
    }
    tryEnter = (e)=>{
        if(e.keyCode === 13){
            this.toWebsite()
        }
    }
    render() {
        return (
            <div onMouseUp={this.preventMove} onMouseMove={this.preventMove} onMouseDown={this.preventMove} className={"browser-wrap"}>
                <div className={"browser-options"}>
                    <span>地址</span>
                    <input onKeyDown={this.tryEnter} onInput={this.inputWebsite} value={this.state.websiteStr} className={"browser-address-input"}/>
                    <span onClick={this.toWebsite} className={"browser-option-go"}>➡️&nbsp;&nbsp;转到</span>
                </div>
                <iframe title={"叉劈浏览器"} className={"browser-web"} src={this.state.website}/>
            </div>
        )
    }
}
export default Browser