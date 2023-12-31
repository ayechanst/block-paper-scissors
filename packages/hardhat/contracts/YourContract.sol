//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
// Useful for debugging remove when deploying to a live network.
import "hardhat/console.sol";
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
  Waiting,
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
  bool bothPlayersRevealed;
  uint256 revealDeadline;
  GameResult gameResult;
}

    bytes32 rockHash = keccak256(abi.encodePacked('rock'));
    bytes32 paperHash = keccak256(abi.encodePacked('paper'));
    bytes32 scissorsHash = keccak256(abi.encodePacked('scissors'));


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


  function joinGame(address gameHash) public
    validGameState(gameHash, GameState.JoinPhase) {
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

  function commit(string memory saltedChoice) public
    validGameState(activeGame[msg.sender], GameState.CommitPhase) {

    address gameHash = activeGame[msg.sender];
    // bytes32 unsaltedChoice = keccak256(abi.encodePacked(choice));

    // require(unsaltedChoice == rockHash || unsaltedChoice == paperHash || unsaltedChoice == scissorsHash,
    //        "please select either rock, paper, or scissors");

    bytes32 commitHash = keccak256(abi.encodePacked(saltedChoice));
    bool isPlayer1 = games[gameHash].player1 == msg.sender;

    if (isPlayer1) {
      games[gameHash].commit1 = commitHash;
    } else {
      games[gameHash].commit2 = commitHash;
    }

    if (games[gameHash].commit1 != 0 && games[gameHash].commit2 != 0) {
      games[gameHash].gameState = GameState.RevealPhase;
      }
    }

    function reveal(string memory salt) public
      validGameState(activeGame[msg.sender], GameState.RevealPhase) {
      address gameHash = activeGame[msg.sender];
      bool isPlayer1 = games[gameHash].player1 == msg.sender;
      if (isPlayer1) {
        require(games[msg.sender].reveal1 == 0, "already revealed");
      } else {
        require(games[msg.sender].reveal2 == 0, "already revealed");
      }

      bytes32 verificationHashRock = keccak256(abi.encodePacked("rock", salt));
      bytes32 verificationHashPaper = keccak256(abi.encodePacked("paper", salt));
      bytes32 verificationHashScissors = keccak256(abi.encodePacked("scissors", salt));

      bytes32 commitHash = isPlayer1
        ? games[gameHash].commit1
        : games[gameHash].commit2;

      require(commitHash == verificationHashRock ||
             commitHash == verificationHashPaper ||
             commitHash == verificationHashScissors,
             "salt not the same");

      string memory choice;

      if (verificationHashRock == commitHash) {
        choice = "rock";
      } else if (verificationHashPaper == commitHash) {
        choice = "paper";
      } else {
        choice = "scissors";
      }

      if (isPlayer1) {
        games[gameHash].reveal1 = keccak256(abi.encodePacked(choice));
      } else {
        games[gameHash].reveal2 = keccak256(abi.encodePacked(choice));
      }

    if (games[gameHash].reveal1 != 0 && games[gameHash].reveal2 != 0) {
      games[gameHash].gameResult = determineWinner(games[gameHash].reveal1, games[gameHash].reveal2);
      games[gameHash].gameState = GameState.ResultsPhase;
     } else {
      games[gameHash].revealDeadline = block.timestamp + 3 minutes;
     }

    }

    function determineWinner(bytes32 reveal1, bytes32 reveal2) public view returns (GameResult) {
      if (reveal1 != 0 && reveal2 != 0) {
        if (reveal1 == reveal2) {
          return GameResult.Draw;
        } else if (reveal1 == rockHash) {
          if (reveal2 == paperHash) {
            return GameResult.P2Win;
          } else {
            return GameResult.P1Win;
          }
        } else if (reveal1 == paperHash) {
          if (reveal2 == scissorsHash) {
            return GameResult.P2Win;
          } else {
            return GameResult.P1Win;
          }
        } else if (reveal1 == scissorsHash) {
          if (reveal2 == rockHash) {
            return GameResult.P2Win;
          } else {
            return GameResult.P1Win;
          }
        }
      } else {
        if (reveal1 != 0) {
          return GameResult.P1Win;
        } else if (reveal2 != 0) {
          return GameResult.P2Win;
        } else {
          return GameResult.Waiting;
        }
      }
    }

    function leave() public {
      activeGame[msg.sender] = address(0);
    }

}
