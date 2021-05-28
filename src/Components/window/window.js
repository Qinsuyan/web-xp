import React from "react";
import "./window.css";
class Window extends React.Component {
  getStyle() {
    if (!this.props.max && !this.props.min) {
      return {
        left: this.props.position.x,
        top: this.props.position.y,
        zIndex: this.props.z,
        width: this.props.position.width,
        height: this.props.position.height + 30,
      };
    } else {
      if (this.props.min) {
        return {
          left: -10000,
          top: -10000,
          zIndex: 0,
          width: 0,
          height: 0,
        };
      } else {
        return {
          left: 0,
          top: 0,
          zIndex: this.props.z,
          width: window.innerWidth,
          height: window.innerHeight - 30,
        };
      }
    }
  }
  render() {
    if (!this.props.frame) {
      return (
        <div
          style={{
            left: this.props.position.x,
            top: this.props.position.y,
            zIndex: this.props.z,
            width: this.props.position.width,
            height: this.props.position.height,
          }}
          className={"window-wrap"}
        >
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div
          style={this.getStyle()}
          className={"window-wrap framed " + (this.props.onTop ? "top" : "")}
          onMouseDown={this.props.onWindowFrameDown.bind(
            this,
            this.props.keyStr
          )}
        >
          <div className={"window-frame-head"}>
            {this.props.icon && (
              <img alt={this.props.title} src={this.props.icon} />
            )}
            <span>{this.props.title}</span>
            <div className={"window-frame-options"}>
              {this.props.onWindowMini && (
                <div
                  onClick={this.props.onWindowMini.bind(
                    this,
                    this.props.keyStr
                  )}
                  className={"window-frame-option mini"}
                >
                  <div />
                </div>
              )}
              {this.props.onWindowMini && (
                <div
                  onClick={this.props.onWindowMax.bind(this, this.props.keyStr)}
                  className={"window-frame-option max"}
                >
                  <div />
                </div>
              )}
              {this.props.onWindowClose && (
                <div
                  onClick={this.props.onWindowClose.bind(
                    this,
                    this.props.keyStr
                  )}
                  className={"window-frame-option close"}
                >
                  <div />
                </div>
              )}
            </div>
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
      );
    }
  }
}
export default Window;
