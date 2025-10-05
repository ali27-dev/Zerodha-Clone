import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="Assets/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <LeftSection
        imageURL="Assets/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <LeftSection
        imageURL="Assets/images/varsity.png"
        productName="Versity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <Universe />
    </>
  );
}

export default ProductsPage;
