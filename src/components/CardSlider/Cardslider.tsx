
import { Cardtypes } from '../../types';
import React, { useRef, useState, useEffect } from 'react';

import { AddButton, AddButtonText, CardButtonContainer, CardCalendarIcon, CardDetails, CardFlexContainer, CardImage, CardInfo, CardLeftButton, CardLeftButtonContainer, CardLocationIcon, CardMainContainer, CardRightButton, CardRightButtonContainer, CardSubContainer, CardText, CardTitle, DetailsContainer, EventDetails, RupeesImage, RupeesText, UpcomingText } from './Card.styled';


const Cardslider: React.FC = () => {

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
        const adjustedOffset = window.innerWidth >= 1024 ? 400 : 200;
        const finalOffset = scrollOffset * adjustedOffset / 200;

        if (containerRef.current) {
            containerRef.current.scrollLeft += finalOffset;
        }
    };

    const data: Cardtypes[] = [
        { id: 1, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 2, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 3, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 4, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 5, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 6, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
    ]
    return (
        <CardMainContainer>
            <UpcomingText>Upcoming Events</UpcomingText>
            <CardLeftButtonContainer>
                {scrollLeft > 0 && <CardLeftButton onClick={() => handleScroll(-200)} />}
            </CardLeftButtonContainer>
            <CardFlexContainer ref={containerRef} >
                {
                    data.map((data) => (
                        <CardSubContainer key={data.id} >
                            <CardImage src={data.src} />
                            <CardInfo>
                                <CardTitle>{data.title}</CardTitle>
                                <DetailsContainer>
                                    <CardDetails>
                                        <EventDetails>
                                            <CardCalendarIcon />
                                            <CardText>{data.date}</CardText>
                                        </EventDetails>
                                        <EventDetails>
                                            <CardLocationIcon />
                                            <CardText>{data.location}</CardText>
                                        </EventDetails>
                                        <EventDetails>
                                            <RupeesImage src='/Rupees.svg' />
                                            <RupeesText>{data.cash}</RupeesText>
                                        </EventDetails>
                                    </CardDetails>
                                    <CardButtonContainer>
                                        <AddButton>
                                            <AddButtonText>Add</AddButtonText>
                                        </AddButton>
                                    </CardButtonContainer>
                                </DetailsContainer>
                            </CardInfo>
                        </CardSubContainer>
                    ))

                }
            </CardFlexContainer>
            <CardRightButtonContainer>
                {scrollLeft < scrollWidth - clientWidth - 1 && <CardRightButton onClick={() => handleScroll(200)} />}
            </CardRightButtonContainer>
        </CardMainContainer>
    )
}

export default Cardslider
