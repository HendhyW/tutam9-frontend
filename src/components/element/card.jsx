import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Card() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://tutam9-backend-pink.vercel.app/game");
                setProducts(response.data.payload);
            } catch (error) {
                if (error.response) {
                    console.error("Pesan dari backend:", error.response.data.message);
                    alert(error.response.data.message);
                } else {
                    console.error(error);
                }
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="w-screen flex-wrap justify-center gap-4 grid lg:grid-cols-3 pt-20 md:grid-cols-2 sm:grid-cols-1">
            {products.map((product, index) => (
                <a
                    key={index}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    onClick={() => navigate(`/game/${product.id}`)}
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={product.image_url}
                        alt={product.name}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-left w-full items-start">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {product.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {product.genre} 
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {product.description}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {product.release_date}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {product.average_rating} / 5
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            based of {product.total_reviews} reviews
                        </p>
                    </div>

                </a>
            ))}
        </div>
    );
}
