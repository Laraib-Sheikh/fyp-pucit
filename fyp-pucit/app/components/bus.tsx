// pages/api/read-file.ts
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("hello");
    const data = fs.readFileSync("/hello.txt", "utf-8");
    res.status(200).json({ content: data });
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Error reading file" });
  }
}
