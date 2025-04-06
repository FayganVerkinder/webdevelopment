document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const student = {
        voornaam: document.getElementById('txtVoornaam').value,
        familienaam: document.getElementById('txtFamilienaam').value,
        geboorteDatum: new Date(document.getElementById('txtGeboorteDatum').value),
        adres: {
            straat: document.getElementById('txtStraat').value,
            postcode: document.getElementById('txtPostcode').value,
            gemeente: document.getElementById('txtGemeente').value
        },
        isIngeschreven: true,
        namenVanExen: document.getElementById('txtExen').value.split(',').map(naam => naam.trim()),
        aantalAutos: parseInt(document.getElementById('txtAutos').value)
    };

    document.getElementById('output').textContent = JSON.stringify(student, null, 2);
});
