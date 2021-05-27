import "./blueScreen.css"
function BlueScreen (){
    return (
        <div className={"blue-screen-wrap"}>
            <div className={"blue-screen"}>
                <p>A problem has been detected and Windows has been shutdown to prevent damage to your computer.</p>
                <p>NI_DE_PINGTAI_BUSHI_X86_A</p>
                <p>If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:</p>
                <p>Check to make sure your cpu is x86 architecture.</p>
                <p>Connect to the Internet and try to buy a new computer.</p>
                <p>Technical Information:</p>
                <p>*** STOP 0x0000000A (0x00000000,0xD0000002,0x00000001,0x8082C582)</p>
            </div>
        </div>
    )
}
export default BlueScreen