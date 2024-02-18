
import { Cardtypes } from '../../types';
import React, { useRef, useState, useEffect } from 'react';

import { AddButton, AddButtonText, CardButtonContainer, CardCalendarIcon, CardDetails, CardFlexContainer, CardImage, CardInfo, CardLeftButton, CardLocationIcon, CardMainContainer, CardNavBtnContainer, CardNavigationContainer, CardRightButton, CardSubContainer, CardText, CardTitle, DetailsContainer, EventDetails, RupeesImage, RupeesText, UpcomingText } from './Card.styled';


const Cardslider: React.FC = () => {


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
        const adjustedOffset = window.innerWidth >= 1024 ? 450 : 200;
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
            <CardNavigationContainer>
                <UpcomingText>Upcoming Events</UpcomingText>
                <CardNavBtnContainer>
                    <CardLeftButton onClick={() => handleScroll(-200)} isdisabled={!(scrollable.left)} />
                    <CardRightButton onClick={() => handleScroll(200)} isdisabled={!(scrollable.right)} />
                </CardNavBtnContainer>
            </CardNavigationContainer>
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
        </CardMainContainer>
    )
}

export default Cardslider
