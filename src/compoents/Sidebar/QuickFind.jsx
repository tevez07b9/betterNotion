import React from "react";
import Dialog from "@reach/dialog";
import "@reach/dialog/styles.css";

const QuickFind = () => {
  const [showFindModal, setShowFindModal] = React.useState(false);

  const openFindModal = () => setShowFindModal(true);
  const closeFindModal = () => setShowFindModal(false);

  return (
    <>
      <div
        className="py-1 px-4 h-[27px] flex items-center w-full text-sm cursor-pointer hover:bg-lightGrey"
        onClick={openFindModal}
      >
        <div className="flex-1 whitespace-nowrap text-textGrey font-medium">
          Quick Find
        </div>
      </div>

      <Dialog
        isOpen={showFindModal}
        onDismiss={closeFindModal}
        className="bg-darkGrey p-0 rounded-sm w-[75%] flex flex-col justify-center 
          min-w-[600px] min-h-[60px] max-h-[80vh] shadow-modal-shadow"
      >
        <div
          className={`flex items-center border-0 py-0 px-4 bg-transparent 
            text-lg h-[52px] flex-grow-0 flex-shrink-0 z-[1] ${
              true && "shadow-border-bottom"
            }`}
        >
          <input
            name="search"
            placeholder="Search Talmeez's Notion"
            className="border-none bg-transparent w-full block p-0 whitespace-nowrap overflow-hidden
              text-textWhite focus:border-none focus:outline-none"
          />
        </div>

        {/* Results */}
        <div
          className="flex items-center w-full min-h-[36px] text-sm pt-2 pb-2 shadow-border-bottom
            hover:bg-lightGrey"
        >
          <div className="ml-2 mr-4 whitespace-nowrap overflow-hidden font-medium text-textGrey">
            Jira Clone
          </div>
        </div>
        {/* Results */}

        {/* Result Count */}
        <div className="shadow-border-bottom mt-[1px] flex min-h-[28px] justify-center items-center text-sm">
          <div className="ml-4 mr-4 font-medium text-xs text-textGrey">
            3 Results
          </div>
        </div>
        {/* Result Count */}
      </Dialog>
    </>
  );
};

export default QuickFind;
