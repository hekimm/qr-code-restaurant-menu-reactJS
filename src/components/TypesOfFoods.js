import React from "react";
import chickenDonerImage from "../images/chicken-doner.jpg"; // a path to your image
import beefDonerImage from "../images/beef-doner.jpg"; // a path to your image

const TypesOfFoods = () => {
  return (
    <div className="types-of-foods py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="display-4 font-weight-bold text-center mb-5">
          Sunduğumuz Lezzetler
        </h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow h-100">
              <img
                src={chickenDonerImage}
                alt="Chicken Doner"
                className="card-img-top"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body">
                <h3 className="h5 card-title font-weight-bold">Tavuk Döner</h3>
                <p className="card-text">
                  Özel ve lezzetli bir seçenek olan tavuk dönerimiz, özel
                  baharatlarımız ve ustalarımızın tecrübesi ile
                  hazırlanmaktadır. Lezzetli bir deneyim için bizi tercih edin.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card shadow h-100">
              <img
                src={beefDonerImage}
                alt="Beef Doner"
                className="card-img-top"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body">
                <h3 className="h5 card-title font-weight-bold">Et Döner</h3>
                <p className="card-text">
                  Özel ve lezzetli bir seçenek olan et dönerimiz, taze ve
                  kaliteli etlerden, özel bir tarif ve ustalarımızın deneyimi
                  ile hazırlanmaktadır. Lezzetli bir deneyim için bizi tercih
                  edin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfFoods;
