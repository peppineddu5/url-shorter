import express from 'express';
import { addCode, searchCode } from './lib/db';
import {  generateCodeValidated } from './lib/general';
import cors from "cors"

const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const regex = new RegExp(expression);

const app = express();
app.use(express.static('../front-end/build'))
app.use(express.json());
app.use(cors())

app.post("/generate-link",async(req,res)=>{
    if(!req.body.url){
        res.statusCode=400
        res.json({error:"you didn't give me a url"})
        return
    }
    
    if (!req.body.url.match(regex)) {
        res.statusCode=400
        res.json({error:"give a correct url"})
        return
    } 
    const code=await generateCodeValidated()
    await addCode(code,req.body.url)
    
    res.json({code:code});
})

app.get("/:code",async(req,res)=>{
    if(req.params.code.length!=5){
        res.redirect("/")
        return
    }
    const table=await searchCode(req.params.code)
    if(table.length!=1){
        res.redirect("/")
        return
    }
    let url=table[0].url
    
    if (!/^https?:\/\//i.test(url))
        url = 'http://' + url;
    
    res.redirect(302,url)
   
})

app.listen(3000, () => {
    console.log('3000!');
})