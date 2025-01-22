import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Administration role' })
  readonly value: string;
  @ApiProperty({ example: 'About role', description: 'Description' })
  readonly description: string;
}
