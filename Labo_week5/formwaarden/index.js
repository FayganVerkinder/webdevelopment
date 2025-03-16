
    function toonResultaat() {
    // Checkbox uitlezen
    let isRoker = document.getElementById("roker").checked ? "is roker" : "is geen roker";

    // Radiobuttons uitlezen
    let moedertaal = "";
    let radios = document.getElementsByName("moedertaal");
    for (let radio of radios) {
    if (radio.checked) {
    moedertaal = `moedertaal is ${radio.value}`;
    break;
}
}

    // Select met favoriete buurland
    let buurland = document.getElementById("buurland").value;
    let favorietBuurland = `favoriete buurland is ${buurland}`;

    // Multi-select bestelling uitlezen
    let bestelling = [];
    let opties = document.getElementById("bestelling").options;
    for (let optie of opties) {
    if (optie.selected) {
    bestelling.push(optie.value);
}
}
    let bestellingResultaat = `bestelling bestaat uit ${bestelling.join(" ")}`;

    // Resultaten tonen in de console
    console.log(isRoker);
    console.log(moedertaal);
    console.log(favorietBuurland);
    console.log(bestellingResultaat);
}

