const quoteContainer = document.getElementById('quote-container')
const apiQuotes = [];
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')

// Add new quote DOM manipulation
document.getElementById('quote-changer').addEventListener('click', getNewQuote)

// Show New Quote
function getNewQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  quoteText.innerText = quote.text
  authorText.innerText = quote.author
}
// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
    }
    catch (error){
        console.log('error')
    }

}
getQuotes()