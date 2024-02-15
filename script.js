let apiQuotes = [];

// Show New Quote

function showNewQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
}
// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        console.log(apiQuotes[100])
    }
    catch (error){
        console.log('error')
    }

}
getQuotes()