import { quotes } from "@/app/data";

export async function GET() {
	const seasons = Object.keys(quotes);

	const allSeasons = seasons.map((season) => {
		return {
			season: season,
			quotes: Object.keys(quotes[season]).length,
		};
	});
	return Response.json({ allSeasons });
}
