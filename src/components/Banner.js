import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../images/banner.jpeg"; // banner image path

const Banner = () => {
  return (
    <div
      className="banner d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bannerImage})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1 className="display-2 text-white font-weight-bold">Konak Döner</h1>
        <p className="lead text-white">Lezzetin ve kalitenin buluştuğu adres</p>
        <p className="lead text-white font-weight-bold">1979'dan bugüne</p>
        <Link to="/menu" className="btn btn-warning btn-lg mt-4">
          Menümüz
        </Link>
      </div>
    </div>
  );
};

export default Banner;
