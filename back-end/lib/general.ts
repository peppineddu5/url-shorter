import { searchCode } from "./db";

const possibleCharacter="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-_~!+,*:@"
const generateCode=(length:number=5)=>{
    let code="";
    for (let i = 0; i < length; i++) {
        code+=possibleCharacter[Math.floor(Math.random() * possibleCharacter.length)]
    }
    return code;
}
const generateCodeValidated=async()=>{
    let code=generateCode();
    let repeat=true
    while(repeat){
        const res=await searchCode(code)
          if(res.length==1)
            code=generateCode();
          else
            return code
    }
    return code
}
export {generateCodeValidated}
