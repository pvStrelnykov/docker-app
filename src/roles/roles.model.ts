import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.model';
import { UserRoles } from './user-roles.module';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {

  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type:DataType.INTEGER, unique: true,  primaryKey: true, autoIncrement: true})
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Value role user' })
  @Column({ type:DataType.STRING, unique: true,  allowNull: false})
  value: string;

  @ApiProperty({ example: 'Administration', description: 'Description role' })
  @Column({ type:DataType.STRING,  allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];

}

