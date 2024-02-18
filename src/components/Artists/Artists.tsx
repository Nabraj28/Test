import React, { useState, useEffect, useRef } from 'react';
import { Artist, ArtistContainer, ArtistImage, ArtistMainContainer, ArtistName, ArtistNavigationContainer, ArtistProfession, LeftButton, RightButton } from './Artist.styled';
import { Artiststypes } from '../../types';

export const Artists: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollable, setScrollable] = useState<{ left: boolean; right: boolean }>({ left: false, right: false });

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                setScrollable({
                    left: scrollLeft > 0,
                    right: scrollLeft + clientWidth < scrollWidth
                });
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleScroll = (scrollOffset: number) => {
        const adjustedOffset = window.innerWidth >= 1024 ? 100 : 50;
        const finalOffset = scrollOffset * adjustedOffset / 100;
        if (containerRef.current) {
            containerRef.current.scrollLeft += finalOffset;
        }
    };

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
        <ArtistMainContainer>
            <ArtistContainer ref={containerRef}>
                {data.map((item) => (
                    <Artist key={item.id}>
                        <ArtistImage src={item.src} />
                        <ArtistName>{item.name}</ArtistName>
                        <ArtistProfession>{item.profession}</ArtistProfession>
                    </Artist>
                ))}
            </ArtistContainer>
            <ArtistNavigationContainer>
                <LeftButton onClick={() => handleScroll(-200)} isdisabled={!scrollable.left} />
                <RightButton onClick={() => handleScroll(200)} isdisabled={!scrollable.right} />
            </ArtistNavigationContainer>
        </ArtistMainContainer>
    );
};
