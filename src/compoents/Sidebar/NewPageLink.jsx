/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx, useTheme } from "@emotion/react";
import { AiOutlinePlus } from "react-icons/ai";
import Dialog from "@reach/dialog";
import "@reach/dialog/styles.css";

const NewPageLink = () => {
  const theme = useTheme();
  const [showNewPageModal, setShowNewPageModal] = React.useState(false);

  const openModal = () => setShowNewPageModal(true);
  const closeModal = () => setShowNewPageModal(false);

  return (
    <>
      <div
        css={css`
          display: block;
          flex: 0 0 auto;
          margin-top: auto;
        `}
        onClick={openModal}
      >
        <div
          css={css`
            display: flex;
            cursor: pointer;
            box-shadow: rgb(255 255 255 / 7%) 0px -1px 0px;
            align-items: center;
            min-height: 27px;
            font-size: 14px;
            padding: 2px 14px;
            width: 100%;
            color: ${theme?.dark?.textGrey};
            height: 45px;
            &:hover {
              background-color: ${theme?.dark?.lightGrey};
            }
          `}
        >
          <div
            css={css`
              width: 22px;
              height: 22px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 8px;
            `}
          >
            <AiOutlinePlus
              css={css`
                width: 22px;
                height: 22px;
              `}
            />
          </div>
          <div
            css={css`
              flex: 1 1 auto;
              font-weight: 500;
              white-space: nowrap;
              min-width: 0px;
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
            New Page
          </div>
        </div>
      </div>

      <Dialog
        isOpen={showNewPageModal}
        onDismiss={closeModal}
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
        <h1>Board Page will be rendered here.</h1>
      </Dialog>
    </>
  );
};

export default NewPageLink;
