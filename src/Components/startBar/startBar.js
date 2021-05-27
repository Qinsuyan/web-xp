import './startBar.css'
import windowsIcon  from '../../Assets/windows.svg'
function StartBar(){
    return (
        <footer className="start-bar">
            <div id="start-button">
                <img alt="start-menu" src={windowsIcon}/>
                <span>开始</span>
            </div>
        </footer>
    )
}
export default StartBar