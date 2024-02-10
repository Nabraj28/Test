import './Gallerystyles.css'
import '../Artists/Artiststyle.css'
import { Gallerytypes } from '../../types'
import { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Gallery = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollOffset: number) => {
        const adjustedOffset = window.innerWidth >= 1024 ? 500 : 250;
        const finalOffset = scrollOffset * adjustedOffset / 250;

        if (containerRef.current) {
            containerRef.current.scrollLeft += finalOffset;
        }
    }

    const data: Gallerytypes[] = [
        { id: 1, src: "/mask.jpg" },
        { id: 2, src: "/bh.jpg" },
        { id: 3, src: "/ts.jpg" },
        { id: 4, src: "/mask.jpg" },
        { id: 5, src: "/bh.jpg" },
        { id: 6, src: "/ts.jpg" },
    ]
    return (
        <>

            <div className='gallerycontainer'  >
                <FaArrowLeft className="scroll-arrow left" onClick={() => handleScroll(-250)} />
                <div className="artistcontainer" ref={containerRef}>
                    {data.map((data) => (
                        <div className='subcontainer' >
                            <img key={data.id} src={data.src} alt="" className='imggallery' />
                        </div>
                    ))
                    }
                </div>
                <FaArrowRight className="scroll-arrow right" onClick={() => handleScroll(250)} />
            </div>
        </>
    )
}

export default Gallery
