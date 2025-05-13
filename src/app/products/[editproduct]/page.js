"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

import { use } from "react"; // Import the use function
import "../../style.css"
import Link from "next/link";


export default function Page(props){
    const router = useRouter();

    const [name,setname]= useState("");
    const [price,setPrice]= useState("");
    const [color,setColor]= useState("");
    const [company,setCompany]= useState("");
    const [category,setcategory]= useState("");

    const params = use(props.params); // Unwrap the params promise

    useEffect(()=>{
 getProductsDetail()     
    },[]);

    const getProductsDetail = async ()=>{

        let productId = params.editproduct; // Access the unwrapped params  
      let productData =  await fetch("http://localhost:3000/api/products/"+productId);
        productData = await productData.json();
        if(productData.success){
            let result = productData.result;
            setname(result.name);
            setPrice(result.price);
            setColor(result.color);
            setCompany(result.company);
            setcategory(result.category);
        }
        console.log(productData);
        
    }
const updateProduct =async ()=>{
    let productId = params.editproduct; // Access the unwrapped params  
    let data =  await fetch("http://localhost:3000/api/products/"+productId,{
        method:"PUT",
        body:JSON.stringify({name,price,color,company,category})
    });
    data= await data.json();
   
    if(data.result){
        alert("Product has been update");
        router.push("/products"); // Change this to your target route

        
    }
}
    return(
        <div>
            <h1>Update Product</h1>
            <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Product Name" />
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price" />
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Enter Product Color" />
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company" />
            <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Enter Product Category" />
            <button onClick={updateProduct}>Update Product</button>
            <Link href={"/products"}>Products </Link>

        </div>
    )
}