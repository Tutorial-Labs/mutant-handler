export const environment = {
  production: false,
  region: "eu-west-1",
  rds:{
    hostname:"mutant-database.c6tiaz4catpb.us-east-1.rds.amazonaws.com",
    port:3306,
    database:"mutant-database",
    username: "admin",
    password: "Orion7089"
  },
  ...process.env
};

