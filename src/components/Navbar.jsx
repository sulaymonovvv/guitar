import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-5 text-white bg-[#131218] pb-5">
        <li>
          <a href="#">КАТАЛОГ</a>
        </li>
        <li>
          <a href="#">УСЛУГИ</a>
        </li>
        <li>
          <a href="#">О НАС</a>
        </li>
        <li>
          <a href="#">ДОСТАВКА</a>
        </li>
        <li>
          <a href="#">ОТЗЫВЫ</a>
        </li>
        <li>
          <a href="#">ОБУЧЕНИЕ</a>
        </li>
        <li>
          <a href="#">КОНТАКТЫ</a>
        </li>
        <li>
          <a href="#">ОПТ</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
