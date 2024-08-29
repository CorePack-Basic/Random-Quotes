// Select Elements

let first_btn = document.querySelector(".first");
let second_btn = document.querySelector(".second");
let quote  = document.querySelector(".container q")
let my_span = document.querySelector(".container span")
let tweet = document.querySelector(".second")




//Fetch Api 




// OnClick Btn

async function getQuote(url) {

    let getQuote = await fetch(url);
    let request = await getQuote.json();
    quote.innerHTML = request.content;
    my_span.innerHTML = request.author
}



first_btn.addEventListener("click" , () => {
    getQuote("https://api.quotable.io/random")
})

second_btn.onclick = function () {
    window.open(`https://www.twitter.com/intent/tweet?text=${quote.innerHTML}` , "_blank" , "width=1000,height=700")
}



//All Time changed Quotes

setInterval(() => {
    first_btn.click()
}, 10000);




