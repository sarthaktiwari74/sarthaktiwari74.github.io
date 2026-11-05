const quoteButton = document.querySelector("#js-new-quote");
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

quoteButton.addEventListener("click", getQuote);

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error("Could not load trivia.");
        }

        const data = await response.json();
        console.log(data.question);
        displayQuote(data.question);
    } catch (error) {
        console.error(error);
        alert("Could not load trivia.");
    }
}

function displayQuote(quote) {
    document.querySelector("#js-quote-text").textContent = quote;
}

getQuote();