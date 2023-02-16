import React from "react";

import OptimismLogo from "../../assets/optimism.png";
import StarkNetLogo from "../../assets/starknet.png";
import lsLogo from "../../assets/lsLogo.png";
import nftEarthLogo from "../../assets/nftEarth.png";
import ArbitrumLogo from "../../assets/arbitrum.png";
import item1 from "../../assets/back_item1.png";
import item2 from "../../assets/back_item2.png";
import Header from "../../components/header";

const Section1 = () => {
  return (
    // bg-[url('assets/mainback.png')]
    <>
      <div className="bg-[url('assets/Group3.png')] w-[100vw] xl:w-[1440px] h-[300vh] mt-[-360px] absolute bg-no-repeat"></div>
      <div className="md:pl-[72px] block md:flex bg-cover">
        <div className="text-white w-full md:w-[50%]">
          <Header />
          <div className="font-bold text-[40px] sm:text-[70px] md:text-[40px] lg:text-[50px] 2xl:text-[72px] font-bold mt-[95px] text-center md:text-left">
            <p className="leading-[50px] sm:leading-[80px] md:leading-[50px] lg:leading-[70px] 2xl:leading-[90px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c8b60] via-[#96d7b9] to-[#096a31f5] font-black">
                NFTs&nbsp;
              </span>
              on&nbsp;
              <span className="text-[#3A9069]">Layer2</span> <br /> are broken.{" "}
              <br /> We are here to <br /> fix this.
            </p>
          </div>
          <div className="text-[16px] sm:text-[20px] md:text-[16px] lg:text-[20px] xl:text-[24px] my-[24px] text-center md:text-left">
            <p>Working to create robust and complete</p>
            <p>toolsets and utilities for NFT creators and</p>
            <p>collectors on Layer2 Ethereum</p>
          </div>
          <div className="lg:text-[20px] xl:text-[24px] md:my-[60px] text-center md:text-left flex sm:block justify-center gap-5 sm:gap-0">
            <button
              className="border-2 border-[#258723] rounded-[50px] w-[140px] lg:w-[180px] xl:w-[241px] h-[77px] transition ease-in-out hover:bg-[#258723]"
              onClick={() => {
                window.open("mailto:team@lfgrowww.com");
              }}
            >
              Email us
            </button>
            <button className="border-2 border-[#258723] rounded-[50px] w-[140px] lg:w-[180px] xl:w-[241px] h-[77px] md:mx-[30px] transition ease-in-out hover:bg-[#258723]">
              Register
            </button>
          </div>
          <div className="flex gap-6 md:gap-12 items-center mt-[60px] justify-center md:justify-start">
            <p className="opacity-[20%] hidden md:block">Powered By</p>
            <img src={OptimismLogo} alt="OptimismLogo" />
            <img src={StarkNetLogo} alt="StarkNetLogo" />
            <img src={lsLogo} alt="lsLogo" />
            <img src={nftEarthLogo} alt="nftEarthLogo" />
            <img src={ArbitrumLogo} alt="ArbitrumLogo" />
          </div>
        </div>
        <div className="mt-20 lg:mt-0 xl:mt-[-80px] w-[80%] md:w-[60%] m-auto md:m-0">
          <img src={item1} alt="item1" />
          <img
            src={item2}
            alt="Back2"
            className="mt-[-100px] ml-[60px] w-[400px] lg:w-[500px] hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
