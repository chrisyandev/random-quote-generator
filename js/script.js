/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// List of quotes
var quotes = [
	{
		quote: "It's the possibility of having a dream come true that makes life interesting.",
		source: "Paulo Coelho",
		citation: "The Alchemist",
		year: "1988"
	},
	{
		quote: "To get over a mountain, you have to climb it.",
		source: "Jonathan Tesch"
	},
	{
		quote: "Unbeing dead isn't being alive.",
		source: "E.E. Cummings"
	},
	{
		quote: "Count your age by friends, not years. Count your life by smiles, not tears.",
		source: "John Lennon"
	},
	{
		quote: "Success is never final.",
		source: "Adamson and Steckel"
	}
];

// Returns a random quote object from list of quotes
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Writes the properties of the random quote object if they exist
function printQuote() {
  var randomQuote = getRandomQuote(); 
  var html = "";
  
  html += "<p class='quote'>" + randomQuote.quote + "</p>";
  html += "<p class='source'>" + randomQuote.source;
  if (randomQuote.citation) {
    html += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    html += "<span class='year'>" + randomQuote.year + "</span>";
  }
  html += "</p>";

  document.getElementById("quote-box").innerHTML = html;
}

// Button press invokes the `printQuote` function
document.getElementById("loadQuote").addEventListener("click", printQuote, false);