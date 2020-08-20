import React from "react";

import data from "../assets/data.json";

import Card from "../components/Card";

import forme from "../assets/forme.svg";

const Home = () => {
  return (
    <>
      <div className="home-hero-bg-img">
        <img src={forme} alt="forme" className="home-hero-forme" />
        <div style={{ width: 1280, margin: "auto" }}>
          <div
            style={{
              height: 220,
              width: 360,
              backgroundColor: "white",
              padding: 25,
              borderRadius: 3,
              fontSize: 34,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "absolute",
              top: 75,
              // left: 340,
              boxShadow: "0px 0px 2px rgba(17, 17, 17, 0.24)",
            }}
          >
            Prêts à faire du tri dans vos placards ?
            <button
              style={{
                height: 45,
                width: 187,
                backgroundColor: "#2BAEB7",
                borderRadius: 4,
                color: "white",
                fontSize: 16,
                border: "none",
                padding: "0 14px",
                marginTop: 32,
              }}
            >
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>

      <div className="home-card-wrapper">
        {data.map((card, index) => {
          return <Card key={index} data={card} />;
        })}
      </div>
    </>
  );
};

export default Home;
