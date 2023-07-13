import React from "react"
import { FaFacebookSquare, FaGithub, FaLinkedin} from "react-icons/fa";
import "./footer.css"



const Footer = () => {
  return (
    <div className="footer">
    <div className="footerContainer">
      <div className="socialIcons">
        <a href="/"><FaFacebookSquare/></a>
        <a href="/"><FaGithub/></a>
        <a href="/"><FaLinkedin/></a>
      </div>
      <div className="footerNav">
        <ul>
          <li><a href="/"> Home</a></li>
          <li><a href="/store"> Store</a></li>
          <li><a href="/addNewFurniture"> Personalise</a></li>
          <li><a href="/about"> About Us</a></li>
        </ul>
      </div>
      <div className="footerBottom">
        <p>Copyright &copy;2023 Designed by<span className="designer">Joan and Jessie</span></p>

      </div>
    </div>
    </div>
    
       
  );
}

export default Footer;
