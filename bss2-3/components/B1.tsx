import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function B1() {
  return (
    <>
      <h2>Bài 1</h2>
      <div className="px-[10px] py-[3px] inline-flex flex-col bg-[#eee]">
        <label htmlFor="" className="text-blue-500">
          Label
        </label>
        <div className="relative w-[250px] h-[30px]">
          <FontAwesomeIcon
            className="absolute text-[14px] right-[10px] top-[8px]"
            icon={faEye}
          />
          <input
            placeholder="Placeholder"
            type="text"
            className="placeholder:text-black pl-[10px] outline-none w-[100%] h-[100%] border-[2px] rounded-[5px] border-blue-500"
          />
        </div>
        <p>Help Text</p>
      </div>
    </>
  );
}
