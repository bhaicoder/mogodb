import Image from "next/image";
import './style.css'
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <Link href="/addproduct">ADD products</Link><br/>
    <Link href="/products">Products Lists</Link>

   </div>
  );
}
