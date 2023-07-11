import React, { ChangeEvent,  useState } from 'react'; 
import SubmitButton from './SubmitButton';
import axios from 'axios';
export default function Form(){
    const [value,setValue]=useState("")
    const [resultClass,setResultClass]=useState("green")
    const [resultText,setResultText]=useState("")
    const [requesting,setRequesting]=useState(false)
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setValue(event.target.value)
    }

    return(<>
        <div className="result">
            <h2>Result:<span className={resultClass}>{resultText}</span></h2>
            <button className='copy' onClick={(e)=>{
                if(resultClass==="green"){
                    navigator.clipboard.writeText(resultText)
                }
            }}></button>
        </div>
        <form>
            <input className="link-button input-url" type='text' name="url" id="url"value={value} onChange={handleChange} />
            <SubmitButton  onSubmit={()=>{
                setRequesting(true)
                axios.post("/generate-link",{url:value}).then(function (response) {
                    setRequesting(false)
                    setResultClass("green")
                    setResultText(window.location.href+response.data.code);
                  })
                  .catch(function (error) {
                    setRequesting(false)
                    setResultClass("red")
                    if(error.response.data.error){
                        setResultText(error.response.data.error)
                        return
                    }
                    setResultText("errore sconosciuto")
                  })
            }} active={requesting}/>
        </form>
        </>
    )
}