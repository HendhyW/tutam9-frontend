import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './element/navbar';
import CarouselGame from './element/carousel';
import Footer from './element/footer';

// Import gambar
import Logo from '../assets/Logo.svg';
import EldenRing from '../assets/eldenring.svg';
import Forza from '../assets/forza.svg';
import Sekiro from '../assets/sekiro.svg';
import Fortnite from '../assets/fortnite.svg';

export default function HomePage() {
  const navigate = useNavigate();

  const slides = [
    { image: EldenRing, text: "Elden Ring", alt: "Elden Ring game cover" },
    { image: Forza, text: "Forza Horizon 5", alt: "Forza Horizon 5 game cover" },
    { image: Sekiro, text: "Sekiro: Shadows Die Twice", alt: "Sekiro game cover" },
    { image: Fortnite, text: "Fortnite", alt: "Fortnite game cover" }
  ];

  return (
    <div className="relative bg-gradient-to-b from-black to-[#1a1a1a] min-h-screen w-full text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-logo bg-no-repeat bg-center bg-contain">
        <Navbar />
      </section>

      {/* About Us Section - Full Text */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="bg-gray-900/50 p-8 rounded-lg">
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded in 1991, Epic Games is an American company founded by CEO Tim Sweeney. The company is headquartered in Cary, North Carolina and has dozens of offices worldwide. Epic is a leading interactive entertainment company and provider of 3D engine technology. Epic operates one of the world's largest games, Fortnite, which is a vibrant ecosystem of social entertainment experiences including first-party games like Fortnite Battle Royale, LEGO® Fortnite, Rocket Racing, and Fortnite Festival, as well as creator-made experiences. Epic has over 800 million accounts and over 6 billion friend connections across Fortnite, Fall Guys, Rocket League, and the Epic Games Store. The company also develops Unreal Engine, which powers many of the world's leading games and is also adopted across industries such as film and television, broadcast and live events, architecture, automotive, and simulation. Through Fortnite, Unreal Engine, Epic Games Store, and Epic Online Services, Epic provides an end-to-end digital ecosystem for developers and creators to build, distribute, and operate games and other content.
          </p>
        </div>
      </section>

      {/* Games Carousel Section */}
      <section className="py-20 px-5">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Featured Games</h1>
        <div className="max-w-6xl mx-auto">
          <CarouselGame slides={slides} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 text-center">
        <h1 className="text-4xl font-bold mb-6">Explore our games</h1>
        <button
          onClick={() => navigate("/game")}
          className="bg-[#525869] hover:bg-[#3a4050] text-white px-8 py-3 rounded-lg transition-colors duration-300 text-lg font-medium"
        >
          Browse All Games
        </button>
      </section>

      <Footer />
    </div>
  );
}