import { GameData } from "../components/GameData";
import { Reveal } from "../components/Reveal";
import type { NextPage } from "next";

const RevealPage: NextPage = () => {
  return (
    <>
      <GameData />
      <Reveal />
    </>
  );
};

export default RevealPage;
