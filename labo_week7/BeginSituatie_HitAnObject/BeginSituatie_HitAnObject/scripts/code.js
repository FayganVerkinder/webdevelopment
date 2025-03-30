const global = {
    IMAGE_COUNT: 5, // Aantal figuren
    IMAGE_SIZE: 48, // Grootte van de afbeelding
    IMAGE_PATH_PREFIX: "images/", // Pad naar de afbeeldingen
    IMAGE_PATH_SUFFIX: ".png", // Bestandsformaat
    MOVE_DELAY: 1000, // Tijd tussen het wisselen van objecten
    score: 0, // Score teller
    timeoutId: null // Timer ID
};

let playField, targetImage, scoreDisplay;

const getRandomPosition = () => {
    let x = Math.random() * (playField.clientWidth - global.IMAGE_SIZE);
    let y = Math.random() * (playField.clientHeight - global.IMAGE_SIZE);
    return { x, y };
};

const changeImage = () => {
    let randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    targetImage.src = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
    targetImage.dataset.index = randomIndex;

    let pos = getRandomPosition();
    targetImage.style.left = `${pos.x}px`;
    targetImage.style.top = `${pos.y}px`;
};

const imageClicked = () => {
    if (targetImage.dataset.index === "0") {
        alert("Game Over! Je hebt een bom geraakt.");
        clearTimeout(global.timeoutId);
        targetImage.remove();
    } else {
        global.score++;
        scoreDisplay.textContent = global.score;
        changeImage();
    }
};

const startGame = () => {
    global.score = 0;
    scoreDisplay.textContent = global.score;

    targetImage = document.createElement("img");
    targetImage.id = "target";
    targetImage.style.width = `${global.IMAGE_SIZE}px`;
    targetImage.style.height = `${global.IMAGE_SIZE}px`;
    targetImage.addEventListener("click", imageClicked);
    playField.appendChild(targetImage);

    const updateImage = () => {
        changeImage();
        global.timeoutId = setTimeout(updateImage, global.MOVE_DELAY);
    };

    updateImage();
};

const setup = () => {
    playField = document.getElementById("playField");
    scoreDisplay = document.getElementById("score");
    document.getElementById("startGame").addEventListener("click", startGame);
};

window.addEventListener("load", setup);
