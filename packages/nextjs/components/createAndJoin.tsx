import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const CreateGame = () => {
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "createGame",
    // args: [otherPlayer],
    onBlockConfirmation: txnReceipt => {
      console.log("game created", txnReceipt.blockHash);
    },
  });

    <label>
        rat out opps addy: <input name="otherPlayer" defaultValue="address otherPlayer">
    </label>
};
