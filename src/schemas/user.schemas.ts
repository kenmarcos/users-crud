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
  name: yup.string().test("name", "Invalid name", (value) => {
    if (value === "") return false;
    return true;
  }),
  email: yup
    .string()
    .email("Invalid email")
    .test("email", "Invalid e-mail", (value) => {
      if (value === "") return false;
      return true;
    }),
  password: yup.string().test("password", "Invalid password", (value) => {
    if (value === "") return false;
    return true;
  }),
});
