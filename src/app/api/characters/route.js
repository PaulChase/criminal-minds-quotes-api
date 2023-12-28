import { quotes } from "@/app/data";

export async function GET() {
	const uniqueSaidBy = [];

	// Iterate through the data structure
	for (const season in quotes) {
		for (const episode in quotes[season]) {
			const episodeQuotes = quotes[season][episode];
			episodeQuotes.map((quote) => {
				uniqueSaidBy.push(quote.saidBy);
			});
		}
	}

	return Response.json({ characters: [...new Set(uniqueSaidBy)] });
}
