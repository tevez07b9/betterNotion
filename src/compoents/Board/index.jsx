import React from "react";
import { HiDocument, HiDocumentText } from "react-icons/hi";
import { FaTrello, FaThList } from "react-icons/fa";
import { IoShapesSharp } from "react-icons/io5";
import { BiArrowToBottom, BiTable, BiCalendarCheck } from "react-icons/bi";
import { TemplateList } from "./Template";

const tempItems = [
  { text: "Empty with icon", Icon: HiDocument },
  { text: "Empty", Icon: HiDocumentText },
  { text: "Templates", Icon: IoShapesSharp },
  { text: "Import", Icon: BiArrowToBottom },
];

const dataItems = [
  { text: "Table", Icon: BiTable },
  { text: "Board", Icon: FaTrello },
  { text: "List", Icon: FaThList },
  { text: "Calendar", Icon: BiCalendarCheck },
];

const Board = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center flex-shrink-0 flex-grow-0">
        <div className="flex-1">
          {/* Emoji Section */}
          {/* <div
            css={css`
              margin-top: 32px;
              margin-bottom: 10px;
            `}
          >
            Some emojis
          </div> */}
          {/* Emoji Section */}

          <div className="mt-[32px] pr-[126px] h-[40px] py-[3px] px-[2px] bg-darkGrey">
            <input
              type="text"
              name="pageTitle"
              placeholder="Untitled"
              className="max-w-full w-full text-[40px] whitespace-pre-wrap 
                break-words caret-textWhite min-h-[1em] border-none text-textWhite cursor-text
                h-[40px] bg-transparent focus:border-none focus:outline-none"
            />
          </div>

          <div className="w-full">
            <div className="pt-[5px] px-[5px] pb-[24px] text-textDark text-base">
              Press Enter to continue with an empty page, or pick a template (↑↓
              to select)
            </div>
          </div>

          <TemplateList items={tempItems} />

          <div className="py-[3px] px-[2px] mt-[2px] uppercase text-[11px] font-medium text-textDark">
            DATABASE
          </div>
          <TemplateList items={dataItems} />
        </div>
      </div>
    </div>
  );
};

export default Board;
