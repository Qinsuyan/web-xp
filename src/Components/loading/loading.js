import './loading.css'
import windowsIcon  from '../../Assets/logo.svg'
function Loading(){
    return (
        <div className="loading-wrap">
            <div className="loading-company">
                <span>Gouyiqin</span>
                <img src={windowsIcon} alt="windows"/>
            </div>
            <div className="loading-system">
                <span>.com</span>
            </div>
            <div className="loading-bar-wrap">
                <div className="loading-bar">
                    <div className="loading-bar-block"/>
                    <div className="loading-bar-block"/>
                    <div className="loading-bar-block"/>
                </div>
            </div>
        </div>
    )
}
export default Loading