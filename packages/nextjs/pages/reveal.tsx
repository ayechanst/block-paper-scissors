import { GameResults } from "../components/GameResults";
import { Reveal } from "../components/Reveal";
import type { NextPage } from "next";

const RevealPage: NextPage = () => {
  return (
    <>
      <Reveal />
      <GameResults />
    </>
  );
};

export default RevealPage;
