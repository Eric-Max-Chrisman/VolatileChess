class Point2D {
  private x: number;

  private y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  setX(newX: number): void {
    this.x = newX;
  }

  setY(newY: number): void {
    this.y = newY;
  }

  // Takes a point2D and returns the point as an index in board. Formula is (index = 8y + x).
  convertToIndex(): number | undefined {
    const index: number = this.y * 9 + this.x;
    if (index < 0 || index > 64) {
      return undefined;
    }
    return index;
  }
}

export { Point2D };
