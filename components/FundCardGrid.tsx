import React from "react";
import FundCard from "./FundCard";
import data from "../dummy_data.json";
import { IFundCard } from "../helpers/interfaces/IfundCard";

const FundCardGrid = () => {
  return (
    <>
      <div className="mt-10 w-full px-4 md:w-11/12">
        <div className="text-xl font-bold">Explore All</div>

        <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-y-5 mb-10">
          {data.map((elem: IFundCard, i: number) => {
            return (
              <FundCard
                title={elem.title}
                target_amount={elem.target_amount}
                tags={elem.tags}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FundCardGrid;
