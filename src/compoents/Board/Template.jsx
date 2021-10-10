/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx, useTheme } from "@emotion/react";
import { IconContext } from "react-icons";

export const TemplateItem = ({ text, Icon }) => {
  return (
    <div
      className="transition-colors cursor-pointer py-[3px] px-[2px] flex items-center
        flex-grow h-[32px] text-base rounded-sm text-textDark hover:bg-cyan"
    >
      <div className="w-[20px] h-[20px] mr-[10px]">
        <Icon className="h-full w-full" />
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
