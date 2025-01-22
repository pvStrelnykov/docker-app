import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role for user (ADMIN || USER)' })
  @IsString({ message: 'Thi is string'})
  readonly value: string;

  @ApiProperty({ example: 1, description: 'Id user' })
  @IsNumber({}, { message: 'Thi is number' })
  readonly userId: number;
}