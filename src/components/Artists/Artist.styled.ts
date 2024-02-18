import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ButtonProps {
    isdisabled?: boolean;
}

export const ArtistMainContainer = styled.section`
    overflow: hidden;
    position: relative;
    margin-top: 10px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       margin-top: 0px;
    }
`
export const ArtistContainer = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
`
export const Artist = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`
export const ArtistImage = styled.img`
    width: 150px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    object-fit: cover;
    @media (max-width: ${({ theme }) => theme.mobile}){
       width: 80px;
    }
`
export const ArtistName = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 500;
    font-size: 20px;
    color: black;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
    }
    `
export const ArtistProfession = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 500;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
    }

`

export const ArtistNavigationContainer = styled.div`
max-width: 100%;
display: none;
justify-content: flex-end;
padding: 10px;
gap: 5px;
${ArtistMainContainer}:hover & {
    display: block;
    display: flex;
}

`

const ButtonStyles = css<ButtonProps>`
    background-color: white;
    
    cursor: ${({ isdisabled }) => (isdisabled ? "default" : "pointer")};
    color: ${({ isdisabled }) => (isdisabled ? "#865CD04D" : "#865CD0")};
    border: 1px solid;
    border-color: ${({ isdisabled }) => (isdisabled ? "#865CD04D" : "#865CD0")};
    border-radius: 5px;
    font-size: 25px;
    transition: opacity 0.3s ease;
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`
export const LeftButton = styled(IoIosArrowBack) <ButtonProps>`
    ${ButtonStyles}
    
`
export const RightButton = styled(IoIosArrowForward) <ButtonProps>`
   ${ButtonStyles}


`