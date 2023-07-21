import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const GameData = () => {
  const { address } = useAccount();

  const { data: gameStruct } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getActiveGameData",
    args: [address],
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-blue-500 rounded-lg shadow-md p-4">
          <div className="flex justify-center">
            <div className="font-bold px-1">Game Address: </div>
            <div> {gameStruct?.gameHash}</div>
          </div>
          <div className="flex justify-center">
            <div className="px-2">
              <div className="font-bold px-1">Player 1:</div>
              <div>{gameStruct?.player1}</div>
            </div>
            <div className="px-2">
              <div className="font-bold px-1">Player 2:</div>
              <div>{gameStruct?.player2}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
