import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import "./index.css"

const Footer = () => {
    return(
        <div className="footer-bg-container">
            <h1 className="footer-title">Contact Us</h1>
            <p className="footer-name">123 Anywhere St.Any City, ST 12345(123) 456-7890 hello@flygreatsite.com</p>
            <div>
                <FaFacebookF className="icon"/>
                <FaTwitter className="icon"/>
                <IoLogoInstagram className="icon"/>
            </div>
        </div>
    )
}

export default Footer