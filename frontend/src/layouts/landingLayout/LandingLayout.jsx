import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      {/* navbar
    main 
    footer */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
