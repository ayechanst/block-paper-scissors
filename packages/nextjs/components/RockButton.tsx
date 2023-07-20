import React from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const RockButton = () => {
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "commit",
    args: ["rock"],
    onBlockConfirmation: txnReceipt => {
      console.log("rock has been submitted", txnReceipt.blockHash);
    },
  });

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
