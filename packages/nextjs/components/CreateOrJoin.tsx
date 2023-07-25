import React, { useState } from "react";
import { CreateGame } from "../components/CreateGame.js";
import { JoinGame } from "../components/JoinGame.js";

export const CreateOrJoin = () => {
  const [createGame, setCreateGame] = useState(false);
  const [joinGame, setJoinGame] = useState(false);

  function handleHostClick() {
    setCreateGame(!createGame);
  }

  function handleJoinClick() {
    setJoinGame(!joinGame);
  }

  return (
    <>
      <div>
        {!createGame && !joinGame && (
          <div>
            <div className="py-5">
              <button
                onClick={handleHostClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Host Game
              </button>
            </div>
            <div className="py-5">
              <button
                onClick={handleJoinClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Join Game
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {createGame && (
          <div>
            <CreateGame />
          </div>
        )}
      </div>
      <div>
        {joinGame && (
          <div>
            <JoinGame />
          </div>
        )}
      </div>
    </>
  );
};
