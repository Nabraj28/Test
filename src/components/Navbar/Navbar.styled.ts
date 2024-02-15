import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    overflow: hidden;
    z-index: 1000;
    @media (max-width: ${({ theme }) => theme.mobile}){
      height: 50px;
  }
`

export const Logo = styled.section`
  padding-left: 70px;
  p{
    font-family: "League Spartan",sans-serif;
    font-size: 30px;
    color: black;
  }
  @media (max-width: ${({ theme }) => theme.mobile}){
   padding-left: 5px;
  }
`

export const Components = styled.section`
    padding-right: 70px;
    display: flex;
    gap: 20px;
    span{
    width: 1.5px;
    height: 20px;
    background-color: #e5e5e5;
    @media (max-width: ${({ theme }) => theme.pc}) {
    display:none;
    }
    }
`
export const StyledMediaContainer = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: ${({ theme }) => theme.pc}) {
    display:none;
  }
`

export const Linkscontainer = styled.section`
    display: flex;
    align-items: center;
    gap: 30px;

    li{
    list-style-type: none;
    
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
    display:none;
  }
`
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-family: 'Roboto', sans-serif;

  &.active {
    border-bottom: 3px solid #D4A373;
  }
`

export const StyledSearchContainer = styled.div`

@media (max-width: ${({ theme }) => theme.pc}) {
    display:none;
  }
`