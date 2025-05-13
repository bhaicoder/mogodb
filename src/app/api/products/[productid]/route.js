import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,context){
    const { productid } = await context.params;
    const filter = { _id: productid };
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(connectionSrt);
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}

export async function GET(request,context){
    const { productid } = await context.params;
    const record = { _id: productid };
    await mongoose.connect(connectionSrt);
    const result = await Product.findById(record)
    return NextResponse.json({result,success:true})
}

export async function DELETE(request,context){
    const { productid } = await context.params;
    const record = { _id: productid };
    await mongoose.connect(connectionSrt);
    const result = await Product.deleteOne(record);
    return NextResponse.json({result,success:true})
}