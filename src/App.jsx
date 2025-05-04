import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/Profile";
import GamePage from "./components/GamePage";
import GameDetail from "./components/GameDetail";

function App() {

  return (
    <BrowserRouter>
    <Routes>

      {/* redirect ke login */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/game" element={<GamePage/>}/>

      <Route path="/home" element={<HomePage/>}/>

      <Route path="/profile" element={<ProfilePage/>}/>

      <Route path="/game/:id" element={<GameDetail />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
