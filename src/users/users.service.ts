import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UsersService {
  findOneBy(arg0: { username: string; }) {
      throw new Error('Method not implemented.');
  }

  async create(createUserDto: CreateUserDto): Promise<User> { // Promise (promet de te renvoyer un user)

    const user = new User();
    user.username = createUserDto.username
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserDto.password, user.salt);
    user.email = createUserDto.email
    user.adress_line1 = createUserDto.adress_line1
    user.adress_line2 = createUserDto.adress_line2
    user.adress_line3 = createUserDto.adress_line3
    user.zipCode = createUserDto.zipCode
    user.city = createUserDto.city    

    try {
      await User.save(user)
    }

    catch (error) {
      throw new ConflictException("Email ou username déjà utiliser")
    }

    //delete user.salt;         // permet de supprimer le retour du salt
    //delete user.password;     // permet de supprimer le retour du password hash
    return user;
  }


  async findAll() { // recherche de tous les users
    return await User.find();
  }

  async findOne(id: number) { // recherche d'un user par id
    return await User.findBy({ id });
  }

  async findByName(username: string) {  // plus besoin de faire de login car notre recherche passe par le username cf(userController)
    return await User.findOneBy({ username });
  }

  async remove(id: number) { // permet la suppression de l'user par l'id    
    return await User.delete({ id });
  }
}