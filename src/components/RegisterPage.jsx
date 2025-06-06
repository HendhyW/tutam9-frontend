import bg from "../assets/bg-loginpage.svg";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import swal from 'sweetalert2';
import axios from "axios";

export default function RegisterPage(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try{
            if(!email && !password && !name) {
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Silahkan masukkan nama, email dan password terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                throw new Error("Please fill in all fields");
            }
            else if(!email && !password) {
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Silahkan masukkan email dan password terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                throw new Error("Please fill in all fields");
            }
            else if(!email && !name) {
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Silahkan masukkan email dan nama terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                throw new Error("Please fill in all fields");
            }
            else if(!password && !name) {
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Silahkan masukkan password dan nama terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                throw new Error("Please fill in all fields");
            }
            else if(!email) {
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Silahkan masukkan email terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                throw new Error("Please fill in all fields");
            }
            else if(!password) {
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Silahkan masukkan password terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                throw new Error("Please fill in all fields");
            }
            else if(!name) {
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Silahkan masukkan nama terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                throw new Error("Please fill in all fields");
            }
            else{
                if(!emailRegex.test(email)) {
                    swal.fire({
                        icon: "error",
                        iconColor: "#FFFFFF",
                        text: "Format email tidak valid",
                        color: "#FFFFFF",
                        background: "#303655"
                    });
                    throw new Error("Invalid email format");
                }
                if(!passRegex.test(password)) {
                    swal.fire({
                        icon: "error",
                        iconColor: "#FFFFFF",
                        text: "Password harus mengandung minimal 8 karakter, dengan minimal 1 huruf, 1 angka dan 1 simbol",
                        color: "#FFFFFF",
                        background: "#303655"
                    });
                    throw new Error("Invalid password format");
                }
                
                    const response = await axios.post("https://tutam9-backend-pink.vercel.app/user/register",null,  {
                        params: {
                            name,
                            email,
                            password
                        }
                    });
                    console.log(response.data);
                    if(response.data.payload) {
                        swal.fire({
                            icon: "success",
                            iconColor: "#FFFFFF",
                            text: "Register Berhasil",
                            color: "#FFFFFF",
                            background: "#303655"
                        });
                        navigate("/login");
                    }
                
            }
        } catch (error) {
            if (error.response) {
                console.error("Pesan dari backend:", error.response.data.message);
                alert(error.response.data.message);
            }
        }
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-blue-950">
            <div
                className="h-[85%] w-[80%] bg-no-repeat bg-center bg-cover rounded-3xl shadow-lg flex items-center justify-center"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="w-[40%] h-[80%] bg-white rounded-3xl shadow-lg flex-col flex items-center justify-center bg-gradient-to-b from-sky-700 to-blue-900">
                    <p1 className="text-3xl font-bold text-white pb-2">Register Now</p1>
                    <div className="w-[85%] h-[80%] flex flex-col items-center justify-center bg-white rounded-3xl opacity-75">
                        
                        <p className="text-black  self-start mb-2 pl-6 ">
                            Name
                        </p>
                        <div class="w-full max-w-sm min-w-[200px] px-3">
                            <div class="relative">
                                <input
                                class="peer w-full bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                                <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-black text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                                Name
                                </label>
                            </div>
                        </div>
                        
                        <p className="text-black  self-start mb-2 pl-6 mt-6">
                            Email
                        </p>
                        <div class="w-full max-w-sm min-w-[200px] px-3">
                            <div class="relative">
                                <input
                                class="peer w-full bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-black text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                                Email
                                </label>
                            </div>
                        </div>

                        <p className="text-black  self-start mt-8 mb-2 pl-6">
                            Password
                        </p>
                        <div class="w-full max-w-sm min-w-[200px] px-3">
                            <div class="relative">
                                <input
                                class="peer w-full bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                />
                                <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-black text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                                Password
                                </label>
                            </div>
                        </div>
                        <button className="bg-blue-800 hover:font-bold hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-8 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"  onClick={handleRegister}>
                            <p className="text-white font-bold">Register</p>
                        </button>
                    </div>

                    <div className="flex">
                    <p className="text-white text-center pr-6">
                        Already has account?      
                    </p>
                    <p
                        className="text-white underline text-center  hover:font-bold cursor-pointer"
                        onClick={() => navigate("/login")}
                        >
                        Log In Here
                    </p>
                </div>

                </div>
                
            </div>
        </div>
    );
}