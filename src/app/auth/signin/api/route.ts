import { dbConnect } from "@/lib/dbConnect";
import { Db } from "mongodb";

export const POST = async (req: Request) => {
  const { email, password }: { email: string; password: string } =
    await req.json();
  try {
    const db = (await dbConnect()) as Db;
    const userCollection = db.collection("admin");
    const findUser = await userCollection.findOne({ email });

    if (!findUser) {
      return Response.json({ message: "user not found" });
    }

    return Response.json(findUser);
  } catch (error) {}
};
