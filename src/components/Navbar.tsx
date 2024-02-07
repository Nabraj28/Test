import '../../styles/Navbarstyles.css'
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaBehanceSquare } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



export const Navbar = () => {

    const Links = [
        { name: "Home", link: "../pages/Home" },
        { name: "About", link: "../pages/About" },
        { name: "Event", link: "../pages/Event" },
        { name: "Contact Us", link: "../pages/Contactus" }
    ];

    return (
        <div className='navbar' >
            <div className='logo' ><Link to="/" style={{ textDecoration: 'none' }} ><p className='txtlogo' >REVEL</p></Link></div>
            <div className='component' >
                <div className='ulcon' >
                    <ul>
                        {
                            Links.map((link) => (
                                <li key={link.name} >
                                    <NavLink
                                        className="navlink"
                                        to={link.link}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='border' ></div>
                <div className='mediacon' >
                    <div className='media' >
                        <Link to="/" >
                            <FaFacebook size={20} color='black' />
                        </Link>
                        <Link to="/" >
                            <FaTwitter size={20} color='black' />
                        </Link>
                        <Link to="/" >
                            <FaYoutube size={20} color='black' />
                        </Link>
                        <Link to="/" >
                            <FaPinterest size={20} color='black' />
                        </Link>
                        <Link to="/" >
                            <FaBehanceSquare size={20} color='black' />
                        </Link>
                    </div>
                </div>
                <div className='border' ></div>
                <div className='search' >
                    <IoSearch size={20} color='black' />
                </div>
            </div>
        </div>
    )
}
