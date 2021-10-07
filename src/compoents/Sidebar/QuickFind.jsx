/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx, useTheme } from "@emotion/react";
import Dialog from "@reach/dialog";
import "@reach/dialog/styles.css";

const QuickFind = () => {
  const theme = useTheme();
  const [showFindModal, setShowFindModal] = React.useState(false);

  const openFindModal = () => setShowFindModal(true);
  const closeFindModal = () => setShowFindModal(false);

  return (
    <>
      <div
        css={css`
          padding: 2px 14px;
          height: 27px;
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            background-color: ${theme?.dark?.lightGrey};
          }
        `}
        onClick={openFindModal}
      >
        <div
          css={css`
            flex: 1 1 auto;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: ${theme?.dark?.textGrey};
            font-weight: 500;
          `}
        >
          Quick Find
        </div>
      </div>

      <Dialog
        isOpen={showFindModal}
        onDismiss={closeFindModal}
        css={css`
          background-color: ${theme?.dark?.darkGrey};
          padding: 0;
          border-radius: 3px;
          width: 75%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 600px;
          min-height: 60px;
          max-height: 80vh;
          box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
            rgb(15 15 15 / 20%) 0px 5px 10px, rgb(15 15 15 / 40%) 0px 15px 40px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            border: none;
            padding: 0px 16px;
            background: transparent;
            font-size: 18px;
            line-height: inherit;
            height: 52px;
            flex-grow: 0;
            flex-shrink: 0;
            z-index: 1;
            ${true && "box-shadow: rgb(255 255 255 / 7%) 0px 1px 0px;"}
          `}
        >
          <input
            name="search"
            placeholder="Search Talmeez's Notion"
            css={css`
              font-size: inherit;
              line-height: inherit;
              border: none;
              background: none;
              width: 100%;
              display: block;
              resize: none;
              padding: 0px;
              min-width: 0px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: ${theme?.dark?.textWhite};
              &:focus {
                border: none;
                outline: none;
              }
            `}
          />
        </div>

        {/* Results */}
        <div
          css={css`
            display: flex;
            align-items: center;
            line-height: 120%;
            width: 100%;
            min-height: 36px;
            font-size: 14px;
            padding-top: 8px;
            padding-bottom: 8px;
            box-shadow: rgb(255 255 255 / 7%) 0px 1px 0px;
            &:hover {
              background-color: ${theme?.dark?.lightGrey};
            }
          `}
        >
          <div
            css={css`
              margin-left: 8px;
              margin-right: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: 500;
              line-height: 20px;
              color: ${theme?.dark?.textGrey};
            `}
          >
            Jira Clone
          </div>
        </div>
        {/* Results */}

        {/* Result Count */}
        <div
          css={css`
            box-shadow: rgb(255 255 255 / 7%) 0px -1px 0px;
            margin-top: 1px;
            display: flex;
            flex-direction: row;
            min-height: 28px;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
          `}
        >
          <div
            css={css`
              margin-left: 14px;
              margin-right: 14px;
              font-weight: 500;
              font-size: 12px;
              color: ${theme?.dark?.textGrey};
            `}
          >
            3 Results
          </div>
        </div>
        {/* Result Count */}
      </Dialog>
    </>
  );
};

export default QuickFind;
