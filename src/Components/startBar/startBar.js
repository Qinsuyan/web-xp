import React from "react";
import "./startBar.css";
import windowsIcon from "../../Assets/logo.svg";
class StartBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.clockTicker = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.clockTicker);
  }
  timeRender() {
    return (
      <div className={"start-bar-clock"}>
        {this.state.time.getHours() > 9
          ? this.state.time.getHours()
          : "0" + this.state.time.getHours()}
        :
        {this.state.time.getMinutes() > 9
          ? this.state.time.getMinutes()
          : "0" + this.state.time.getMinutes()}
        :
        {this.state.time.getSeconds() > 9
          ? this.state.time.getSeconds()
          : "0" + this.state.time.getSeconds()}
      </div>
    );
  }
  taskRender(){
    let tasks = this.props.windows.filter(i => {
      return i.task
    })
    return tasks.map((i,index)=>{
      return (
          <div onClick={this.props.onToggleWindowMini.bind(this,i.key)} key={"task-"+i.key} className={"start-bar-task "+(index === tasks.length -1?"top":"")}>
            {i.icon && <img alt={i.title} src={i.icon}/>}
            <span>{i.title}</span>
          </div>
      )
    })
  }
  render() {
    return (
      <footer className="start-bar">
        <div id="start-button">
          <img alt="start-menu" src={windowsIcon} />
          <span>开始</span>
        </div>
        {this.taskRender()}
        {this.timeRender()}
      </footer>
    );
  }
}
export default StartBar;
