import React, { ChangeEvent, useEffect, useRef, useState } from 'react'; 
import SubmitButton from './SubmitButton';
export default function Form(){
    const [value,setValue]=useState("")
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setValue(event.target.value)
    }
    return(
        <form>
            <input type='text' name="url" id="url"value={value} onChange={handleChange} />
            <SubmitButton></SubmitButton>
        </form>
    )
}