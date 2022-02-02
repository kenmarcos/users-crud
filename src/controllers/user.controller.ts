import { Request, Response, NextFunction } from "express";
import {
  createUser,
  listUsers,
  getProfileData,
  deleteUser,
  updateUser,
} from "../services/user.service";

export const create = async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  return res.status(201).json(user);
};

export const list = async (req: Request, res: Response) => {
  const users = await listUsers();
  return res.json(users);
};

export const profile = async (req: Request, res: Response) => {
  const userProfileData = await getProfileData(req.user.uuid);
  return res.status(200).json(userProfileData);
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUser(
      req.user.uuid,
      req.params.uuid,
      req.validatedData
    );
    return res.status(200).json(updatedUser);
  } catch (e: any) {
    return res.status(401).json({ message: e.message });
  }
};

export const exclude = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteResult = await deleteUser(req.user.uuid, req.params.uuid);
    return res.json({ message: deleteResult });
  } catch (e) {
    return next(e);
  }
};
