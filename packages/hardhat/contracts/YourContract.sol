//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {

enum GameState {
  JoinPhase,
  CommitPhase,
  RevealPhase,
  ResultsPhase
}

enum GameResult {
  P1Win,
  P2Win,
  Draw
}

struct GameStruct {
  bool initialized;
  address gameHash;
  address player1;
  address player2;
  GameState gameState;
  bytes32 commit1;
  bytes32 commit2;
  bytes32 reveal1;
  bytes32 reveal2;
  uint256 revealDeadline;
  GameResult gameResult;
}

// maps the Game address to the game's data
  mapping(address => GameStruct) public games;
// maps current player to their current 'active' game
  mapping(address => address) public activeGame;

  modifier validGameState(address gameHash, GameState gameState) {
    require(games[gameHash].initialized == true, "game code does not exist");
    require(games[gameHash].player1 == msg.sender || games[gameHash].player2 == msg.sender, "player is not in the game");
    require(games[gameHash].gameState == gameState, "game is not in correct phase");
    _;
  }

  function createGame(address otherPlayer) public returns (address) {
    address gameHash = generateGameHash();
    require(!games[gameHash].initialized, "This game code already exists, try again");
    require(msg.sender != otherPlayer, "Invited players must have a different address");
    createGameStruct(gameHash);
    games[gameHash].initialized = true;
    games[gameHash].player1 = msg.sender;
    games[gameHash].player2 = otherPlayer;
    games[gameHash].gameState = GameState.JoinPhase;
    activeGame[msg.sender] = gameHash;
    return games[gameHash].gameHash;
  }

  function joinGame(address gameHash) public validGameState(gameHash, GameState.JoinPhase) {
    games[gameHash].gameState = GameState.CommitPhase;
    activeGame[msg.sender] = gameHash;
  }

  function createGameStruct(address gameHash) private {
    GameStruct memory newGameStruct;
    newGameStruct.gameHash = gameHash;
    games[gameHash] = newGameStruct;
  }

  function generateGameHash() private view returns (address) {
    bytes32 prevHash = blockhash(block.number - 1);
    return address(bytes20(keccak256(abi.encode(msg.sender, prevHash))));
  }

  function getActiveGameData(address player) public view returns (GameStruct memory) {
    address gameHash = activeGame[player];
    return games[gameHash];
  }

}
