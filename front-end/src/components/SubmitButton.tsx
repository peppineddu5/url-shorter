import React, { ButtonHTMLAttributes, ChangeEvent, useEffect, useRef, useState } from 'react'; 
export default function SubmitButton(){
    const [leftH,setLeftH]=useState("7")
    const [left2H,setLeft2H]=useState("7")
    const [leftM,setLeftM]=useState("3.9")
    const [rigth4h,serigth4h]=useState("-4")
    const [rotation,setrotation]=useState(false)
    function startAnimation(e:any){
        e.preventDefault()
        const valueToAdd=leftH=="7"?1:-1
        setLeftH((parseFloat(leftH)+valueToAdd).toString())
        setLeft2H((parseFloat(left2H)+valueToAdd).toString())
        setLeftM((parseFloat(leftM)+valueToAdd).toString())
        serigth4h((parseFloat(rigth4h)-valueToAdd).toString())
        setrotation(!rotation)
    }
    return(
            <button onClick={startAnimation} className='link-button'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" className={rotation?'loading':""}><path d="M0 0h24v24H0z" fill="none"/><path style={{transition:"all 0.2s"}}d={`M${leftM} 12c0-1.71 1.39-3.1 3.1-3.1h4V7H${leftH}c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H${left2H}c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h${rigth4h}v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z`}/></svg></button>
    )
}