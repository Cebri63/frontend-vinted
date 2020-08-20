import React from "react";

import data from "../assets/data.json";

import Card from "../components/Card";

import forme from "../assets/forme.svg";

const Home = () => {
  return (
    <>
      <div className="home-hero-bg-img">
        <img src={forme} alt="forme" className="home-hero-forme" />
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
