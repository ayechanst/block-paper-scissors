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
      rat out opps addy:
      <input
        id="createGameInput"
        name="otherPlayer"
        value={otherPlayer}
        onChange={e => setOtherPlayer(e.target.value)}
        type="string"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
