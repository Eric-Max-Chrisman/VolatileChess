// This is used to send messages from the server
// to a specific client or broadcast to multiple clients
interface ServerToClientEvents {
  enteredChat: (msg: string, playerOne: string, playerTwo: string) => void;
  exitedChat: (msg: string, playerOne: string, playerTwo: string) => void;
  chatMessage: (name: string, msg: string) => void;
  receiveCoins: (from: string, amount: number, newBalance: number) => void;
  redirectLogin: (url: string) => void;
  print: (elements: string[][]) => void;
}

// This is used for the messages from a client
// to the server
interface ClientToServerEvents {
  chatMessage: (msg: string) => void;
  loadSet: (setName: string) => void;
  setName: (setName: string) => void;
}
