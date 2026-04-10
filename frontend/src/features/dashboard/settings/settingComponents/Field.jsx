import React, { useState } from "react";

const Field = ({ label, value, editing, type, onChange }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {label}
        </label>
        {editing ? (
          type === "textarea" ? (
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              rows={3}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-orange-400 resize-none "
            />
          ) : (
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-orange-400 "
            />
          )
        ) : (
          <p className="text-sm text-gray-800 font-medium">{value ||"Not Available"}</p>
        )}
      </div>
    </>
  );
};

export default Field;
