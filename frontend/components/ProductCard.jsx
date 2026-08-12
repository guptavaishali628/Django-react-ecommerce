function ProductCard({ product }) {
    return (
        <div className="bg-white p-4 rounded shadow mb-4 hover:shadow-lg hover:scale-[1.02] transition-transform p-4">
            <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-56 object-cover rounded mb-4"/>

            <h2 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="text-gray-600">${product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
        </div>
    )
}
export default ProductCard;