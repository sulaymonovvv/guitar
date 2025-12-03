import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaVk } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Top = () => {
  return (
    <div className="bg-[#131218] text-[#a1a0a3] flex items-center justify-between px-7 py-2 border-b border-[#4e4d52]">
      <div className="text-[14px]">
        <span className="me-2 text-[#4e4d52]">Ваш город:</span>
        <select name="country" id="country">
          <option value="tash">Toshkent</option>
          <option value="sam">Samarqand</option>
          <option value="sur">Surxondaryo</option>
          <option value="and">Andijon</option>
          <option value="nuk">Nukus</option>
          <option value="sir">Sirdaryo</option>
        </select>
      </div>
      <div className="ps-25 flex items-center justify-between gap-7 text-[22px]">
        <FaWhatsapp />
        <LiaTelegramPlane />
        <FaVk />
        <FaViber />
        <FaYoutube />
        <FaInstagram />
      </div>
      <div className="flex items-center justify-between gap-3 text-[14px]">
        <FiPhone />
        <p>8 (800) 100 26 80 </p>
        <p>ЕЖЕДНЕВНО</p>
        <p>10:00-20:00</p>
      </div>
    </div>
  );
};

export default Top;
