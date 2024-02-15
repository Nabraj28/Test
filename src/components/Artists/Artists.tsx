import { Artiststypes } from '../../types';
import { useRef, useState, useEffect } from 'react';
import { Artist, ArtistContainer, ArtistImage, ArtistMainContainer, ArtistName, ArtistProfession, LeftButton, RightButton } from './Artist.styled';


export const Artists = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [scrollWidth, setScrollWidth] = useState<number>(0);
    const [clientWidth, setClientWidth] = useState<number>(0);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            setScrollLeft(container.scrollLeft);
            setScrollWidth(container.scrollWidth);
            setClientWidth(container.clientWidth);

            const handleScroll = () => {
                setScrollLeft(container.scrollLeft);
                setScrollWidth(container.scrollWidth);
                setClientWidth(container.clientWidth);
            };

            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

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
        <ArtistMainContainer>
            {scrollLeft > 0 && <LeftButton onClick={() => handleScroll(-100)} />}
            <ArtistContainer ref={containerRef} >
                {
                    data.map((item) => (
                        <Artist key={item.id} >
                            <ArtistImage src={item.src} />
                            <ArtistName>{item.name}</ArtistName>
                            <ArtistProfession>{item.profession}</ArtistProfession>
                        </Artist>
                    ))
                }
            </ArtistContainer>
            {scrollLeft < scrollWidth - clientWidth && <RightButton onClick={() => handleScroll(100)} />}
        </ArtistMainContainer>
    )
}
