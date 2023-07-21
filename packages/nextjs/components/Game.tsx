import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const Game = () => {
  let choice = "";
  const salt = "";

  function handleRock() {
    choice = "rock";
  }
  function handlePaper() {
    choice = "paper";
  }
  function handleScissors() {
    choice = "scissors";
  }

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "commit",
    args: [choice, salt],
    onBlockConfirmation: txnReceipt => {
      console.log("game created", txnReceipt.blockHash);
    },
  });

  return (
    <div>
      <button onClick={handleRock}>Rock</button>
      <button onClick={handlePaper}>Paper</button>
      <button onClick={handleScissors}>Scissors</button>
    </div>
  );
};
