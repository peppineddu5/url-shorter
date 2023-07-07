import React, { useEffect, useRef, useState } from 'react'; 
export default function Card({children}:{children:JSX.Element}){
    const inputRef = useRef<HTMLDivElement>(null);
    const [borderTop,setBorderTop]= useState(7);
    const [borderLeft,setBorderLeft]= useState(7);
    useEffect(()=>{
        function updateSize(){
            const rect=inputRef.current?.getBoundingClientRect()
            if(!rect)
                return
            
            
            setBorderLeft((window.innerWidth/2-rect.width/2)+7)
            setBorderTop((window.innerHeight/2-rect.height/2)+7)
        }
        updateSize()

        window.addEventListener('resize', updateSize);
    })
    return(
        <div className='card' ref={inputRef}>
            {children}
            <div className='border' style={{height:borderTop,right:"100%"}}></div>
            <div className='border' style={{width:borderLeft,left: "100%"}}></div>
        </div>
    )
}