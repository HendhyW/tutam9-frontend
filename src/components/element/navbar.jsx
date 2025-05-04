import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <nav className="bg-black text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
        <div className="flex transform transition duration-400 hover:scale-105 cursor-pointer">
            <span className="ml-4 text-xl font-semibold flex-1" onClick={() => navigate("/home")}>
            Epic Games
            </span>
        </div>
        <ul className="flex space-x-4 text-white text-xl">
            <li
            className="cursor-pointer text-white hover:text-[#525869] hover:scale-105 w-32 flex-1"
            onClick={() => navigate("/home")}
            >
            Home
            </li>
            <li
            className="cursor-pointer text-white hover:text-[#525869] hover:scale-105 w-32 flex-1"
            onClick={() => navigate("/game")}
            >
            Games
            </li>
            <li
            className="cursor-pointer text-white hover:text-[#525869] hover:scale-105 w-32 flex-1"
            onClick={() => navigate("/profile")}
            >
            Profile
            </li>
            <li
            className="cursor-pointer text-white hover:text-[#c0cae3] hover:scale-105 w-32 flex-1 bg-red-600 rounded-xl text-center"
            onClick={() => {
                localStorage.removeItem("user")
                navigate("/login")
            }}
            >
            Log Out
            </li>
        </ul>
        </nav>
    )
}
