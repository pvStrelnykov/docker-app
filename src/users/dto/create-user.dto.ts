import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ example: 'email@email.com', description: 'Email address' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Email address required' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'Password' })
  @IsString({ message: 'Should be a string' })
  @Length(4, 16, { message: 'No less than 4 and no more than 16' })
  readonly password: string;
}
