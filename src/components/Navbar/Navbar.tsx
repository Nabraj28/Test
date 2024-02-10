import './Navbarstyles.css'
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaBehanceSquare } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Navlinktypes } from '../../types';

const Navbar = () => {

    const Links: Navlinktypes[] = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Event", link: "/event" },
        { name: "Contact Us", link: "/contactus" }
    ];

    return (
        <div className='navbar' >
            <div className='logo' ><Link to="/" style={{ textDecoration: 'none' }} ><p className='txtlogo' >REVEL</p></Link></div>
            <div className='components' >
                <div className='ulcontainer' >
                    <ul>
                        {
                            Links.map((link) => (
                                <li key={link.name} >
                                    <NavLink

                                        className={({ isActive }) =>
                                            isActive ? "activenavlink" : "navlink"
                                        }
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
                <div className='mediamaincontainer' >
                    <div className='mediacontainer' >
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

export default Navbar