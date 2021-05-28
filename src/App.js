import './App.css';
import React from "react";
import Loading from "./Components/loading/loading";
import Welcome from "./Components/welcome/welcome";
import BlueScreen from "./BlueScreen/blueScreen";
import {IsCompatible} from "./util"
import Desk from "./Components/desk/desk";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            desk:"",
            backImage:new Image()
        }
        this.state.backImage.src = "../../Assets/background.jpg"
    }
    componentDidMount = () => {
        setTimeout(()=>{
            let pf = IsCompatible(navigator.platform);
            if(pf === ""){
                this.setState({
                loading:false,
            })
            setTimeout(()=>{
                this.setState({
                    desk:"desk"
                })
            },3000)
            }else{
                this.setState({
                    desk:"blue",
                    loading:false,
                })
            }
        },4000)
    }
    statusRender = ()=>{
        if(this.state.loading){
            return (
                <Loading/>
            )
        }
        switch (this.state.desk){
            case "":{
                return (
                    <Welcome/>
                )
            }
            case "desk":{
                if(this.state.backImage.complete){
                    return (
                        <Desk back={this.state.backImage}/>
                    )
                }else{
                    return (
                        <Welcome/>
                    )
                }
            }
            case "blue":{
                return (
                    <BlueScreen/>
                )
            }
            default:{
                return (
                    <Loading/>
                )
            }
        }
    }
    render() {
        return (
            <div className="App">
                {this.statusRender()}
            </div>
        );
    }
}
export default App;
