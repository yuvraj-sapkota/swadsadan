import React from "react";

const ChartHeader = ({ title, subTitle }) => {
  return (
    <>
      <div>
        <h2 className="font-semibold text-gray-800 text-base">{title}</h2>
        <p className="text-xs text-gray-400 mt-0.5">{subTitle}</p>
      </div>
    </>
  );
};

export default ChartHeader;
