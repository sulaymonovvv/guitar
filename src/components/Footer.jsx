import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaVk } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#131218] ">
      <div className="w-[85%] mx-auto text-white flex items-center justify-between">
        <div className="w-[40%]">
          <img className="w-[300px]" src="footer.png" alt="" />
          <p>
            Мы работаем по всей России, поэтому можем сделать онлайн-показ
            инструмента и доставить его до вашей двери
          </p>

          <h4>Остались вопросы?</h4>
          <p>8 (800) 100-26-80</p>
          <p>ЕЖЕДНЕВНО 10:00 - 20:00</p>
          <p>info@guitarlavka.ru</p>
          <p className="text-[#a1a0a3] flex items-center gap-5 text-[18px] pt-5">
            <FaWhatsapp />
            <LiaTelegramPlane />
            <FaVk />
            <FaViber />
            <FaYoutube />
            <FaInstagram />
          </p>
        </div>
        <div>ububu</div>
      </div>
    </div>
  );
};

export default Footer;
