import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/Fans-Banner.png";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Fan Website</h1>
          <p>Best quality fan available</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
          <br />
          <Link to="/testimonials">
            <button>TESTIMONIALS</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
