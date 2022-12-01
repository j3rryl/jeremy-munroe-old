import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../assets/css/navbar.css';

function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_navbar");
	};

	return (
		<header className='h-20 w-full px-8 z-10 bg-white flex items-center justify-between'>
			<h3 className='font-caveat text-2xl'>Jeremy Munroe</h3>
			<nav ref={navRef} className='flex items-center text-2xl sm:text-xl font-caveat'>
				<Link to='/home'>Home</Link>
				<Link to='/about'>About</Link>
        		<Link to='/projects'>Case Studies</Link>
				<button
					className="nav-btn sm:hidden visible p-1 text-3xl absolute top-10 right-10"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn p-1 text-3xl sm:hidden visible opacity-100' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;