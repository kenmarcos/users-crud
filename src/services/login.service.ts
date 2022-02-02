import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/user.repository";

interface UserBody {
  email: string;
  password: string;
}

export const authenticateUser = async (body: UserBody) => {
  const { email, password } = body;

  const userRepository = getCustomRepository(UserRepository);

  const user = await userRepository.findByEmail(email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return undefined;
  }

  const token = jwt.sign(
    { uuid: user.uuid },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
