/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx, useTheme } from "@emotion/react";
import QuickFind from "./QuickFind";
import NewPageLink from "./NewPageLink";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 240px;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        background-color: ${theme?.dark?.midGrey};
      `}
    >
      <div
        css={css`
          height: 45px;
          padding: 2px 14px;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            height: 27px;
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              flex-grow: 0;
              flex-shrink: 0;
              border-radius: 3px;
              width: 22px;
              height: 22px;
              margin-right: 8px;
            `}
          >
            <img
              css={css`
                object-fit: contain;
                width: 100%;
                height: 100%;
              `}
              src="https://source.unsplash.com/22x22"
              alt=""
            />
          </div>
          <div
            css={css`
              color: ${theme?.dark?.textWhite};
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
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
