import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const GameResults = () => {
  const { address } = useAccount();
  let gameResult = "";

  const { data: gameStruct } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getActiveGameData",
    args: [address],
  });

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
      <div>{gameResult}</div>
    </>
  );
};
