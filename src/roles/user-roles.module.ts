import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

  @Column({ type:DataType.INTEGER, unique: true,  primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => Role)
  @Column({ type:DataType.INTEGER})
  roleId: number;

  @ForeignKey(() => User)
  @Column({ type:DataType.INTEGER})
  userId: number;
}

