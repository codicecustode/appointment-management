import { Cashfree } from "cashfree-pg";
import dotenv from "dotenv";
dotenv.config();

Cashfree.XClientId = `${process.env.CASHFREE_APP_ID}`;
Cashfree.XClientSecret = `${process.env.CASHFREE_SECRET_KEY}`;
Cashfree.XEnvironment = Cashfree.Environment.TEST;


export {
  Cashfree
};