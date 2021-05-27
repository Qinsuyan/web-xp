import "./shortcutPlate.css"
function ShortcutPlate (props){
    return (
        <div className={"shortcut-plate"}>
            {props.children}
        </div>
    )
}
export default ShortcutPlate