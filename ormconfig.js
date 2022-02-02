const devEnv = {
  type: "postgres",
  url: "postgresql://postgres:users_crud_pass@localhost:5431/users_crud_db",
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
  logging: true,
};

module.exports = devEnv;
