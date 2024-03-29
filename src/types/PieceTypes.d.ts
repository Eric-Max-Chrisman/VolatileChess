type Move = import('../entities/Moves').Move;
type Point2D = import('../entities/Point2D').Point2D;

type NewPieceRequest = {
  pieceName: string;
  replaces: string; // start position
  moves: Move[]; // possibly changing soon
  special: string;
};

type PieceId = {
  pieceId: string;
};

type MovePack = {
  moves: Move[];
  currentPosition: Point2D;
};

type NewMoveReq = {
  x: number;
  y: number;
  repeating: boolean;
  special: string;
};

type MovePieceRequest = {
  currentX: number;
  currentY: number;
};

type PieceNameRequest = {
  pieceName: string;
}
