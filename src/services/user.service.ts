import bcrypt from "bcrypt";
import { getRepository, getCustomRepository } from "typeorm";
import { User } from "../entities";
import AppError from "../errors/appError";
import UserRepository from "../repositories/user.repository";

interface IUser {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
}
interface UserBody {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

interface ValidatedData {
  name?: string;
  email?: string;
  password?: string;
}

export const createUser = async (body: UserBody) => {
  const { name, email, password, isAdm } = body;
  const userRepository = getRepository(User);
  const newUser = userRepository.create({
    name,
    email,
    password,
    isAdm,
  });
  await userRepository.save(newUser);
  const createdUser = userRepository.findOne({ uuid: newUser.uuid });
  return createdUser;
};

export const listUsers = async () => {
  const userRepository = getRepository(User);
  const users = await userRepository
    .createQueryBuilder("user")
    .addSelect("user.password")
    .getMany();
  return users;
};

export const getProfileData = async (userUuid: string) => {
  const userRepository = getCustomRepository(UserRepository);
  const user = userRepository.findByUuid(userUuid);
  return user;
};

export const updateUser = async (
  paramsUuid: string,
  validatedData: ValidatedData
) => {
  const userRepository = getRepository(User);

  const userToBeUpdated = await userRepository.findOne({ uuid: paramsUuid });

  if (!userToBeUpdated) {
    throw new AppError(404, "User uuid not found");
  }

  if (validatedData.password) {
    validatedData.password = bcrypt.hashSync(validatedData.password, 10);
  }

  await userRepository.save({
    ...userToBeUpdated,
    ...validatedData,
  });

  const updatedUser = userRepository.findOne({ uuid: paramsUuid });

  return updatedUser;

  // if (validatedData.password) {
  //   validatedData.password = bcrypt.hashSync(validatedData.password, 10);
  // }
  // const userRepository = getCustomRepository(UserRepository);
  // const user = await userRepository.findByUuid(userUuid);
  // if (!user?.isAdm) {
  //   if (userUuid === paramsUuid) {
  //     await userRepository.update({ uuid: paramsUuid }, validatedData);
  //     const updatedUser = await userRepository.findByUuid(paramsUuid);
  //     if (!updatedUser) {
  //       throw new AppError(404, "Not found");
  //     }
  //     const { password, ...updatedUserWithoutPassword } = updatedUser;
  //     return updatedUserWithoutPassword;
  //   } else {
  //     throw new AppError(401, "Missing admin permission");
  //   }
  // }
  // await userRepository.update({ uuid: paramsUuid }, validatedData);
  // const updatedUser = await userRepository.findOne({ uuid: paramsUuid });
  // if (!updatedUser) {
  //   throw new AppError(404, "Not found");
  // }
  // const { password, ...updatedUserWithoutPassword } = updatedUser;
  // return updatedUserWithoutPassword;
};

export const deleteUser = async (paramsUuid: string) => {
  const userRepository = getCustomRepository(UserRepository);

  const userToBeDeleted = await userRepository.findByUuid(paramsUuid);

  if (!userToBeDeleted) {
    throw new AppError(404, "User uuid not found");
  }

  await userRepository.deleteByUuid(paramsUuid);
  // const user = await userRepository.findByUuid(userUuid);
  // const userToBeDeleted = await userRepository.findByUuid(paramsUuid);

  // if (!userToBeDeleted) {
  //   throw new AppError(404, "Uuid not found");
  // }

  // if (!user?.isAdm) {
  //   if (userUuid === paramsUuid) {
  //     await userRepository.deleteByUuid(paramsUuid);
  //     return "User deleted with success";
  //   } else {
  //     throw new AppError(401, "Missing admin permission");
  //   }
  // }
  // await userRepository.deleteByUuid(paramsUuid);
  // return "User deleted with success";
};
