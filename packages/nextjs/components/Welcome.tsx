import React from "react";
import { CreateGame } from "../components/createAndJoin";

export const Welcome = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <div className="font-bold">Welcome to Block Paper Scissors!</div>
      </div>
      <div className="flex justify-center py-10">
        <CreateGame />
      </div>
    </>
  );
};
