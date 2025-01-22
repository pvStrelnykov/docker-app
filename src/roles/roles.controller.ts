import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './roles.model';

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 201, type: Role })
  async create(@Body() dto: CreateRoleDto) {
    try {
      return await this.roleService.createRole(dto);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new HttpException(
          `Role with value "${dto.value}" already exists.`,
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:value')
  @ApiOperation({ summary: 'Get role' })
  @ApiResponse({ status: 200, description: 'Role found', type: Role })
  @ApiResponse({ status: 404, description: 'Role not found' })
  async getByValue(@Param('value') value: string) {
    const role = await this.roleService.getRoleByValue(value);
    if (!role) {
      throw new HttpException(`Role with value "${value}" not found`, HttpStatus.NOT_FOUND);
    }
    return role;
  }


}
