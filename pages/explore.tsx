import React from "react";
import FundCardGrid from "../components/FundCardGrid";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const explore = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <SearchBar />
        <FundCardGrid />
      </div>
    </>
  );
};

export default explore;
