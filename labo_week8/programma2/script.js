

let jsonString = '{"voornaam":"Sofie","familienaam":"Peeters","geboorteDatum":"2002-08-19T00:00:00.000Z","adres":{"straat":"Stationsstraat 5","postcode":"9000","gemeente":"Gent"},"hobby\'s":["lezen","zwemmen","programmeren"],"isIngeschreven":true,"aantalAutos":1}';

let student2 = JSON.parse(jsonString);

console.log(" Voornaam van student2:", student2.voornaam);
console.log(" Geboortedatum (als string):", student2.geboorteDatum);
console.log(" Gemeente:", student2.adres.gemeente);
