const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
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
                  name: "choice",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "salt",
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
