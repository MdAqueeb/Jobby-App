

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo-img.png";
import Home_Large from "../assets/home-lg-bg.png";
import Home_Small from "../assets/home-sm-bg.png";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 768;

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <NavBar />
      <section
        className="flex items-start md:items-center 
                    min-h-screen md:min-h-[90vh] 
                    px-6 md:px-16 
                    pt-10 md:pt-0 
                    bg-no-repeat"
        style={{
            backgroundImage: `url(${isMobile ? Home_Small : Home_Large})`,
            backgroundPosition: isMobile ? "bottom center" : "right center",
            backgroundSize: "cover",
        }}
        >
        <div className="max-w-xl">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Find The Job That Fits Your Life
            </h1>

            <p className="text-[#cbd5e1] mt-6 text-base md:text-xl">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and potential.
            </p>

            <Link to="/jobs">
            <button className="mt-8 bg-[#6366f1] px-6 py-3 rounded-lg font-semibold">
                Find Jobs
            </button>
            </Link>
        </div>
        </section>


    </div>
  );
};

export default Home;
