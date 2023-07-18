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


	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
	}

  modifier validGameState(address gameHash, GameState gameState) {
    require(games == true) {
      'the game has not begun'
    }
  }

  function createGame(address otherPlayer) public returns (address) {
    address gameHash = generateGameHash();
    require(!games[gameHash].initialized, "This game code already exists, try again")
    require(msg.sender != otherPlayer, "Invited players must have a different address")
    games[gameHash].initialized = true;
    games[gameHash].player1 = msg.sender;
    games[gameHash].player2 = otherPlayer;
    games[gameHash].gameState = GameState.JoinPhase;
    activeGame[msg.sender] = gameHash;
    return gameHash;
  }

  function generateGameHash() public view returns (address) {
    bytes32 prevHash = blockhash(block.number - 1);
    return address(bytes20(keccak256(abi.encode(msg.sender, prevHash))));
  }


  function playGame() public {

    Commitment memory playerOne = commitments[0];
    Commitment memory playerTwo = commitments[1];

    if (playerOne.saltedHash == keccak256(abi.encodePacked('rock', playerOne.salt))) {
      playerChoice = 1;
    } else if (playerOne.saltedHash == keccak256(abi.encodePacked('paper', playerOne.salt))) {
      playerChoice = 2;
    } else if (playerOne.saltedHash == keccak256(abi.encodePacked('scissors', playerOne.salt))) {
      playerChoice = 3;
    } else {
      playerChoice = 0;
    }

    if (playerTwo.saltedHash == keccak256(abi.encodePacked('rock', playerTwo.salt))) {
      opChoice = 1;
    } else if (playerTwo.saltedHash == keccak256(abi.encodePacked('paper', playerTwo.salt))) {
      opChoice = 2;
    } else if (playerTwo.saltedHash == keccak256(abi.encodePacked('scissors', playerTwo.salt))) {
      opChoice = 3;
    } else {
      opChoice = 0;
    }

    if (playerChoice == opChoice) {
      outcome = 'tie';
    } else if (playerChoice == 1) {
      if (opChoice == 2) {
        outcome = 'the ops have won';
      } else {
        outcome = 'you win';
      }
    } else if (playerChoice == 2) {
      if (opChoice == 3) {
        outcome = 'ops wins';
      } else {
        outcome = 'you have defeated the ops';
      }
    } else if (playerChoice == 3) {
      if (opChoice == 1) {
        outcome = 'ops won';
      } else {
        outcome = 'you win G';
      }
    }

  }


  function clearArray() public {
    delete commitments;
  }



}
