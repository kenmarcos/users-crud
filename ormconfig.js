const devEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
  logging: true,
};

module.exports = devEnv;
