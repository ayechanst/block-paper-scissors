import React from "react";

export const Button = () => {
  function handleClick() {
    console.log("This button has been clicked.");
  }

  return (
    <>
      <button onClick={handleClick}>Rock Paper or Scissors</button>
    </>
  );
};
