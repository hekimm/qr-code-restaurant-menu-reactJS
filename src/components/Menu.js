import React, { useState } from "react";
const chickenDonerWrapImage = "https://via.placeholder.com/150"; // a path to your image
const chickenDonerHalfBreadImage = "https://via.placeholder.com/150"; // a path to your image
const chickenDonerTombikImage = "https://via.placeholder.com/150"; // a path to your image
const beefDonerWrapImage = "https://via.placeholder.com/150"; // a path to your image
const beefDonerHalfBreadImage = "https://via.placeholder.com/150"; // a path to your image
const beefDonerTombikImage = "https://via.placeholder.com/150"; // a path to your image
const beefDonerRiceImage = "https://via.placeholder.com/150"; // a path to your image
const beefDonerIskenderImage = "https://via.placeholder.com/150"; // a path to your image
const chickenDonerRiceImage = "https://via.placeholder.com/150"; // a path to your image
const chickenDonerIskenderImage = "https://via.placeholder.com/150"; // a path to your image
// İçecek resimlerini import edelim
const kolaImage = "https://via.placeholder.com/150";
const fantaImage = "https://via.placeholder.com/150";
const gazozImage = "https://via.placeholder.com/150";
const iceTeaSeftaliImage = "https://via.placeholder.com/150";
const iceTeaLimonImage = "https://via.placeholder.com/150";
const iceTeaMangoImage = "https://via.placeholder.com/150";
const meyveSuyuSeftaliImage = "https://via.placeholder.com/150";
const meyveSuyuVisneImage = "https://via.placeholder.com/150";
const meyveSuyuKarışıkImage = "https://via.placeholder.com/150";
const sadeSodaImage = "https://via.placeholder.com/150";
const meyveliSodaImage = "https://via.placeholder.com/150";
const ayranImage = "https://via.placeholder.com/150";
const suImage = "https://via.placeholder.com/150";
const cayImage = "https://via.placeholder.com/150";
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const menuItems = [
    {
      category: "et-doner",
      name: "Dürüm Et Döner",
      description:
        "Özel hazırlanan  et dönerimizi, lavaş ekmek içinde sunuyoruz.",
      image: beefDonerWrapImage,
      price: "80 TL",
    },
    {
      category: "et-doner",
      name: "Yarım Ekmek Et Döner",
      description:
        "Özel hazırlanan et dönerimizi, yarım ekmek içinde sunuyoruz.",
      image: beefDonerHalfBreadImage,
      price: "80 TL",
    },
    {
      category: "et-doner",
      name: "Tombik-Ekmek Et Döner",
      description:
        "Özel hazırlanan et dönerimizi , tombik ekmeği ile sunuyoruz.",
      image: beefDonerTombikImage,
      price: "80 TL",
    },
    {
      category: "et-doner",
      name: "Pilav Üstü Et Döner",
      description:
        "Özel hazırlanan et dönerimizi dönerimizi, pilav üzerinde sunuyoruz.",
      image: beefDonerRiceImage,
      price: "150 TL",
    },
    {
      category: "et-doner",
      name: "İskender Et Döner",
      description:
        "Özel hazırlanan et dönerimizi, yoğurt ve domates sosuyla servis ediyoruz.",
      image: beefDonerIskenderImage,
      price: "150 TL",
    },
    {
      category: "tavuk-doner",
      name: "Dürüm Tavuk Döner",
      description:
        "Özel hazırlanan tavuk dönerimizi, taze lavaş ekmek içinde sunuyoruz.",
      image: chickenDonerWrapImage,
      price: "50 TL",
    },
    {
      category: "tavuk-doner",
      name: "Yarım Ekmek Tavuk Döner",
      description:
        "Özel hazırlanan tavuk dönerimizi, taze yarım ekmek içinde sunuyoruz.",
      image: chickenDonerHalfBreadImage,
      price: "50 TL",
    },
    {
      category: "tavuk-doner",
      name: "Tombik-Ekmek Tavuk Döner",
      description:
        "Özel hazırlanan tavuk dönerimizi, tombik ekmeği ile sunuyoruz.",
      image: chickenDonerTombikImage,
      price: "50 TL",
    },
    {
      category: "tavuk-doner",
      name: "Pilav Üstü Tavuk Döner",
      description:
        "Özel hazırlanan tavuk dönerimizi, pilav üzerinde sunuyoruz.",
      image: chickenDonerRiceImage,
      price: "100 TL",
    },
    {
      category: "tavuk-doner",
      name: "İskender Tavuk Döner",
      description:
        "Özel hazırlanan tavuk dönerimizi, yoğurt ve domates sosuyla servis ediyoruz.",
      image: chickenDonerIskenderImage,
      price: "100 TL",
    },
    {
      category: "icecekler",
      name: "Kola",
      image: kolaImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Fanta",
      image: fantaImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Gazoz",

      image: gazozImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Ice Tea-Şeftali",
      image: iceTeaSeftaliImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Ice Tea-Limon",
      image: iceTeaLimonImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Ice Tea-Mango",
      image: iceTeaMangoImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Meyve Suyu-Şeftali",
      image: meyveSuyuSeftaliImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Meyve Suyu-Vişne",
      image: meyveSuyuVisneImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Meyve Suyu-Karışık",
      image: meyveSuyuKarışıkImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Sade Soda",
      image: sadeSodaImage,
      price: "20 TL",
    },
    {
      category: "icecekler",
      name: "Meyveli Soda",
      image: meyveliSodaImage,
      price: "25 TL",
    },
    {
      category: "icecekler",
      name: "Ayran",
      image: ayranImage,
      price: "20 TL",
    },
    {
      category: "icecekler",
      name: "Su",
      image: suImage,
      price: "10 TL",
    },
    {
      category: "icecekler",
      name: "Çay",
      image: cayImage,
      price: "10 TL",
    },
  ];

  const uniqueCategories = [...new Set(menuItems.map((item) => item.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="display-4 font-weight-bold text-center mb-5">Menümüz</h2>
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-outline-primary ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("all")}
            >
              Tümü
            </button>
            {uniqueCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn btn-outline-primary ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category === "et-doner"
                  ? "Et Döner"
                  : category === "tavuk-doner"
                  ? "Tavuk Döner"
                  : "İçecekler"}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {menuItems
            .filter(
              (item) =>
                selectedCategory === "all" || item.category === selectedCategory
            )
            .map((item, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="h5 card-title ">{item.name}</h3>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text font-weight-bold text-primary">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
