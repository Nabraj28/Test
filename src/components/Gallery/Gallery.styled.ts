import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface GalleryProps {
    isdisabled?: boolean;
}

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
export const GalleryNavigationContainer = styled.div`
display: none;
@media (min-width: 1024px) {
    display: none;
    ${GalleryMainContainer}:hover & {
        max-width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        gap: 5px; 
    }
}

`

const GalleryButtonStyles = css<GalleryProps>`
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
export const GalleryLeftButton = styled(IoIosArrowBack) <GalleryProps>`
    ${GalleryButtonStyles}
    
`
export const GalleryRightButton = styled(IoIosArrowForward) <GalleryProps>`
   ${GalleryButtonStyles}


`