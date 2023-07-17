//import Link from "next/link";
import { Button } from "../components/Button";
import type { NextPage } from "next";

//import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
//import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <Button />
      <button>Rock</button>
      <button>Paper</button>
      <button>Scissors</button>
    </>
  );
};

export default Home;
