import "./browserSecurityTip.css"
function BrowerSecurityTip(props){
    return (
        <div className={"browser-security-tip-wrap"}>
            <p>⚠️为了您的信息安全，请勿在此浏览器中输入任何敏感信息！</p>
            <div className={"button button-normal"} onClick={props.onWindowClose.bind(this,"browser-tip")}>确定</div>
        </div>
    )
}
export default BrowerSecurityTip