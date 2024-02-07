import '../../styles/Footer.css'
import { CiCircleQuestion } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";


export const Footer = () => {
    return (
        <div className='footermain' >
            <div className="footercard">
                <div className="help">
                    <CiCircleQuestion className='question' color='#865CD0' />
                </div>
                <div className="footerinfo">
                    <p className='inquiry' >For More Inquiry</p>
                    <div className='phoneemail' >
                        <PiPhoneThin className='phoneicon' />
                        <p className='petext' >9856052581 | 9846511962</p>
                    </div>
                    <div className='phoneemail' >
                        <img src="/phone.png" alt="phone" className='emailicon' />
                        <p className='petext' >Contact@dvorakinovation.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
