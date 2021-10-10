import React from "react";
import QuickFind from "./QuickFind";
import NewPageLink from "./NewPageLink";

const Sidebar = () => {
  return (
    <div className="w-[240px] h-full flex flex-shrink-0 flex-col bg-midGrey">
      <div className="h-[45px] py-1 px-4 flex items-center">
        <div className="h-[27px] flex items-center">
          <div className="flex-grow-0 flex-shrink-0 rounded-sm w-[22px] h-[22px] mr-[8px]">
            <img
              className="object-contain w-full h-full"
              src="https://source.unsplash.com/22x22"
              alt=""
            />
          </div>
          <div className="text-textWhite font-medium whitespace-nowrap overflow-hidden">
            Talmeez Ahmed
          </div>
        </div>
      </div>
      <QuickFind />
      <NewPageLink />
    </div>
  );
};

export default Sidebar;
