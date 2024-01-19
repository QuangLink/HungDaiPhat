import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/*Trái*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="circle"></div>

            <h1>Hùng Đại Phát</h1>
            <h2>Ván lạng- Ván gỗ - Veneer</h2>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Neque porro quisquam est qui dolorem ipsum quia
            </span>
            <span className="secondaryText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </span>
          </div>

          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Tìm</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5} end={10} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Năm uy tín</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Khách hàng</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={2950} end={3000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Sản phẩm chất lượng</span>
            </div>
          </div>
        </div>

        {/*Phải*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
