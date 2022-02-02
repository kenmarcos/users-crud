declare namespace Express {
  interface Request {
    user: {
      uuid: string;
    };
    validatedData: {
      name: string;
      email: string;
      password: string;
    };
  }
}
