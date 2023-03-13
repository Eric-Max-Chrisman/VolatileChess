import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';
import { Point2d } from '././types/Point2d';
import { PieceOwner } from './PieceOwner';

@Entity()
export class CustomPiece {
  @PrimaryGeneratedColumn('uuid')
  pieceId: string;

  @Column({ unique: false })
  piecePosition: Point2D;

  @Column({ unique: false })
  piecePlacements: Point2D[];

  // TODO @ManyToMany PieceOwner
}
