function generateQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //console.log(data);
        let randomQuote = Math.floor(Math.random()*1000);
        document.getElementById('quote').innerHTML = data[randomQuote].text;
        document.getElementById('author').innerHTML = data[randomQuote].author;
    });
}

function reloadPage() {
    location.reload();
}
generateQuote();