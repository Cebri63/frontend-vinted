import React from "react";

import data from "../assets/data.json";

import Card from "../components/Card";

import hero from "../assets/hero.jpg";
import forme from "../assets/forme.svg";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${hero})`,
          height: 455,
          width: "100%",
          position: "relative",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img
          src={forme}
          alt="forme"
          style={{ position: "absolute", bottom: 0, right: 0, height: 80 }}
        />
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
