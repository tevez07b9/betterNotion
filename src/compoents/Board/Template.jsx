/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx, useTheme } from "@emotion/react";
import { IconContext } from "react-icons";

export const TemplateItem = ({ text, Icon }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        transition: background 20ms ease-in 0s;
        cursor: pointer;
        padding: 3px 2px;
        display: flex;
        align-items: center;
        flex-grow: 1;
        height: 32px;
        font-size: 16px;
        border-radius: 3px;
        color: ${theme?.dark?.textDark};
        &:hover {
          background-color: ${theme?.dark?.cyan};
        }
      `}
    >
      <div
        css={css`
          width: 20px;
          height: 20px;
          margin-right: 10px;
        `}
      >
        <Icon
          css={css`
            width: 100%;
            height: 100%;
          `}
        />
      </div>
      {text}
    </div>
  );
};

export const TemplateList = ({ items = [] }) => {
  const theme = useTheme();
  return (
    <IconContext.Provider value={{ color: theme?.dark?.textDark }}>
      <div>
        {items.map((item) => (
          <TemplateItem {...item} />
        ))}
      </div>
    </IconContext.Provider>
  );
};
