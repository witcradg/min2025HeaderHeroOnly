"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<header className="bg-blue-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
				<div className="flex items-center justify-between">
					<div className="flex-shrink-0">
						<Link href="#" className="text-2xl font-bold">Tailwind</Link>
					</div>

					<nav className="hidden md:flex space-x-10 text-lg">
						<Link href="#" className="hover:text-gray-300 transition-all">Home</Link>
						<Link href="#services" className="hover:text-gray-300 transition-all">Services</Link>
						<Link href="#about" className="hover:text-gray-300 transition-all">About Us</Link>
						<Link href="#contact" className="hover:text-gray-300 transition-all">Contact</Link>
					</nav>

					<div className="hidden md:block">
						<Link href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all">
							Get in Touch
						</Link>
					</div>

					<div className="md:hidden flex items-center">
						<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
							<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>

				<div className={`md:hidden mt-5 space-y-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
					<Link href="#" className="block text-lg hover:text-gray-300 transition-all">Home</Link>
					<Link href="#services" className="block text-lg hover:text-gray-300 transition-all">Services</Link>
					<Link href="#about" className="block text-lg hover:text-gray-300 transition-all">About Us</Link>
					<Link href="#contact" className="block text-lg hover:text-gray-300 transition-all">Contact</Link>
				</div>
			</div>
		</header>
	)
}
