import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { LiaBoxOpenSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-[#131218] text-white gap-[25vw] mt-0 pt-0">
      <div className="flex items-center justify-center gap-2">
        <BsSearch />
        <p>ПОИСК</p>
      </div>
      <div>
        <img className="" src="public/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-10 ">
        <BsFillHeartFill className="text-[18px]" />
        <LiaBoxOpenSolid className="text-[23px]" />
      </div>
    </div>
  );
};

export default Header;
