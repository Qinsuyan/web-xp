import React from "react";
import "./window.css"
class Window extends React.Component{
    render(){
        if(!this.props.frame){
            return(
                <div style={{left:this.props.position.x,top:this.props.position.y,zIndex:this.props.z,width:this.props.position.width,height:this.props.position.height}} className={"window-wrap"}>
                    {this.props.children}
                </div>
            )
        }else{
            return(
                <div style={{left:this.props.position.x,top:this.props.position.y,zIndex:this.props.z,width:this.props.position.width,height:this.props.position.height+30}} className={"window-wrap framed"}>
                    <div className={"window-frame-head"}>
                        <span>{this.props.title}</span>
                    </div>
                    {this.props.children}
                    <div className={"window-frame-resize top"}></div>
                    <div className={"window-frame-resize right"}></div>
                    <div className={"window-frame-resize bottom"}></div>
                    <div className={"window-frame-resize left"}></div>
                    <div className={"window-frame-resize top-right"}></div>
                    <div className={"window-frame-resize bottom-right"}></div>
                    <div className={"window-frame-resize bottom-left"}></div>
                    <div className={"window-frame-resize top-left"}></div>
                </div>
            )
        }

    }
}
export default Window