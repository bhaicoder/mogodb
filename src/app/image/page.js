"use client"

import { useState } from "react"

export default function Page(){
    const [file,setFile]=useState()
    const onSubmit2 =async(e)=>{
        e.preventDefault();
        console.log(file);
        const data = new FormData();
        data.set('file',file);
        let  result = await fetch("api/upload",{
            method:"POST",
            body:data
        });
        result = await result.json();
        console.log(result);
        if(result.success){
            alert("File Uploded")
        }
        
        

    }
    return(
        <div>
             <h1>Upload Image</h1>

            <form onSubmit={onSubmit2}>
                <input
                type="file"
                name="file"
                onChange={(e)=>setFile(e.target.files?.[0])}/>
                <button type="submit">Upload Image</button>
            </form>
        </div>
    )
}