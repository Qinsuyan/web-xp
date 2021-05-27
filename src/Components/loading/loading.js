import './loading.css'
import windowsIcon  from '../../Assets/windows.svg'
function Loading(){
    return (
        <div className="loading-wrap">
            <div className="loading-company">
                <span>Microsoft</span>
                <img src={windowsIcon} alt="windows"/>
            </div>
            <div className="loading-system">
                <span>Windows</span>
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