import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User,
              private roleService: RolesService) {}


  async createUser(dto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({ where: { email: dto.email } });
    if (existingUser) {
      throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
    }

    const user = await this.userRepository.create(dto);

    const role = await this.roleService.getRoleByValue('ADMIN');
    if (!role) {
      throw new HttpException('Role ADMIN not found', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    await user.$set('roles', [role.id]);
    user.roles = [role];

    return user;
  }


  async getAllUsers() {
    const users = await this.userRepository.findAll({
      include: { all: true },
    });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId, {
      include: { all: true },
    })
    const role = await this.roleService.getRoleByValue(dto.value)
    if(role && user){
      await user.$add('roles', role.id)
      return dto
    }

    throw new HttpException('Role not found', HttpStatus.NOT_FOUND)

  }

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId)
    if(!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    user.banned = true
    user.banReason = dto.banReason
    await user.save()
    return user
  }
}
