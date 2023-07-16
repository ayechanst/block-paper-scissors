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
	// State Variables
  string public outcome;
  address public immutable owner;
  uint256 public playerChoice;
  uint256 public opChoice;
  Commitment[] private commitments;

	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
	}

  struct Commitment {
    address senderAddress;
    string item;
    string salt;
    bytes32 saltedHash;
  }

  function commitItem(string memory item, string memory salt) public {
    bytes32 saltedHash = keccak256(abi.encodePacked(item, salt));
    Commitment memory newCommit = Commitment(msg.sender, item, salt, saltedHash);
    commitments.push(newCommit);
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
