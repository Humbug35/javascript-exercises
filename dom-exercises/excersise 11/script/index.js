let icabutik = document.getElementById("ica");
let coopbutik = document.getElementById("coop");
let lidlbutik = document.getElementById("lidl");

let supersoup = {
    potato: 6,
    tomato: 3,
    onion: 1,
    corn: 3,
    cucumber: 3,
    milk: 1,
    butter: 1
};
let ica = {
    potato: 24,
    tomato: 9,
    onion: 5,
    corn: 9,
    cucumber: 12,
    milk: 10,
    butter: 12
};
let coop = {
    potato: 29,
    tomato: 12,
    onion: 8,
    corn: 15,
    cucumber: 18,
    milk: 7,
    butter: 9
};
let lidl = {
    potato: 18,
    tomato: 8,
    onion: 9,
    corn: 18,
    cucumber: 15,
    milk: 10,
    butter: 7
};

function cost(rec, shop) {
    let price = 0;
    for(let i in rec){
        price += rec[i] * shop[i];
    }
    return price;

}
if(cost(supersoup, ica) < cost(supersoup, coop) && cost(supersoup, ica) < cost(supersoup, lidl)){
    console.log("Ica is cheapest!")
}
else if(cost(supersoup, lidl) < cost(supersoup, coop) && cost(supersoup, ica) > cost(supersoup, lidl)){
    console.log("Lidl is cheapest!")
}
else{
    console.log("Coop is cheapest!")
}



console.log("The price on ICA is: ", cost(supersoup, ica));


console.log("The price on Coop is: ", cost(supersoup, coop));


console.log("The price on Lidl is: ", cost(supersoup, lidl));

icabutik.innerHTML = "Pris på ICA: " + cost(supersoup, ica) + " kr";
coopbutik.innerHTML = "Pris på Coop: " + cost(supersoup, coop) + " kr";
lidlbutik.innerHTML = "Pris på Lidl: " + cost(supersoup, lidl) + " kr";




/*console.log(Object.values(supersoup)[0]);
console.log(Object.keys(ica)[0]);
console.log(Object.values(ica)[0]);*/

/*
console.log(Object.values(supersoup) + Object.values(ica));*/

