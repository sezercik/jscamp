console.log("merhaba kodlama io")

let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10

}

console.log(dolarDun)

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    const element = konutKredileri[index];
    console.log("  <li>" + element +"</li>")
}
console.log("<ul>")
console.log(konutKredileri)