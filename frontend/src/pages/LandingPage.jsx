import React from "react";
import LandingLayout from "../layouts/landingLayout/LandingLayout";
import Navbar from "../components/navbar/Navbar";
import Hero from "../features/landing/hero/Hero";
import Features from "../features/landing/features/features";
import Banner from "../features/landing/banner/Banner";

const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        {/* landing page ko components haru */}
        <Hero />
        <Features />
        <Banner />
      </LandingLayout>
    </>
  );
};

export default LandingPage;
