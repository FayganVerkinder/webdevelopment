    let vandaag = new Date();

    let verjaardag = new Date('2025-12-17');

    let verschilInMs = verjaardag - vandaag;

    let verschilInDagen = Math.ceil(verschilInMs / (1000 * 60 * 60 * 24));

    console.log("Aantal dagen tot je verjaardag: " + verschilInDagen);

