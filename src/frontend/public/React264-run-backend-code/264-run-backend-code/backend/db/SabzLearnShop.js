import { createConnection } from "mysql";

const SabzlearnShopDB = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sabzlearn_shop",
});

export default SabzlearnShopDB;
