import React from "react";

const StatusBadge = ({ status }) => {
  return (
    <>
      <span
        className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${status.color}`}
      >
        {status.icon}
        {status.label}
      </span>
    </>
  );
};

export default StatusBadge;
