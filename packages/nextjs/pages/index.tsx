import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { Welcome } from "~~/components/Welcome";

//import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
//import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  const router = useRouter;

  useEffect(() => {
    const shouldSwitchPage = false;

    if (shouldSwitchPage) {
      router.push("/game.tsx");
    }
  }, []);

  return (
    <>
      <Welcome />
    </>
  );
};

export default Home;
