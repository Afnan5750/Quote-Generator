const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);



function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600", "height=300");
}





function copy() {
    const quoteText = document.getElementById('quote').innerText;
    const authorText = document.getElementById('author').innerText;
    const textToCopy = `${quoteText} - ${authorText}`;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            const copyButton = document.getElementById('copyButton');
            copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
            }, 1000);
        })
        .catch(err => console.error('Unable to copy quote: ', err));
}




function speak() {
    const quoteText = document.getElementById('quote').innerText;
    const authorText = document.getElementById('author').innerText;
    const speechText = `${quoteText} by ${authorText}`;

    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(speechText);
    synth.speak(voice);
}


