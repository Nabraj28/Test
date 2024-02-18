import { Gallerytypes } from '../../types'
import React, { useRef, useState, useEffect } from 'react';
import { GalleryContainer, GalleryImage, GalleryLeftButton, GalleryMainContainer, GalleryNavigationContainer, GalleryRightButton } from './Gallery.styled';


const Gallery: React.FC = () => {

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
        const adjustedOffset = window.innerWidth >= 1024 ? 400 : 200;
        const finalOffset = scrollOffset * adjustedOffset / 200;
        if (containerRef.current) {
            containerRef.current.scrollLeft += finalOffset;
        }
    };

    const data: Gallerytypes[] = [
        { id: 1, src: "/mask.jpg" },
        { id: 2, src: "/bh.jpg" },
        { id: 3, src: "/ts.jpg" },
        { id: 4, src: "/mask.jpg" },
        { id: 5, src: "/bh.jpg" },
        { id: 6, src: "/ts.jpg" },
    ]
    return (
        <GalleryMainContainer>

            <GalleryContainer ref={containerRef} >
                {
                    data.map((item) => (
                        <GalleryImage key={item.id} src={item.src} />
                    ))
                }
            </GalleryContainer>
            <GalleryNavigationContainer>
                <GalleryLeftButton onClick={() => handleScroll(-200)} isdisabled={!scrollable.left} />
                <GalleryRightButton onClick={() => handleScroll(200)} isdisabled={!scrollable.right} />
            </GalleryNavigationContainer>
        </GalleryMainContainer>
    )
}

export default Gallery
