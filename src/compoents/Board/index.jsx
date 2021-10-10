/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx, useTheme } from "@emotion/react";
import { HiDocument, HiDocumentText } from "react-icons/hi";
import { FaTrello, FaThList } from "react-icons/fa";
import { IoShapesSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
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
  const theme = useTheme();

  return (
    <div>
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          flex-grow: 0;
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
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

          <div
            css={css`
              margin-top: 32px;
              padding-right: 126px;
              height: 40px;
              padding: 3px 2px;
              padding-right: 126px;
              background: ${theme?.dark?.daryGrey};
            `}
          >
            <input
              type="text"
              name="pageTitle"
              placeholder="Untitled"
              css={css`
                max-width: 100%;
                width: 100%;
                font-size: 40px;
                white-space: pre-wrap;
                word-break: break-word;
                caret-color: ${theme?.dark?.textWhite};
                min-height: 1em;
                border: none;
                color: ${theme?.dark?.textWhite};
                cursor: text;
                height: 40px;
                background: transparent;
                &:focus {
                  border: none;
                  outline: none;
                }
              `}
            />
          </div>

          <div
            css={css`
              width: 100%;
            `}
          >
            <div
              css={css`
                padding: 5px 2px 24px;
                color: ${theme?.dark?.textDark};
                font-size: 16px;
              `}
            >
              Press Enter to continue with an empty page, or pick a template (↑↓
              to select)
            </div>
          </div>

          <TemplateList items={tempItems} />

          <div
            css={css`
              padding: 3px 2px;
              margin-top: 24px;
              margin-bottom: 4px;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-size: 11px;
              font-weight: 500;
              color: ${theme?.dark?.textDark};
            `}
          >
            DATABASE
          </div>
          <TemplateList items={dataItems} />
        </div>
      </div>
    </div>
  );
};

export default Board;
