import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// console.log(process.env.username, process.env.password); // Log environment variables
// console.log(connectionSrt); // Log connection string

export async function GET() {
   
    let data =[]
        try {
           await mongoose.connect(connectionSrt);
             data = await Product.find();
        } catch (error) {
            data={success:false}
            console.log(error);
            
            
        }
        

        return NextResponse.json({ result: data ,success:true});
  
}


export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    
    if(!payload.name || !payload.price || !payload.company || !payload.color || !payload.category){
        return NextResponse.json({success:false})

    }else{
        let product = new Product(payload);
        const result = await product.save();
        return NextResponse.json({result,success:true})

    }

}
