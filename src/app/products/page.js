import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
    data = await data.json();
    if (data.success) {
        return data.result;
    } else {
        return { success: false }
    }

}
export default async function Page() {
    // console.log("username:", process.env.username);
    // console.log("password:", process.env.password ? "Loaded" : "Missing");
    const products = await getProducts();
    console.log(products);

    return (
        <div>
            <h1>Products Lists</h1>
            <Link href="/">Home</Link>
            <table border="1">
                <thead>
                    <tr>
                        <td>Home</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>


                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => (<tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.company}</td>
                            <td>{item.category}</td>
                            <td><Link href={"products/"+item._id}>Edit</Link>
                            <DeleteProduct id={item._id}/>
                            
                            </td>

                        </tr>



                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}