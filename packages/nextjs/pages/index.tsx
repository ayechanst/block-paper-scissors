//import Link from "next/link";
import { RockButton } from "../components/RockButton";
import type { NextPage } from "next";

//import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
//import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <RockButton />
      <button>Paper</button>
      <button>Scissors</button>
    </>
  );
};

export default Home;
