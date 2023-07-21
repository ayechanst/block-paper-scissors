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
      square up with ops:
      <input id="joinGameInput" value={gameHash} onChange={e => setGameHash(e.target.value)} type="string" required />
      <button type="submit">Submit</button>
    </form>
  );
};
