const contracts = {
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        YourContract: {
          address: "0xe4dd320A579bE79Ca55430c1De129337B809679C",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "activeGame",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "saltedChoice",
                  type: "string",
                },
              ],
              name: "commit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "otherPlayer",
                  type: "address",
                },
              ],
              name: "createGame",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "reveal1",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "reveal2",
                  type: "bytes32",
                },
              ],
              name: "determineWinner",
              outputs: [
                {
                  internalType: "enum YourContract.GameResult",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "games",
              outputs: [
                {
                  internalType: "bool",
                  name: "initialized",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "gameHash",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "player1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "player2",
                  type: "address",
                },
                {
                  internalType: "enum YourContract.GameState",
                  name: "gameState",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "commit1",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "commit2",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "reveal1",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "reveal2",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "bothPlayersRevealed",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "revealDeadline",
                  type: "uint256",
                },
                {
                  internalType: "enum YourContract.GameResult",
                  name: "gameResult",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
              ],
              name: "getActiveGameData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "initialized",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "gameHash",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "player1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "player2",
                      type: "address",
                    },
                    {
                      internalType: "enum YourContract.GameState",
                      name: "gameState",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes32",
                      name: "commit1",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "commit2",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "reveal1",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "reveal2",
                      type: "bytes32",
                    },
                    {
                      internalType: "bool",
                      name: "bothPlayersRevealed",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "revealDeadline",
                      type: "uint256",
                    },
                    {
                      internalType: "enum YourContract.GameResult",
                      name: "gameResult",
                      type: "uint8",
                    },
                  ],
                  internalType: "struct YourContract.GameStruct",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "gameHash",
                  type: "address",
                },
              ],
              name: "joinGame",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "leave",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "salt",
                  type: "string",
                },
              ],
              name: "reveal",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
