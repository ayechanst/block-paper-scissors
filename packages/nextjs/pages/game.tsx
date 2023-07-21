import { Game } from "../components/Game";
import { GameData } from "../components/GameData";
import type { NextPage } from "next";

const GamePage: NextPage = () => {
  return (
    <>
      <GameData />
      <Game />
    </>
  );
};

export default GamePage;
