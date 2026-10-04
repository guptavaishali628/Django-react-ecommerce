import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
function ProductDetail() {
    const {id} = useParams();
    const BASEURL = import.meta.env.VITE_BACKEND_URL;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${BASEURL}/api/products/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id, BASEURL]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="min-h-screen bg-gray-100 justify-center items-center py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
                <div className="flex flex-col md:flex-row gap-8">
                    <img 
                    src={`${BASEURL}${product.image}`} 
                    alt={product.name} 
                    className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            {product.name}
                        </h1>
                        <p className="text-xl text-gray-600 font-semibold mb-4">
                            ${product.price}</p>
                        <p className="text-gray-700 leading-relaxed">
                            {product.description}
                        </p>
                        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                            Add to Cart 🛒
                        </button>
                    </div>    
                </div>    
            </div>
        </div>    
    );
}
export default ProductDetail;