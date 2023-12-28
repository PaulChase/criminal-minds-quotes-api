import { quotes } from "@/app/data";

export async function GET() {
	return Response.json({ quotes });
}
