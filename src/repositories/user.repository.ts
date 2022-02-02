import { DeleteResult, EntityRepository } from "typeorm";
import { Repository } from "typeorm";
import { User } from "../entities";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({ email: email });
    return user;
  }
  public async findByUuid(uuid: string): Promise<User | undefined> {
    const user = await this.findOne({ uuid: uuid });
    return user;
  }
  public async deleteByUuid(uuid: string): Promise<DeleteResult> {
    return await this.delete({ uuid: uuid });
  }
}

export default UserRepository;
