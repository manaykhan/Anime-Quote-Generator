let anime = document.getElementById("anime");
let quote = document.getElementById("quote");

const url = "https://animechan.vercel.app/api/random";

MAX_LENGTH = 100;

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      if(item.quote.length <= MAX_LENGTH)
      {
      anime.innerText = item.anime; 
      quote.innerText = item.quote;
      }
    });
};

window.addEventListener("load", getQuote);
getQuote();