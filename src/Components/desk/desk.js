import React from "react";
import "./desk.css"
import StartBar from "../startBar/startBar";
import Window from "../window/window";
import DeskMenu from "../deskMenu/deskMenu";
import ShortcutPlate from "../shortcutPlate/shortcutPlate";
import Shortcut from "../shotcut/shortcut";
import shortCut_IE from "../../Assets/ie.png"
import Browser from "../browser/browser";
class Desk extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.back);
        this.state = {
            windows:[],
            shortcuts:[
                {
                    src:shortCut_IE,
                    desc:"查找并显示 Internet 上的信息",
                    title:"叉劈浏览器",
                    key:"browser"
                }
            ],
            activeShortcut:""
        }
    }
    handleDeskMenu = (e)=>{
        e.preventDefault();
        let deskMenu = {
            position:{
                x:e.pageX,
                y:e.pageY,
                width:150,
            },
            key:"desk-menu",
            frame:false,
            children:[<DeskMenu key={"desk-menu-items"}/>]
        }
        this.addWindow(deskMenu)
    }
    addWindow = (window) =>{
        let index = this.state.windows.findIndex(i=>{
            return i.key === window.key
        })
        let windows = this.state.windows
        if(index > -1){
            windows = [...windows.slice(0,index),...windows.slice(index+1,0)]
        }
        this.setState({
            windows:windows
        },()=>{
            windows.push(window)
            this.setState({
                windows:windows,
                activeShortcut:""
            })
        })
    }
    handleDeskClick = ()=>{
        this.deleteWindow("desk-menu")
        this.setState({
            activeShortcut:""
        })
    }
    deleteWindow = (key) => {
        let index = this.state.windows.findIndex(i=>{
            return i.key ===key
        })
        let windows = this.state.windows
        if(index > -1){
            windows = [...windows.slice(0,index),...windows.slice(index+1,0)]
        }
        this.setState({
            windows:windows
        })
    }
    windowRender = ()=>{
        return this.state.windows.map( (i,index)=>{
            return <Window frame={i.frame} title={i.title} children={i.children} key={i.key} position={i.position} z={index}/>
        })
    }
    handleShortcutClick = (key,e)=>{
        e.stopPropagation()
        this.setState({
            activeShortcut:key
        })
    }
    handleShortcutDoubleClick = (key,e) => {
        switch (key){
            case "browser":{
                let browser = {
                    position:{
                        x:200,
                        y:200,
                        width:window.innerWidth - 900,
                        height:window.innerHeight - 500,
                    },
                    key:"browser",
                    frame:true,
                    title:"叉劈浏览器",
                    children:[<Browser key={"browser"}/>]
                }
                this.addWindow(browser)
                return
            }
            default:{
                return
            }
        }
    }
    shortCutRender = ()=>{
        return (<ShortcutPlate>
            {this.state.shortcuts.map(i=>{
                return <Shortcut onClick={this.handleShortcutClick} onDoubleClick={this.handleShortcutDoubleClick} className={i.key===this.state.activeShortcut?"active":""} key={i.key} keyStr={i.key} src={i.src} desc={i.desc} title={i.title}/>
            })}
        </ShortcutPlate>)
    }
    render() {
        return (
            <div onClick={this.handleDeskClick} onContextMenu={this.handleDeskMenu} className={"desk-wrap"}>
                {this.shortCutRender()}
                {this.windowRender()}
                <StartBar/>
            </div>
        )
    }
}
export default Desk