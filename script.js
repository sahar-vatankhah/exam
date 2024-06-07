const crypData = document.querySelector("#crypto-data");

const userData = async () =>{

    const respons = await fetch("https://api.coinlore.net/api/tickers/?limit=10");
    const user = await respons.json();


    for( let i = 0; i < user.data.length; i++){

        const {symbol, name, price_usd} = user.data[i];


        const newLi = document.createElement("li");
        crypData.append(newLi);

        const span1 = document.createElement("span");
        span1.textContent = `symbol: ${symbol}`;
       
        newLi.append(span1);

        const span2 = document.createElement("span");
        span2.textContent = `Name: ${name}`;
        newLi.append(span2);

        const span3 = document.createElement("span");
        span3.textContent = `price(usd): ${price_usd}`;
        newLi.append(span3);

        
    }

};


userData();
