declare namespace Express {
  interface Request {
    user: {
      uuid: string;
      name: string;
      email: string;
      password: string;
      isAdm: boolean;
      createdOn: Date;
      updatedOn: Date;
    };
    validatedData: {
      name: string;
      email: string;
      password: string;
    };
  }
}
