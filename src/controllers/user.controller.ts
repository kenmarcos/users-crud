import { Request, Response, NextFunction } from "express";
import {
  createUser,
  listUsers,
  getProfileData,
  deleteUser,
  updateUser,
} from "../services/user.service";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUser(req.body);
  return res.status(201).json(user);
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await listUsers();
    return res.json(users);
  } catch (e) {
    next(e);
  }
};

export const profile = async (req: Request, res: Response) => {
  const userProfileData = await getProfileData(req.user.uuid);
  return res.status(200).json(userProfileData);
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await updateUser(req.params.uuid, req.validatedData);
    return res.json(updatedUser);
  } catch (e) {
    next(e);
  }
};

export const exclude = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteUser(req.params.uuid);
    return res.json({ message: "User deleted with success" });
  } catch (e) {
    next(e);
  }
};
