import type { NextPage } from "next";
import { Welcome } from "~~/components/Welcome";

//import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
//import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <Welcome />
    </>
  );
};

export default Home;
