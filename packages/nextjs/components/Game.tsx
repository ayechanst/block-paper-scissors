import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const Game = () => {
  const [choice, setChoice] = useState("");
  const [salt, setSalt] = useState("");

  function handleRock() {
    setChoice("rock");
  }
  function handlePaper() {
    setChoice("paper");
  }
  function handleScissors() {
    setChoice("scissors");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeAsync({ args: [choice, salt] });
  }

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "commit",
    args: [choice, salt],
    onBlockConfirmation: txnReceipt => {
      console.log("choice and salt written", txnReceipt.blockHash);
    },
  });

  return (
    <div>
      <div className="flex justify-center items-center flex-col py-4">
        <div className="space-x-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleRock}
          >
            Rock
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handlePaper}
          >
            Paper
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleScissors}
          >
            Scissors
          </button>
        </div>
        {choice && <div className="py-3">You have chosen: {choice}</div>}

        <form onSubmit={handleSubmit}>
          <div className="py-5">Now salt your answer:</div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      </div>
    </div>
  );
};
