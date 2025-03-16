let gemeenten = [];
let input;


while (true) {
    input = prompt("Geef een gemeente in (of typ 'stop' om te stoppen):");
    if (input === null || input.toLowerCase() === "stop") {
        break;
    }
    if (input.trim() !== "") {
        gemeenten.push(input.trim());
    }
}


gemeenten.sort((a, b) => a.localeCompare(b));


let selectElement = document.getElementById("gemeenteSelect");
gemeenten.forEach(gemeente => {
    let option = document.createElement("option");
    option.textContent = gemeente;
    selectElement.appendChild(option);
});
