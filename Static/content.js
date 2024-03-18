
function loadIntro() {
    fetch("/intro")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadRogueLite() {
    fetch("/RogueLite")
        .then(response => response.text())
        .then(htmlContent => {
            // Insert the HTML content into the "content" element
            document.getElementById("content").innerHTML = htmlContent;

            // After inserting the HTML content, execute the JavaScript logic for the game
            const boardSize = 20; // Size of each grid cell
            const rows = 20; // Number of rows
            const cols = 20; // Number of columns
            const board = document.getElementById("game-board");
            let character = document.createElement("div");
            character.className = "character";
            let characterPosition = { x: 0, y: 0 };

            function renderCharacter() {
                character.style.left = characterPosition.x * boardSize + "px";
                character.style.top = characterPosition.y * boardSize + "px";
            }

            function moveCharacter(dx, dy) {
                const newX = characterPosition.x + dx;
                const newY = characterPosition.y + dy;
                if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
                    characterPosition.x = newX;
                    characterPosition.y = newY;
                    renderCharacter();
                }
            }

            // Handle arrow key presses
            document.addEventListener("keydown", function(event) {
                switch(event.key) {
                    case "ArrowUp":
                        moveCharacter(0, -1);
                        break;
                    case "ArrowDown":
                        moveCharacter(0, 1);
                        break;
                    case "ArrowLeft":
                        moveCharacter(-1, 0);
                        break;
                    case "ArrowRight":
                        moveCharacter(1, 0);
                        break;
                }
            });

            board.appendChild(character);
            renderCharacter();
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadScraper() {
    fetch("/Scraper")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Generate content links
const introLink = '<a href="#" onclick="loadIntro()">Intro</a>';
const GuessGame = '<a href="#" onclick="loadRogueLite()">RogueLite</a>';
const Scraper = '<a href="#" onclick="loadScraper()">Scraper</a>';
const contentFiles = [introLink, GuessGame, Scraper];

// Add content links to the gameboy-controller div
document.getElementById("gameboy-controller").innerHTML = contentFiles.join(" | ");