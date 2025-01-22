import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { ApiProperty } from '@nestjs/swagger';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {

  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type:DataType.INTEGER, unique: true,  primaryKey: true, autoIncrement: true})
  id: number;

  @ApiProperty({ example: 'Post name', description: 'Title post' })
  @Column({ type:DataType.STRING, unique: true,  allowNull: false})
  title: string;

  @ApiProperty({ example: 'Content text', description: 'Description post' })
  @Column({ type:DataType.STRING,  allowNull: false})
  content: string;

  @ApiProperty({ example: 'image.jpg', description: 'Image post' })
  @Column({ type:DataType.STRING})
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER})
  userId: number

  @BelongsTo(() => User)
  author: User
}

