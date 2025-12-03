import React from "react";
import { TbGuitarPick } from "react-icons/tb";

const Black = () => {
  return (
    <div className="relative ">
      <div className="bg-[#131218] w-[100%] h-[550px]"></div>
      <div className="bg-[#cc7408] w-[100%] h-[550px]">
        <div className="w-[80%] mx-auto pt-60">
          <ul className="flex items-center jusify-center gap-10">
            <li className="w-[100px]">
              <a href="#">
                <img src="1.png" alt="" />
              </a>
            </li>
            <li className="w-[300px]">
              <a href="#">
                <img src="2.png" alt="" />
              </a>
            </li>
            <li className="w-[300px]">
              <a href="#">
                <img src="3.png" alt="" />
              </a>
            </li>
            <li className="w-[300px] text-black">
              <a href="#">
                <img src="4.png" alt="" />
              </a>
            </li>
            <li className="w-[300px]">
              <a href="#">
                <img src="public/5.png" alt="" />
              </a>
            </li>
          </ul>
          <ul className="flex items-center jusify-center gap-10">
            <li className="w-[100px]">
              <a href="#">
                <img src="public/6.png" alt="" />
              </a>
            </li>
            <li className="w-[300px]">
              <a href="#">
                <img src="public/7.png" alt="" />
              </a>
            </li>
            <li className="w-[300px]">
              <a href="#">
                <img src="public/8.png" alt="" />
              </a>
            </li>
            <li className="w-[300px] text-black">
              <a href="#">
                <img src="public/9.png" alt="" />
              </a>
            </li>
            <li className="w-[300px]">
              <a href="#">
                <img src="public/10.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[80%] mx-auto absolute top-24 left-35">
        <div className="flex items-center justify-center gap-5">
          <div>
            <img className="relative" src="public/guitar1.png" alt="" />
            <div className="absolute top-10 left-60">
              <TbGuitarPick className="text-[200px] text-white" />
              <h3 className="ps-17 text-white text-[23px]">гитары</h3>
            </div>
          </div>
          <div>
            <img className="relative" src="public/guitar2.png" alt="" />
            <div className="absolute top-10 right-60">
              <TbGuitarPick className="text-[200px] text-white" />
              <h3 className="ps-17 text-white text-[23px]">укулеле</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          <div>
            <img className="relative" src="public/guitar3.png" alt="" />
            <div className="absolute bottom-10 left-60">
              <TbGuitarPick className="text-[200px] text-white" />
              <h3 className="ps-13 text-white text-[23px]">аксесуары</h3>
            </div>
          </div>
          <div>
            <img className="relative" src="public/guitar4.jpg" alt="" />
            <div className="absolute bottom-10 right-60">
              <TbGuitarPick className="text-[200px] text-white" />
              <h3 className="ps-15 text-white text-[23px]">струны</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Black;
