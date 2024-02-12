import { quotes } from "@/app/data";

export async function GET() {
	// Get a flat array of all quotes
	const allQuotes = flattenQuotes(quotes);

	// console.log(quotes);

	// Get 5 random quotes
	const randomQuotes = getRandomQuotes(allQuotes, 10);

	return Response.json({ quotes: randomQuotes });
}

function flattenQuotes(data) {
	return Object.entries(data).flatMap(([season, episodes]) =>
		Object.entries(episodes).flatMap(([episode, quotes]) => quotes.map((quote) => ({ ...quote, season, episode })))
	);
}

function getRandomQuotes(quotesArray, count) {
	// Shuffle the array using Fisher-Yates algorithm
	for (let i = quotesArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[quotesArray[i], quotesArray[j]] = [quotesArray[j], quotesArray[i]];
	}

	// Take the first 'count' quotes
	return quotesArray.slice(0, count);
}
