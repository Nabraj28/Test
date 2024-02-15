import { Gallerytypes } from '../../types'
import { useRef, useState, useEffect } from 'react';
import { GalleryContainer, GalleryImage, GalleryLeftButton, GalleryMainContainer, GalleryRightButton } from './Gallery.styled';


const Gallery = () => {

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
        <GalleryMainContainer>
            {scrollLeft > 0 && <GalleryLeftButton onClick={() => handleScroll(-250)} />}
            <GalleryContainer ref={containerRef} >
                {
                    data.map((item) => (
                        <GalleryImage key={item.id} src={item.src} />
                    ))
                }
            </GalleryContainer>
            {scrollLeft < scrollWidth - clientWidth && <GalleryRightButton onClick={() => handleScroll(250)} />}
        </GalleryMainContainer>
    )
}

export default Gallery
