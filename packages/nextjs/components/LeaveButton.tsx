import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Leave = () => {
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "leave",
    onBlockConfirmation: txnReceipt => {
      console.log("player left the game", txnReceipt.blockHash);
    },
  });

  function handleClick() {
    writeAsync({});
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleClick}
      >
        Leave Game
      </button>
    </div>
  );
};
