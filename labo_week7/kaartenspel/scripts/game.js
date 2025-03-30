const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;

const afbeeldingen = [];
for (let i = 1; i <= AANTAL_KAARTEN; i++) {
    afbeeldingen.push(`kaart${i}.png`);
    afbeeldingen.push(`kaart${i}.png`);
}


afbeeldingen.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById("game-board");
let geselecteerdeKaarten = [];
let isBezig = false;


afbeeldingen.forEach((afbeelding, index) => {
    const kaart = document.createElement("div");
    kaart.classList.add("card");
    kaart.dataset.naam = afbeelding;
    kaart.dataset.index = index;

    kaart.addEventListener("click", () => draaiKaartOm(kaart));
    gameBoard.appendChild(kaart);
});

function draaiKaartOm(kaart) {
    if (isBezig || kaart.classList.contains("flipped") || kaart.classList.contains("matched")) return;

    kaart.style.backgroundImage = `url('../images/${kaart.dataset.naam}')`;
    kaart.classList.add("flipped");
    geselecteerdeKaarten.push(kaart);

    if (geselecteerdeKaarten.length === 2) {
        controleerMatch();
    }
}

function controleerMatch() {
    isBezig = true;

    const [kaart1, kaart2] = geselecteerdeKaarten;
    if (kaart1.dataset.naam === kaart2.dataset.naam) {
        setTimeout(() => {
            kaart1.classList.add("matched");
            kaart2.classList.add("matched");
            resetSelectie();
            controleerWin();
        }, 500);
    } else {
        setTimeout(() => {
            kaart1.style.backgroundImage = "url('../images/achterkant.png')";
            kaart2.style.backgroundImage = "url('../images/achterkant.png')";
            kaart1.classList.remove("flipped");
            kaart2.classList.remove("flipped");
            resetSelectie();
        }, 1000);
    }
}

function resetSelectie() {
    geselecteerdeKaarten = [];
    isBezig = false;
}

function controleerWin() {
    if (document.querySelectorAll(".matched").length === afbeeldingen.length) {
        setTimeout(() => alert("Gefeliciteerd! Je hebt het spel gewonnen!"), 500);
    }
}
