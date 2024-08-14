import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCaretUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function B2() {
  return (
    <>
      <h2>Bài 2</h2>
      <div className="inline-block bg-[#eee] p-[10px]">
        <label htmlFor="" className="text-black">
          Input Label
        </label>
        <div className="w-[250px] mb-[10px] h-[30px] relative">
          <FontAwesomeIcon
            className="absolute top-[10px] left-[15px] text-[14px]"
            icon={faBell}
          />
          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-[14px] right-[10px] top-[25%] absolute"
          />
          <input
            type="text"
            className="w-[100%] pl-[40px] h-[100%] outline-none border-[2px] border-blue-500 rounded-[5px]"
          />
        </div>
        <div className="w-[100%] p-[10px] bg-[#fff] border-[2px] border-[#ddd]">
          <div className="w-[100%] mb-[10px] h-[25px] flex p-[5px] justify-between">
            <label htmlFor="">Label</label>
            <input type="checkbox" />
          </div>
          <div className="w-[100%] mb-[10px] h-[25px] flex p-[5px] justify-between">
            <label htmlFor="">Label</label>
            <input type="checkbox" />
          </div>
          <div className="w-[100%] gap-[10px] flex h-[25px]">
            <button className="rounded-[5px] border-[1px] w-[100%] h-[100%]">
              Clear
            </button>
            <button className="rounded-[5px] bg-blue-500 w-[100%]  h-[100%]">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
