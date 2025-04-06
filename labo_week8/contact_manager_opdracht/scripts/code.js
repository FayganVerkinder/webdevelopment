let personen = [];
let huidigePersoonIndex = -1;

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    clearAllErrors();
    clearForm();
    huidigePersoonIndex = -1;
    document.getElementById("lstPersonen").selectedIndex = -1;
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    clearAllErrors();
    if (!valideer()) return;

    const persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
    };

    const lst = document.getElementById("lstPersonen");

    if (huidigePersoonIndex === -1) {
        personen.push(persoon);
        const option = document.createElement("option");
        option.text = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = personen.length - 1;
        lst.appendChild(option);
        lst.selectedIndex = lst.options.length - 1;
        huidigePersoonIndex = personen.length - 1;
    } else {
        personen[huidigePersoonIndex] = persoon;
        lst.options[huidigePersoonIndex].text = `${persoon.voornaam} ${persoon.familienaam}`;
    }
};

const toonPersoonInFormulier = (index) => {
    const persoon = personen[index];
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    huidigePersoonIndex = index;
};

const clearForm = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

const setup = () => {
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);

    document.getElementById("lstPersonen").addEventListener("change", function () {
        const selectedIndex = this.selectedIndex;
        if (selectedIndex !== -1) {
            toonPersoonInFormulier(selectedIndex);
            clearAllErrors();
        }
    });
};

window.addEventListener("load", setup);
