import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const Reveal = () => {
  const [salt, setSalt] = useState("");
  const { address } = useAccount();
  let gameResult = "";

  const { data: gameStruct } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getActiveGameData",
    args: [address],
  });

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "reveal",
    args: [salt],
    onBlockConfirmation: txnReceipt => {
      console.log("reveal!", txnReceipt.blockHash);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [salt] });
  }

  const gameResultNumber = gameStruct?.gameResult;

  if (gameResultNumber === 0) {
    gameResult = "Waiting on players";
  } else if (gameResultNumber === 1) {
    gameResult = "Player 1 Won!";
  } else if (gameResultNumber === 2) {
    gameResult = "Player 2 Won!";
  } else if (gameResultNumber === 3) {
    gameResult = "Draw";
  } else {
    gameResult = "There has been a critically massive error son";
  }

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="py-5">Enter salt boi:</div>
          <input
            className="max-w-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="saltInput"
            onChange={e => setSalt(e.target.value)}
            type="string"
            required
          />
          <div className="py-5">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </form>
        {<div>{gameResult}</div>}
      </div>
    </>
  );
};
