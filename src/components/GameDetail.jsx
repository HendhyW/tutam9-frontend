import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./element/navbar";

export default function GameDetail() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://tutam9-backend-pink.vercel.app/game/${id}`);
                setGame(res.data.payload);

                const reviewsRes = await axios.get(`https://tutam9-backend-pink.vercel.app/review/game/${id}`);
                setReviews(reviewsRes.data.payload);
            } catch (error) {
                console.error("Error fetching detail:", error);
            }
        };
        fetchData();
    }, [id]);

    if (!game) return <div className="text-white p-10">Loading...</div>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950 text-white">
            <Navbar />
            <div className="p-10 flex flex-col items-center">
                <img src={game.image_url} className="w-64 h-64 object-cover rounded-lg mb-6" alt={game.name} />
                <h1 className="text-4xl font-bold">{game.name}</h1>
                <p className="text-lg">{game.genre}</p>
                <p className="mt-4 max-w-xl text-center">{game.description}</p>
                <p className="mt-2">Released on: {game.release_date}</p>
                <p className="mt-2 font-bold">{game.average_rating} / 5 from {game.total_reviews} reviews</p>

                <h2 className="text-2xl mt-10 mb-4">Reviews</h2>
                {reviews.length === 0 ? (
                    <p className="text-gray-400">No reviews yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {reviews.map((rev) => (
                            <li key={rev.id} className="bg-white text-black p-4 rounded-lg shadow-md max-w-xl">
                                <p className="font-semibold">Rating: {rev.rating}/5</p>
                                <p>{rev.review_text}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
