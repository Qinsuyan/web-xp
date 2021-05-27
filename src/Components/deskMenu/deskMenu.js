import "./deskMenu.css"
function DeskMenu (){
    return (
        <ul className={"desk-menu-ul"}>
            <li className={"disabled"}>排列图标</li>
            <li>刷新</li>
            <li className={"desk-menu-divide"}></li>
            <li className={"disabled"}>粘贴</li>
            <li className={"disabled"}>粘贴快捷方式</li>
            <li className={"desk-menu-divide"}></li>
            <li className={"disabled"}>新建</li>
            <li className={"disabled"}>属性</li>
        </ul>
    )

}
export default DeskMenu