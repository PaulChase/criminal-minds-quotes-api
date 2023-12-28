import { quotes } from "@/app/data";

export async function GET(request, { params }) {
	const season = params.season;
	return Response.json({ quotes: quotes[season] });
}
