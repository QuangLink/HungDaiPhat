import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" width={100} />

        <div className="flexCenter h-menu">
          <a href="#">Trang chủ</a>
          <a href="#">Sản phẩm</a>
          <a href="#">Thông tin</a>
          <a href="#">Blog</a>
          <button className="button">Liên hệ</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
