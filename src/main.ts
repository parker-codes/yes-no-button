import "./style.css";

const yesSound = new Audio("sounds/yes.mp3");
const noSound = new Audio("sounds/no.mp3");

type Action = "yes" | "no";

function playSound(action: Action): void {
  if (action === "yes") {
    restartAudio(yesSound);
  } else if (action === "no") {
    restartAudio(noSound);
  }
}

function restartAudio(audio: HTMLAudioElement): void {
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
  }
}

const yesButton = document.querySelector(".button.yes")!;
yesButton.addEventListener("click", () => playSound("yes"));
yesButton.addEventListener("touchstart", () => playSound("yes"));

const noButton = document.querySelector(".button.no")!;
noButton.addEventListener("click", () => playSound("no"));
noButton.addEventListener("touchstart", () => playSound("no"));
