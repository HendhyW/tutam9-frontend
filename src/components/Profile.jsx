import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./element/navbar";
import swal from "sweetalert2";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("id");
        if (!userId) {
            swal.fire({
                icon: "error",
                iconColor: "#FFFFFF",
                text: "User ID not found. Please log in again.",
                color: "#FFFFFF",
                background: "#303655"
            });
            return;
        }

        axios.get(`https://tutam9-backend-pink.vercel.app/user/${userId}`)
            .then((res) => {
                const userData = res.data.payload;
                setUser(userData);

                // Fetch reviews using user ID
                axios.get(`https://tutam9-backend-pink.vercel.app/review/byuser/${userId}`)
                    .then((res) => setReviews(res.data.payload))
                    .catch((err) => console.error("Error fetching reviews:", err));
            })
            .catch((err) => console.error("Error fetching user:", err));
    }, []);

    const handleDelete = async (reviewId) => {
        const confirm = await swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this review?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            background: "#303655",
            color: "#ffffff"
        });

        if (confirm.isConfirmed) {
            try {
                await axios.delete(`https://tutam9-backend-pink.vercel.app/review/delete/${reviewId}`);
                setReviews(reviews.filter(r => r.id !== reviewId));
                swal.fire({
                    icon: "success",
                    text: "Review deleted successfully.",
                    background: "#303655",
                    color: "#ffffff"
                });
            } catch (err) {
                console.error("Error deleting review:", err);
                swal.fire({
                    icon: "error",
                    text: "Failed to delete review.",
                    background: "#303655",
                    color: "#ffffff"
                });
            }
        }
    };

    if (!user) {
        return <div className="text-white pt-24 px-6">Loading...</div>;
    }

    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-slate-900 to-blue-950 pt-24 px-6">
            <Navbar />
            <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg text-white mb-10">
                <h1 className="text-3xl font-bold mb-4">Profile</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>

            <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">Your Comments</h2>
                {reviews.length === 0 ? (
                    <p className="text-gray-400">You haven’t posted any comments.</p>
                ) : (
                    <ul className="space-y-4">
                        {reviews.map((review) => (
                            <li key={review.id} className="bg-gray-700 p-4 rounded-lg shadow">
                                <p className="text-sm text-gray-300">Game ID: <strong>{review.game_id}</strong></p>
                                <p className="mb-2">Rating: {review.rating} / 5</p>
                                <p className="mb-2">"{review.review_text}"</p>
                                <button
                                    onClick={() => handleDelete(review.id)}
                                    className="mt-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
