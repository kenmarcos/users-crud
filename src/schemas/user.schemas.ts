import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Invalid email").required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required(),
  password: yup.string().required(),
});

export const updateUserSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Invalid email"),
  password: yup.string(),
});
