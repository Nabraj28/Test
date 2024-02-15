
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaBehanceSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Navlinktypes } from '../../types';
import { Components, Linkscontainer, Logo, Nav, StyledMediaContainer, StyledNavLink, StyledSearchContainer } from './Navbar.styled';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {

    const Links: Navlinktypes[] = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Event", link: "/event" },
        { name: "Contact Us", link: "/contactus" }
    ];

    return (
        <>
            <Nav>
                <Logo>
                    <p>REVEL</p>
                </Logo>
                <Components>
                    <Linkscontainer>
                        {Links.map((link) => (
                            <li key={link.name} >
                                <StyledNavLink to={link.link} >
                                    {link.name}
                                </StyledNavLink>
                            </li>
                        ))}
                    </Linkscontainer>
                    <span></span>
                    <StyledMediaContainer>
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
                    </StyledMediaContainer>
                    <span></span>
                    <StyledSearchContainer>
                        <IoSearch size={20} color='black' />
                    </StyledSearchContainer>
                </Components>
            </Nav>
        </>
    )
}

export default Navbar