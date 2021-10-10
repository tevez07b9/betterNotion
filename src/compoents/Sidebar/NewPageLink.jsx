import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Dialog from "@reach/dialog";
import "@reach/dialog/styles.css";
import Board from "../Board";

const NewPageLink = () => {
  const [showNewPageModal, setShowNewPageModal] = React.useState(false);

  const openModal = () => setShowNewPageModal(true);
  const closeModal = () => setShowNewPageModal(false);

  return (
    <>
      <div
        className="block flex-grow-0 flex-shrink-0 mt-auto"
        onClick={openModal}
      >
        <div
          className="flex cursor-pointer shadow-border-bottom items-center min-h-[27px]
            text-sm py-[2px] px-4 w-full text-textGrey h-[45px] hover:bg-lightGrey"
        >
          <div className="w-[22px] h-[22px] flex items-center mr-2">
            <AiOutlinePlus className="w-[22px] h-[22px]" />
          </div>
          <div className="flex-1 font-medium whitespace-nowrap overflow-hidden">
            New Page
          </div>
        </div>
      </div>

      <Dialog
        isOpen={showNewPageModal}
        onDismiss={closeModal}
        className="bg-darkGrey p-0 rounded-sm overflow-y-scroll
          w-[75%] block min-w-[960px] min-h-[60px] max-h-[80vh]"
        // box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
        //   rgb(15 15 15 / 20%) 0px 5px 10px, rgb(15 15 15 / 40%) 0px 15px 40px;
      >
        <Board />
      </Dialog>
    </>
  );
};

export default NewPageLink;
