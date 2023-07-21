import React, { useState } from "react";
import { CreateGame } from "../components/CreateGame.tsx";
import { JoinGame } from "../components/JoinGame.tsx";

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
                className="py-3 px-3 rounded-full outline outline-offset-7 outline-blue-500"
              >
                Host Game
              </button>
            </div>
            <div className="py-5">
              <button
                onClick={handleJoinClick}
                className="py-3 px-3 rounded-full outline outline-offset-7 outline-blue-500"
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
