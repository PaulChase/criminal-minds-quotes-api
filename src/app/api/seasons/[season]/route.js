import { quotes } from "@/app/data";

export async function GET(request, { params }) {
	const season = params.season;

	const allSeasonQuotes = getAllQuotesWithEpisode(quotes[season]);

	return Response.json({ quotes: allSeasonQuotes });
}

function getAllQuotesWithEpisode(season) {
	const allQuotes = [];
	for (const episode in season) {
		if (season.hasOwnProperty(episode)) {
			const quotesInEpisode = season[episode];
			quotesInEpisode.forEach((quote) => {
				quote.episode = episode;
				allQuotes.push(quote);
			});
		}
	}
	return allQuotes;
}
