function IsCompatible(platform){
    if(typeof platform !== "string"){
        return typeof platform
    }
    if(platform.toLowerCase().indexOf("win32")>-1){
        return ""
    }
    if(platform.toLowerCase().indexOf("macintel")>-1){
        return ""
    }
    if(platform.toLowerCase().indexOf("win64")>-1){
        return ""
    }
    return platform
}
export {
    IsCompatible
}