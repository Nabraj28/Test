import './Artiststyle.css'
import { Artiststypes } from '../../types';
import { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export const Artists = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollOffset: number) => {
        const adjustedOffset = window.innerWidth >= 1024 ? 200 : 100;
        const finalOffset = scrollOffset * adjustedOffset / 100;

        if (containerRef.current) {
            containerRef.current.scrollLeft += finalOffset;
        }
    }

    const data: Artiststypes[] = [
        { id: 1, name: "Touka", src: "/mask.jpg", profession: "Singer" },
        { id: 2, name: "Adarsha Mishra", src: "/comedy.jpg", profession: "Comedian" },
        { id: 3, name: "Taylor Swift", src: "/ts.jpg", profession: "Singer" },
        { id: 4, name: "Touka", src: "/mask.jpg", profession: "Singer" },
        { id: 5, name: "Touka", src: "/mask.jpg", profession: "Singer" },
        { id: 6, name: "Adarsha Mishra", src: "/comedy.jpg", profession: "Comedian" },
        { id: 7, name: "Taylor Swift", src: "/ts.jpg", profession: "Singer" },
        { id: 8, name: "Touka", src: "/mask.jpg", profession: "Singer" },

    ];
    return (
        <div className="maincontainer">
            <FaArrowLeft className="scroll-arrow left" onClick={() => handleScroll(-100)} />
            <div className="artistcontainer" ref={containerRef}>
                {data.map((item) => (
                    <div className="subcontainer" key={item.id}>
                        <img src={item.src} alt="image" className="imgcontainer" />
                        <p className="name">{item.name}</p>
                        <p className="prof">{item.profession}</p>
                    </div>
                ))}
            </div>
            <FaArrowRight className="scroll-arrow right" onClick={() => handleScroll(100)} />
        </div>
    )
}
