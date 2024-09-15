// const { MongoClient } = require("mongodb");
import { Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXT_PUBLIC_DATABASE;

const client = new MongoClient(uri as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbConnect = async () => {
  try {
    await client.connect();
    const db = client.db("portfolio");
    const adminCollection = db.collection("admin");
    const admin = {
      name: "MD. ZIHAD",
      email: "mdzihad2244@gmail.com",
      password: "",
      isPasswordChange: false,
    };
    const result = await adminCollection.insertOne(admin);
    return db as Db;
  } catch (error) {
    console.log(error);
  }
};

export { dbConnect };
