
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaBehanceSquare } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import { Navlinktypes } from '../../types';
import { Components, Linkscontainer, Logo, Nav, NavHeader, StyledMediaContainer, StyledNavLink, StyledSearchContainer } from './Navbar.styled';
import { IoSearch } from 'react-icons/io5';
import React from "react";

const Navbar: React.FC = () => {

    const Links: Navlinktypes[] = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Event", link: "/event" },
        { name: "Contact Us", link: "/contactus" }
    ];

    return (
        <>
            <NavHeader>
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
            </NavHeader>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default Navbar