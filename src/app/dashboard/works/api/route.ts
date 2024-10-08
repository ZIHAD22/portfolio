import { dbConnect } from "@/lib/dbConnect";
import { Db, ObjectId } from "mongodb";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const db = (await dbConnect()) as Db;

    const workCollection = db.collection("works");
    const result = await workCollection.insertOne(data);

    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req: Request) => {
  const db = (await dbConnect()) as Db;

  const workCollection = db.collection("works");
  const result = await workCollection.find({}).toArray();

  return Response.json(result);
};

export const DELETE = async (req: Request) => {
  const db = (await dbConnect()) as Db;
  const reqData = req;
  const url = new URL(req.url);
  const searchParams = new ObjectId(
    new URLSearchParams(url.searchParams).get("id") as string
  );
  const workCollection = db.collection("works");

  const result = await workCollection.deleteOne({ _id: searchParams });

  return Response.json(result);
  // const db = (await dbConnect()) as Db;
};
