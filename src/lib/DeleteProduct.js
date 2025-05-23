"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    const router = useRouter();
    // console.log(props.id);
    const deleteRecord = async()=>{
        let response = await fetch("http://localhost:3000/api/products/"+props.id,{
            method:"delete"
        });
        response = await response.json();
        if(response.success){
            alert("deleteed")
            router.push("/products")
        }
    }
    return(
        <button onClick={deleteRecord}>Delete</button>
    )
}