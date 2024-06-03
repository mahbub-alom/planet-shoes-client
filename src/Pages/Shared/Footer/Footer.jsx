import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMobileAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../../../../public/logo/logo2.png";
import { HiMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-[18px] text-fuchsia-500 mt-16">
        <div className="flex flex-col items-center lg:block w-full">
          <img src={logo} className="lg:h-28 h-20" alt="" />
          <h1 className="text-4xl font-bold">Planet Shoes</h1>
          <h2 className="text-xl">A online Shoes Shop</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 lg:block w-full">
          <span className="footer-title">Physical Office</span>
          <p>Dhaka, Bangladesh</p>
          <p>Bonani</p>
          <p>Planet Complex,</p>
          <p>House No. 001</p>
        </div>
        <div className="flex flex-col items-center space-y-3 lg:block w-full">
          <span className="footer-title">Contact Information</span>
          <div className="flex items-center space-x-2">
            <HiMail />
            <p>planet.shoes@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <p> +880 3659835</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMobileAlt />
            <p>+880 1756565656</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3 w-full lg:block">
          <span className="footer-title">Social Media</span>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/shiningsudipto">
              <FaFacebook />
            </a>
            <a href="https://github.com/shiningsudipto">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shining-sudipto/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
      <div className="text-center p-6 bg-fuchsia-700 text-white font-semibold">
        <h2>&copy; 2024 - All right reserved by Planet Shoes</h2>
      </div>
    </div>
  );
};

export default Footer;
