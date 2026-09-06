function beginInvestigation() {
    const music = document.querySelector("#background-music");
    music.volume = 0.18;
    music.muted= false; 

    const opening = document.querySelector(".opening");
    const caseOne = document.querySelector("#case-one");
    const loadingMessage = document.querySelector("#loading-message");

    loadingMessage.classList.add("show");

    opening.classList.add("fade-out");

    setTimeout(() => {

        opening.style.display = "none";

        caseOne.style.display = "block";
        caseOne.classList.add("case-enter");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);
}


function nextCase() {

    const caseOne = document.querySelector("#case-one");
    const caseTwo = document.querySelector("#case-two");

    caseOne.style.display = "none";

    caseTwo.style.display = "block";
    caseTwo.classList.remove("case-enter");

    void caseTwo.offsetWidth;

    caseTwo.classList.add("case-enter");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function revealEvidence() {

    const evidence = document.querySelector(".evidence-card");

    evidence.classList.add("revealed");
}


function caseThree() {

    const caseTwo = document.querySelector("#case-two");
    const caseThreeSection = document.querySelector("#case-three");

    caseTwo.style.display = "none";

    caseThreeSection.style.display = "block";
    caseThreeSection.classList.remove("case-enter");

    void caseThreeSection.offsetWidth;

    caseThreeSection.classList.add("case-enter");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function chooseCase(choice) {

    const response = document.querySelector("#choice-response");

    response.classList.remove("show");

    setTimeout(() => {

        if (choice === "talk") {

            response.innerHTML = `
                <p>
                    You can talk. About anything. I'm listening.
                </p>
            `;

        }

        else if (choice === "distract") {

            response.innerHTML = `
                <p class="protocol-title">
                    DISTRACTION PROTOCOL ACTIVATED
                </p>

                <p>
                    CASE FILE TEMPORARILY COMPROMISED.
                </p>

                <div class="distraction-buttons">

                    <button onclick="showDistraction('horror')">
                        HORROR
                    </button>

                    <button onclick="showDistraction('football')">
                        FOOTBALL
                    </button>

                    <button onclick="showDistraction('chaos')">
                        CHAOS
                    </button>

                </div>

                <div id="distraction-result"></div>
            `;

        }

        else if (choice === "silence") {

            response.innerHTML = `
                <p>
                    Then I'll just stay.
                    You don't have to say anything.
                </p>
            `;

        }

        response.classList.add("show");

    }, 200);
}


function showDistraction(type) {

    const result = document.querySelector("#distraction-result");

    if (type === "horror") {

        result.innerHTML = `
            <p>
                HORROR MOVIE SELECTED.
            </p>

            <p>
                LIGHTS: OFF.
                <br>
                COMMON SENSE: ALSO OFF.
            </p>

            <p>
                IF SOMETHING MOVES IN THE BACKGROUND,
                WE DID NOT SEE IT.
            </p>
        `;

    }

    else if (type === "football") {

        result.innerHTML = `
            <p>
                DISTRACTION FOUND.
            </p>

            <p>
                REAL MADRID MATCH DETECTED.
            </p>

            <p>
                SUBJECT HAS IMMEDIATELY FORGOTTEN
                WHY HE WAS SAD.
            </p>

            <p>
                INVESTIGATION: SUCCESSFUL.
            </p>
        `;

    }

    else if (type === "chaos") {

        result.innerHTML = `
            <p>
                CHAOS PROTOCOL ACTIVATED.
            </p>

            <p>
                NO PLAN.
                NO LOGIC.
                NO EXPLANATION.
            </p>

            <p>
                JUST VIBES.
            </p>

            <p>
                INVESTIGATOR HAS LEFT THE SCENE.
            </p>
        `;

    }

    result.classList.add("show");
}


function finalCase() {

    const caseThree = document.querySelector("#case-three");
    const caseFour = document.querySelector("#case-four");

    caseThree.style.display = "none";

    caseFour.style.display = "block";
    caseFour.classList.remove("case-enter");

    void caseFour.offsetWidth;

    caseFour.classList.add("case-enter");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function openFinalNote() {

    const note = document.querySelector("#final-note");

    note.classList.toggle("show");

    document.body.classList.add("final-flicker");

    setTimeout(() => {
        document.body.classList.remove("final-flicker");
    }, 700);
}
function revealHiddenMessage() {

    const result = document.querySelector("#hidden-message-result");

    result.textContent = "You found something that wasn't in the report.";

    result.classList.add("show");
}
function inspectStamp() {

    const message = document.querySelector("#stamp-message");

    message.textContent =
        "STATUS CONFIRMED. SOME CASES REQUIRE MORE THAN ONE INVESTIGATOR.";

    message.classList.add("show");
}
function startGame() {

    const caseFour = document.querySelector("#case-four");
    const game = document.querySelector("#game");

    caseFour.style.display = "none";

    game.style.display = "block";
    game.classList.remove("case-enter");

    void game.offsetWidth;

    game.classList.add("case-enter");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.querySelector("#code-input").value = " ";
}


let flashlightOn = false;
let cluesFound = [];
let gameCode = "317";


function turnOnFlashlight() {

    const room = document.querySelector(".game-room");
    const darkness = document.querySelector("#room-darkness");
    const button = document.querySelector("#flashlight-button");
    const message = document.querySelector("#room-message");
    const status = document.querySelector("#game-status-text");
    const searchArea = document.querySelector("#search-area");

    flashlightOn = true;

    room.classList.add("flashlight-on");
    darkness.classList.add("hidden");

    button.style.display = "none";

    message.innerHTML = `
        <p>
            The flashlight flickers on.
        </p>

        <p>
            Three things immediately catch your attention.
        </p>

        <p class="game-warning">
            Something has been left for you.
        </p>
    `;

    status.textContent = "SEARCHING";

    searchArea.classList.add("active");
}


function findClue(number) {

    if (!flashlightOn) {
        return;
    }

    if (cluesFound.includes(number)) {
        return;
    }

    cluesFound.push(number);

    const button =
        document.querySelector(`#object-${getWord(number)}`);

    if (button) {
        button.classList.add("searched");
        button.disabled = true;
    }

    const display =
        document.querySelector("#clue-display");

    let clueText = "";

    if (number === 1) {

        clueText = `
            <div class="clue-card">
                <p class="clue-label">
                    EVIDENCE 01
                </p>

                <p class="clue-main">
                    3
                </p>

                <p>
                    A number has been scratched into the desk.
                </p>
            </div>
        `;

    }

    else if (number === 2) {

        clueText = `
            <div class="clue-card">
                <p class="clue-label">
                    EVIDENCE 02
                </p>

                <p class="clue-main">
                    1
                </p>

                <p>
                    Written backwards across the mirror.
                </p>
            </div>
        `;

    }

    else if (number === 3) {

        clueText = `
            <div class="clue-card">
                <p class="clue-label">
                    EVIDENCE 03
                </p>

                <p class="clue-main">
                    7
                </p>

                <p>
                    Carved into the inside of the door.
                </p>
            </div>
        `;
    }

    display.innerHTML += clueText;

    if (cluesFound.length === 3) {

        document.querySelector("#game-status-text")
            .textContent = "CODE REQUIRED";

        document.querySelector("#code-section")
            .classList.add("show");
    }
}


function getWord(number) {

    if (number === 1) return "one";
    if (number === 2) return "two";
    return "three";
}


function checkCode() {

    const input =
        document.querySelector("#code-input");

    const result =
        document.querySelector("#code-result");

    if (input.value.trim() === gameCode) {

        result.innerHTML = `
            <span class="correct-code">
                CODE ACCEPTED.
            </span>
        `;

        document.querySelector("#game-status-text")
            .textContent = "CONNECTION ESTABLISHED";

        setTimeout(() => {

            document.querySelector("#game-ending")
                .classList.add("show");

        }, 1200);

    } else {

        result.innerHTML = `
            <span class="wrong-code">
                WRONG CODE.
                <br>
                Something just moved behind you.
            </span>
        `;

        document.querySelector(".game-room")
            .classList.add("room-shake");

        setTimeout(() => {

            document.querySelector(".game-room")
                .classList.remove("room-shake");

        }, 500);
    }
}


function finishGame() {

    const ending =
        document.querySelector("#game-ending");

    ending.innerHTML = `
        <p class="ending-warning">
            CASE FILE 005 — CLOSED
        </p>

        <p>
            You made it out.
        </p>

        <p>
            Probably.
        </p>

        <p class="ending-final">
            ONE LAST MESSAGE.
        </p>

        <p>
            You spend a lot of time being the person
            who handles everything.
        </p>

        <p>
            So just remember:
            you don't always have to.
        </p>

        <p>
            If things get heavy,
            I'm here.
        </p>

        <p class="ending-signature">
            — Your favourite investigator, Anwesha <3 
        </p>
    `;
}
function secretArchive() {

    const secret = document.querySelector("#secret-archive");

    secret.classList.toggle("show");
}
function startMusic() {
    const music = document.getElementById("background-music");

    music.volume = 0.18;
    music.play().then(() => {
        document.getElementById("sound-button").style.display = "none";
    }).catch(error => {
        console.log("Audio error:", error);
    });
}