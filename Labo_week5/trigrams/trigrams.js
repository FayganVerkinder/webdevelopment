function generateTrigrams(woord) {
    console.log("Trigrams in het woord \"" + woord + "\":");
    for (let i = 0; i <= woord.length - 3; i++) {
        console.log(woord.slice(i, i + 3));
    }
}

const woord = "onoorbaar";
generateTrigrams(woord);

