import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertLeadSchema } from "@/lib/schema";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = insertLeadSchema.parse(body);
    const lead = await storage.createLead(data);
    return NextResponse.json(lead, { status: 201 });
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
    const allLeads = await storage.getLeads();
    return NextResponse.json(allLeads);
  } catch {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
