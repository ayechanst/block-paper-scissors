import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const Reveal = () => {
  const [salt, setSalt] = useState("");
  const [revealResults, setRevealResults] = useState(false);
  const [p1Reveal, setp1Reveal] = useState(false);
  const [p2Reveal, setp2Reveal] = useState(false);
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
    if (gameStruct?.reveal1 !== "0x") {
      setp1Reveal(!p1Reveal);
    }
    if (gameStruct?.reveal2 !== "0x") {
      setp2Reveal(!p2Reveal);
    }
    if (p1Reveal && p2Reveal) {
      setTimeout(() => {
        setRevealResults(!revealResults);
      }, 5000);
    }
  }

  const gameResultNumber = gameStruct?.gameResult;

  if (gameResultNumber === 0) {
    gameResult = "Player 1 Won!";
  } else if (gameResultNumber === 1) {
    gameResult = "Player 2 Won!";
  } else if (gameResultNumber === 2) {
    gameResult = "A draw has happened";
  } else {
    gameResult = "A critical failure occured instead of success";
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
        {revealResults && <div>{gameResult}</div>}
      </div>
    </>
  );
};
