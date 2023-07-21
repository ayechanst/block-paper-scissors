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
            <button onClick={handleHostClick}>Host Game</button>
            <button onClick={handleJoinClick}>Join Game</button>
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
