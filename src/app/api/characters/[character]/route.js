import { quotes } from "@/app/data";

export async function GET(request, { params }) {
	const character = params.character;
	const characterQoutes = [];

	// Iterate through the data structure
	for (const season in quotes) {
		for (const episode in quotes[season]) {
			const episodeQuotes = quotes[season][episode];
			episodeQuotes.map((quote) => {
				if (quote.saidBy === character) {
					characterQoutes.push({
						...quote,
						episode: season + " - " + episode,
					});
				}
			});
		}
	}

	return Response.json({ quotes: characterQoutes });
}
