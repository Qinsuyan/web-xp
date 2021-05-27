import "./welcome.css"
function Welcome (){
    return (
        <div className="welcome-wrap">
            <div className="welcome-block-dark"/>
            <div className="welcome-line"/>
            <div className="welcome-block-light">
                欢迎使用
            </div>
            <div className="welcome-line"/>
            <div className="welcome-block-dark"/>
        </div>
    )
}
export default Welcome