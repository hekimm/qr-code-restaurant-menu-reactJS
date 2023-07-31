import React from "react";
import historyImage1 from "../images/history.png"; // a path to your first image
import historyImage2 from "../images/history-2.jpeg"; // a path to your second image

const History = () => {
  return (
    <div
      className="history py-5 text-center"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={historyImage1}
              alt="Konak Döner Tarihçe 1"
              className="img-fluid mb-4 rounded"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={historyImage2}
              alt="Konak Döner Tarihçe 2"
              className="img-fluid mb-4 rounded"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
        </div>
        <h2 className="display-4 font-weight-bold">Lezzetin Doğru Adresi</h2>
        <p className="lead">
          1979 yılında İzmir Konak'ta açılan "Konak Döner" kısa bir sürede hazır
          yemekteki geleneksel lezzetimiz döneri tercih edenlerin gözdesi oldu.
        </p>
        <p>
          Rahmetli Hamit Tün'ün kurduğu KONAK DÖNER şimdilerde torunu Hamit
          Furkan Tün ile emin ellerde hizmet vermeye devam ediyor.
        </p>
      </div>
    </div>
  );
};

export default History;
