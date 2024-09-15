const { MongoClient } = require("mongodb");

const uri = process.env.NEXT_PUBLIC_DATABASE;
const client = new MongoClient(uri);
const dbConnect = async () => {
  try {
    await client.connect();
    const db = client.db("portfolio");
    const adminCollection = db.collection("admin");
    const admin = {
      email: "mdzihad2244@gmail.com",
      password: "mdzihad2244@zihad",
    };
    const result = await adminCollection.insertOne(admin);
    return db;
  } catch (error) {
    console.log(error);
  }
};

export { dbConnect };
