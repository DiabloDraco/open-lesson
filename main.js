let products = [
    {
        name: "iPhone 13",
        price: 1100,
    },
    {
        name: "MacBook Pro",
        price: 1400
    },
    {
        name: "iPad Pro",
        price: 900
    },
    {
        name: "AirPods",
        price: 199
    }
];


let USD_TO_UZS = 10100;


let items = products.map(function (item) {
    let pris = item.price * USD_TO_UZS
    let salepris = item.price * 0.9 * USD_TO_UZS
    let raznit = pris - salepris
    return {
        name: item.name,
        price: item.price * USD_TO_UZS,
        priceUsd: item.price,
        sales: item.price * 0.9 * USD_TO_UZS,
        raznitsa: pris - salepris,
        raznitUsd:raznit / USD_TO_UZS
    }
})

items.sort(function(a , b) {
    return b.pris - a.pris
})

let proArray = []
for (let i = 0; i < items.length; i++) {
    if ( items[i].name.toLocaleLowerCase().includes("pro".toLocaleLowerCase())) {
        proArray.push(items[i])
    }
}

let numlar =[]
let usdlar = []
for (let i = 0; i < items.length; i++) {
    numlar.push(items[i].price)
}

for (let i = 0; i < items.length; i++) {
    usdlar.push(items[i].priceUsd)
}

let sum = numlar.reduce((total, amount) => total + amount);
let usd = usdlar.reduce((total, amount) => total + amount);
console.log(sum , usd);


