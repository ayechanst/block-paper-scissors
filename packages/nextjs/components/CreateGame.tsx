import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const CreateGame = () => {
  const [otherPlayer, setOtherPlayer] = useState("");
  const [gameHash, setGameHash] = useState(false);
  const { address } = useAccount();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [otherPlayer] });
    setGameHash(!gameHash);
  }

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "createGame",
    args: [otherPlayer],
    onBlockConfirmation: txnReceipt => {
      console.log("game created", txnReceipt.blockHash);
    },
  });

  const { data: gameStruct } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getActiveGameData",
    args: [address],
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="py-5">Drop da opps addy and bring yo pipe, sumn finna get boxed like some captn crunch:</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="createGameInput"
          value={otherPlayer}
          onChange={e => setOtherPlayer(e.target.value)}
          type="string"
          required
        />
        <div className="py-5">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Submit
          </button>
        </div>
      </form>
      <div className="py-1">
        {" "}
        {gameHash && (
          <div className="py-5">
            {" "}
            <div className="font-bold">Join Code</div>
            {gameStruct?.gameHash}
          </div>
        )}
      </div>
    </>
  );
};
