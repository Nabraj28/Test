import {
    CallIcon,
    FooterCard,
    FooterContainer,
    FooterIconTextContainer,
    FooterText,
    HelpIcon,
    HelpIconContainer,
    InquiryText,
    MailIcon,
    StyledFooterInfo
} from './Footer.styled';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterCard>
                <HelpIconContainer>
                    <HelpIcon />
                </HelpIconContainer>
                <StyledFooterInfo>
                    <InquiryText>For More Inquiry</InquiryText>
                    <FooterIconTextContainer>
                        <CallIcon />
                        <FooterText>9856052581 | 9846511962</FooterText>
                    </FooterIconTextContainer>
                    <FooterIconTextContainer>
                        <MailIcon />
                        <FooterText>Contact@dvorakinovation.com</FooterText>
                    </FooterIconTextContainer>
                </StyledFooterInfo>
            </FooterCard>
        </FooterContainer>
    )
}

export default Footer
