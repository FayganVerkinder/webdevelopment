let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
let nieuweTekst = "";
let i = 0;

while (i < tekst.length) {

    if (
        tekst[i] === "d" &&
        tekst[i + 1] === "e" &&
        (i + 2 === tekst.length || tekst[i + 2] === " ") &&
        (i === 0 || tekst[i - 1] === " ")
    ) {
        nieuweTekst += "het";
        i += 2;
    } else {
        nieuweTekst += tekst[i];
        i++;
    }
}

console.log(nieuweTekst);

