import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'User id' })
  readonly userId: number;
  @ApiProperty({ example: true })
  readonly banReason: string;
}
