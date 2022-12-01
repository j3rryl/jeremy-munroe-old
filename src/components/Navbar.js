import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../assets/css/navbar.css';

function Navbar() {
	const navRef = useRef();
  const [mobile, setMobile]=useState(false)
  useEffect({
    
  }, [mobile])
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className=' font-caveat text-2xl'>Jeremy Munroe</h3>
			<nav ref={navRef}>
				<Link to='/home'>Home</Link>
				<Link to='/about'>About</Link>
        <Link to='/projects'>Case Studies</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;