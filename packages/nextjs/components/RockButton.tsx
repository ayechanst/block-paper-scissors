import React from "react";

export const RockButton = () => {
  function handleClick() {}

  return (
    <>
      <button
        onClick={async () => {
          chooseRock = async () => {
            //uescaffoldcontractwrite
            const result = await contract.chooseRock();
          };
        }}
      >
        Rock
      </button>
    </>
  );
};
