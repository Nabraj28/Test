import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export const GalleryMainContainer = styled.section`
    overflow: hidden;
    position: relative;
    margin-top: 10px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       margin-top: 0px;
    }
`

export const GalleryContainer = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
`

export const GalleryImage = styled.img`
width: 400px;
aspect-ratio: 5/4;
border-radius: 15px;
@media (max-width: ${({ theme }) => theme.mobile}){
       width: 200px;
    }
`
export const GalleryLeftButtonContainer = styled.div`
   position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background-color: transparent;
    z-index: 1;
    display: flex;
    align-items: center;

`
export const GalleryRightButtonContainer = styled.div`
   position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    background-color: transparent;
    z-index: 1;
    display: flex;
    align-items: center;

`

export const GalleryLeftButton = styled(IoIosArrowBack)`
    position: absolute;
    top: 50%;
    left: 5%;
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
    ${GalleryLeftButtonContainer}:hover & {
        opacity: 1;
    }
`
export const GalleryRightButton = styled(IoIosArrowForward)`
    position: absolute;
    top: 50%;
    right: 5%;
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
    ${GalleryRightButtonContainer}:hover & {
        opacity: 1;
    }
`