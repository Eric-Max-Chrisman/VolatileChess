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
}
//test
export { Point2D };