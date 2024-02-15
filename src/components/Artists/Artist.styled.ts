import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


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
export const LeftButton = styled(IoIosArrowBack)`
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    background-color: white;
    cursor: pointer;
    border-radius: 100%;
    color: ${({ theme }) => theme.maincolor};
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.445);
    padding: 20px;
    font-size: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
    @media (max-width: ${({ theme }) => theme.pc}){
        display: none;
       
    }
    ${ArtistMainContainer}:hover & {
        opacity: 1;
    }
`
export const RightButton = styled(IoIosArrowForward)`
    position: absolute;
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
    background-color: white;
    cursor: pointer;
    border-radius: 100%;
    color: ${({ theme }) => theme.maincolor};
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.445);
    padding: 20px;
    font-size: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
    @media (max-width: ${({ theme }) => theme.pc}){
        display: none;
       
    }
    ${ArtistMainContainer}:hover & {
        opacity: 1;
    }
`