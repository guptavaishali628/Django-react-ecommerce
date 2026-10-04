
import {Link} from "react-router-dom";

function ProductCard({ product }) {
   
    const BASEURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

    return (
        <Link to={`/products/${product.id}`}>
        <div className="bg-white p-4 rounded shadow mb-4 hover:shadow-lg hover:scale-[1.02] transition-transform p-4 cursor-pointer">
            <img 
            src={`${BASEURL}${product.image}`} 
            alt={product.name} 
            className="w-full h-56 object-cover rounded mb-4"/>

            <h2 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h2>
            {/* <p className="text-gray-600">${product.description}</p> */}
            <p className="text-lg font-bold">${product.price}</p>
        </div>
        </Link>
    )
}
export default ProductCard;