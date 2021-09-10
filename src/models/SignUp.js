function validateEmail(value){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value)){
        return {valid: true}
    }
    else{
        return {valid: false}
    }

}
export {validateEmail};