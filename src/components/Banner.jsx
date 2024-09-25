import React from "react";
import Button from "./utilityComponents/Button";

const Banner = () => {
  return (
    <div className="relative">
      <div className="size-64 bg-backPrimay absolute rounded-full blur-3xl opacity-40"></div>
      <div className="size-64 bg-backPrimay absolute bottom-0 right-4  rounded-full blur-3xl opacity-40"></div>
      <div className="flex flex-row items-center justify-between gap-12">
        <div className="basis-2/4">
          <p className="text-lg md:texl-xl lg:text-5xl text-left font-Roboto font-bold">
            Unlock a World of Stories – Find Your Next Favorite Book at{" "}
          </p>
          <div className="text-left mt-6">
            <Button content={{ title: "Buy Book", color: "primary" }} />
          </div>
        </div>
        <div className="basis-2/4">
          <img src="../banner-removebg.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
