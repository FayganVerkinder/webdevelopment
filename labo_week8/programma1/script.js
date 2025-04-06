
let student1 = {
    voornaam: "Sofie",
    familienaam: "Peeters",
    geboorteDatum: new Date("2002-08-19"),
    adres: {
        straat: "Stationsstraat 5",
        postcode: "9000",
        gemeente: "Gent"
    },
    hobby's: ["lezen", "zwemmen", "programmeren"],
    isIngeschreven: true,
    aantalAutos: 1
};

let jsonString = JSON.stringify(student1);
console.log(" JSON string van student1:");
console.log(jsonString);
