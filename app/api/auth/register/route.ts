import prisma from "@/prisma/index";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { firstName, lastName, creatorName, email, phoneNumber, password } =
    await req.json();
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        creatorName,
        email,
        phoneNumber,
        password: await hash(password, 10),
      },
    });
    return NextResponse.json(user);
  }
}
