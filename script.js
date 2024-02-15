const quoteContainer = document.getElementById('quote-container')
let apiQuotes = [];
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterButton = document.getElementById('twitter')

// Add Event Listeners
document.getElementById('quote-changer').addEventListener('click', getNewQuote)

twitterButton.addEventListener('click', tweet)

// Twitter update function
function tweet(){
   const shareableQuote = `${author.textContent} said ${quoteText.textContent}`
   const twitterURL = `https://twitter.com/intent/tweet?text=${shareableQuote}`
    window.open(twitterURL, '_blank')
}


// Show New Quote
function getNewQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  quoteText.innerText = quote.text
  authorText.innerText = quote.author ? quote.author : "Unknown"

//   Check quote length
quote.text.length > 50 ?  quoteText.classList.add('long-quote'): quoteText.classList.remove('long-quote')
}
// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        getNewQuote()
    }
    catch (error){
        console.log(error)
    }

}
getQuotes()