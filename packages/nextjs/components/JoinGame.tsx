import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const JoinGame = () => {
  const [gameHash, setGameHash] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [gameHash] });
  }

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "joinGame",
    args: [gameHash],
    onBlockConfirmation: txnReceipt => {
      console.log("game joined", txnReceipt.blockHash);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-5">Opps dropped location, pull up and krueger wit da ruger:</div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="joinGameInput"
        value={gameHash}
        onChange={e => setGameHash(e.target.value)}
        type="string"
        required
      />
      <div className="py-5">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Submit
        </button>
      </div>
    </form>
  );
};
