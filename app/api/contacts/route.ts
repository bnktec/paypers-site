import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertContactSchema } from "@/lib/schema";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = insertContactSchema.parse(body);
    const contact = await storage.createContact(data);
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Dados inválidos", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allContacts = await storage.getContacts();
    return NextResponse.json(allContacts);
  } catch {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
