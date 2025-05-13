"use client"
import { useState } from "react"
import "../style.css"
import Link from "next/link";


export default function Page(){
    const [name,setname]= useState("");
    const [price,setPrice]= useState("");
    const [color,setColor]= useState("");
    const [company,setCompany]= useState("");
    const [category,setcategory]= useState("");

    const addProduct =async()=>{
        
        console.log(name,price,color,company,category);
        let result = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})
        });
        result = await result.json();
        if(result.success){
            alert("product added")
        }else{
            alert("Please enter all feieds")
        }
        
    }
    const removeField=()=>{
         setname("");
         setColor("");
         setCompany("");
         setPrice("");
         setcategory("");
    }

    return(
        <div>
            <h1>Add Product</h1>
            <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Product Name" />
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price" />
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Enter Product Color" />
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company" />
            <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Enter Product Category" />
            <button onClick={addProduct}>Add Product</button>
            <button onClick={removeField}>Clear</button>
            <Link href="/">HOMe</Link>

        </div>
    )
}