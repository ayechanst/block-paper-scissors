import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const CreateGame = () => {
  const [otherPlayer, setOtherPlayer] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [otherPlayer] });
  }

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "createGame",
    args: [otherPlayer],
    onBlockConfirmation: txnReceipt => {
      console.log("game created", txnReceipt.blockHash);
    },
  });

  return (
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
  );
};
