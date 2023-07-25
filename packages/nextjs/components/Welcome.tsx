import React from "react";
import { CreateOrJoin } from "../components/CreateOrJoin.js";

export const Welcome = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <div className="font-bold">Welcome to Block Paper Scissors!</div>
      </div>
      <div className="flex justify-center py-10">
        <CreateOrJoin />
      </div>
    </>
  );
};
