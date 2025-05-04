import { Facebook, Twitter, Youtube } from "lucide-react"
import Logo from "../../assets/EpicGamesLogo.svg"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-8">
        {/* Top section with logo and social icons */}
        <div className="flex justify-between items-center mb-8">
            <div>
            <img src={Logo || "/placeholder.svg"} alt="Epic Games Logo" className="h-12" />
            </div>
            <div className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-300">
                <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
                <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
                <Youtube size={24} />
            </a>
            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Footer links section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Games Column */}
            <div>
            <h3 className="text-lg font-bold mb-4">Games</h3>
            <ul className="space-y-2">
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Fortnite
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Fall Guys
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Rocket League
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Unreal Tournament
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Infinity Blade
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Shadow Complex
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Robo Recall
                </a>
                </li>
            </ul>
            </div>

            {/* Marketplaces Column */}
            <div>
            <h3 className="text-lg font-bold mb-4">Marketplaces</h3>
            <ul className="space-y-2">
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Epic Games Store
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Fab
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Sketchfab
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    ArtStation
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Store Refund Policy
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Store EULA
                </a>
                </li>
            </ul>
            </div>

            {/* Tools Column */}
            <div>
            <h3 className="text-lg font-bold mb-4">Tools</h3>
            <ul className="space-y-2">
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Unreal Engine
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    UEFN
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    MetaHuman
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Twinmotion
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Megascans
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    RealityScan
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Rad Game Tools
                </a>
                </li>
            </ul>
            </div>

            {/* Online Services Column */}
            <div>
            <h3 className="text-lg font-bold mb-4">Online Services</h3>
            <ul className="space-y-2">
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Epic Online Services
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Kids Web Services
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Services Agreement
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Acceptable Use Policy
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Trust Statement
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Subprocessor List
                </a>
                </li>
            </ul>
            </div>

            {/* Company Column */}
            <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    About
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Newsroom
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Students
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    UX Research
                </a>
                </li>
            </ul>
            </div>

            {/* Resources Column */}
            <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Dev Community
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    MegaGrants
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Support-A-Creator
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Creator Agreement
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Distribute on Epic Games
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Unreal Engine Branding
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Fan Art Policy
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Community Rules
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    EU Digital Services Act
                </a>
                </li>
                <li>
                <a href="#" className="text-gray-400 hover:text-white">
                    Epic Pro Support
                </a>
                </li>
            </ul>
            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright section */}
        <div className="text-gray-500 text-sm">
            <p>
            © 2025, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite
            logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are
            trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other
            brands or product names are the trademarks of their respective owners.
            </p>
        </div>
        </footer>
    )
}
