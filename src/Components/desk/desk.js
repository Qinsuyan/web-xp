import React from "react";
import "./desk.css";
import StartBar from "../startBar/startBar";
import Window from "../window/window";
import DeskMenu from "../deskMenu/deskMenu";
import ShortcutPlate from "../shortcutPlate/shortcutPlate";
import Shortcut from "../shotcut/shortcut";
import shortCut_IE from "../../Assets/ie.svg";
import Browser from "../browser/browser";
import BrowserSecurityTip from "../browserSecurityTip/browserSecurityTip";
class Desk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windows: [],
      shortcuts: [
        {
          src: shortCut_IE,
          desc: "查找并显示 Internet 上的信息",
          title: "叉劈浏览器",
          key: "browser",
        },
      ],
      activeShortcut: "",
      movingWindow:{
        key:"",
        originX:0,
        originY:0,
        startX:0,
        startY:0
      }
    };
  }
  handleDeskMenu = (e) => {
    e.preventDefault();
    let deskMenu = {
      position: {
        x: e.pageX,
        y: e.pageY,
        width: 150,
        height: 156,
      },
      key: "desk-menu",
      frame: false,
      children: [<DeskMenu key={"desk-menu-items"} />],
    };
    this.addWindow(deskMenu);
  };
  addWindow = (program) => {
    if (!program.position.x) {
      program.position.x = (window.innerWidth - program.position.width) / 2;
    }
    if (!program.position.y) {
      program.position.y = (window.innerHeight - program.position.height) / 2;
    }
    if (program.position.x + program.position.width > window.innerWidth) {
      program.position.x = window.innerWidth - program.position.width;
    }
    if (
      program.position.y + program.position.height >
      window.innerHeight - 40
    ) {
      program.position.y = window.innerHeight - 40 - program.position.height;
    }
    let index = this.state.windows.findIndex((i) => {
      return i.key === program.key;
    });
    let windows = this.state.windows;
    if (index > -1) {
      windows = [...windows.slice(0, index), ...windows.slice(index + 1, 0)];
    }
    this.setState(
      {
        windows: windows,
      },
      () => {
        windows.push(program);
        this.setState({
          windows: windows,
          activeShortcut: "",
        });
      }
    );
  };
  handleDeskClick = () => {
    this.deleteWindow("desk-menu");
    this.setState({
      activeShortcut: "",
    });
  };
  deleteWindow = (key) => {
    let windows = this.state.windows.filter((w) => {
      return w.key !== key;
    });
    if (windows.length !== this.state.windows.length) {
      this.setState({
        windows: windows,
      });
    }
  };
  handleWindowFrameDown = (data,e)=>{
    let w = this.state.windows.find(i => {
      return i.key === data;
    })
    if(w){
      let windows = this.state.windows.filter(i => {
        return i.key !== data
      })
      windows.push(w);
      this.setState({
        windows:windows
      })
      if(this.state.movingWindow.key === ""){
        this.setState({
          movingWindow:{
            key:data,
            originX:w.position.x,
            originY:w.position.y,
            startX:e.clientX,
            startY:e.clientY
          }
        })
      }
    }
  }
  handleWindowFrameMove = (e)=>{
    if(this.state.movingWindow.key===""){
      return
    }
    let curX = e.clientX,curY = e.clientY;
    let index = this.state.windows.findIndex(i => {
      return i.key === this.state.movingWindow.key;
    })
    if(index > -1){
      let w = this.state.windows[index]
      if(w.min || w.max){
        return;
      }
      w.position.x = this.state.movingWindow.originX + (curX - this.state.movingWindow.startX)
      w.position.y = this.state.movingWindow.originY + (curY - this.state.movingWindow.startY)
      this.setState({
        windows:[...this.state.windows.slice(0,index),w,...this.state.windows.slice(index+1)]
      })
    }
  }
  handleWindowFrameUp = ()=>{
    this.setState({
      movingWindow:{
        key:"",
        originX:0,
        originY:0,
        startX:0,
        startY:0
      }
    })
  }
  windowRender = () => {
    return this.state.windows.map((i, index) => {
      return (
        <Window
          onWindowClose={
            i.children[0].props.onWindowClose
              ? this.handleWindowClose
              : undefined
          }
          onWindowMini={
            i.children[0].props.onWindowMini ? this.handleWindowMini : undefined
          }
          onWindowMax={
            i.children[0].props.onWindowMax ? this.handleWindowMax : undefined
          }
          onWindowFrameDown={this.handleWindowFrameDown}
          onWindowFrameMove={this.handleWindowFrameMove}
          onWindowFrameUp={this.handleWindowFrameUp}
          frame={i.frame}
          icon={i.icon}
          title={i.title}
          children={i.children}
          key={i.key}
          keyStr={i.key}
          position={i.position}
          max={i.max}
          min={i.min}
          onTop={index === this.state.windows.length - 1}
          z={index}
        />
      );
    });
  };
  handleWindowClose = (data, e) => {
    this.deleteWindow(data);
  };
  handleWindowMini = (data) => {
    let w = this.state.windows.find(i=>{
      return i.key === data
    })
    let windows = this.state.windows.filter(i=>{
      return i.key !== data
    })
    w.min = true
    windows.push(w)
    this.setState({
      windows:windows
    })
  };
  handleWindowMax = (data) => {
    let w = this.state.windows.find(i=>{
      return i.key === data
    })
    let windows = this.state.windows.filter(i=>{
      return i.key !== data
    })
    w.max = !!!w.max
    windows.push(w)
    this.setState({
      windows:windows
    })
  };
  handleShortcutClick = (key, e) => {
    e.stopPropagation();
    this.setState({
      activeShortcut: key,
    });
  };
  handleShortcutDoubleClick = (key, e) => {
    switch (key) {
      case "browser": {
        let browser = {
          position: {
            width: window.innerWidth - 500,
            height: window.innerHeight - 500,
          },
          key: "browser",
          frame: true,
          title: "叉劈浏览器",
          task:true,
          icon:shortCut_IE,
          children: [
            <Browser
              onWindowClose={this.handleWindowClose}
              onWindowMini={this.handleWindowMini}
              onWindowMax={this.handleWindowMax}
              key={"browser"}
            />,
          ],
        };
        this.addWindow(browser);
        let browserTip = {
          position: {
            width: 300,
            height: 120,
          },
          key: "browser-tip",
          frame: true,
          title: "浏览器安全提示",
          children: [
            <BrowserSecurityTip
              onWindowClose={this.handleWindowClose}
              key={"browser-tip"}
            />,
          ],
        };
        this.addWindow(browserTip);
        return;
      }
      default: {
        return;
      }
    }
  };
  shortCutRender = () => {
    return (
      <ShortcutPlate>
        {this.state.shortcuts.map((i) => {
          return (
            <Shortcut
              onClick={this.handleShortcutClick}
              onDoubleClick={this.handleShortcutDoubleClick}
              className={i.key === this.state.activeShortcut ? "active" : ""}
              key={i.key}
              keyStr={i.key}
              src={i.src}
              desc={i.desc}
              title={i.title}
            />
          );
        })}
      </ShortcutPlate>
    );
  };
  toggleWindowMini = (data)=>{
    let w = this.state.windows.find(i=>{
      return i.key === data
    })
    let windows = this.state.windows.filter(i=>{
      return i.key !== data
    })
    w.min = !w.min
    windows.push(w)
    this.setState({
      windows:windows
    })
  }
  render() {
    return (
      <div
        onClick={this.handleDeskClick}
        onContextMenu={this.handleDeskMenu}
        className={"desk-wrap"}
        onMouseMove={this.handleWindowFrameMove}
        onMouseUp={this.handleWindowFrameUp}
      >
        {this.shortCutRender()}
        {this.windowRender()}
        <StartBar onToggleWindowMini={this.toggleWindowMini} windows={this.state.windows} />
      </div>
    );
  }
}
export default Desk;
