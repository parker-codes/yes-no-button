import "./style.css";

let currentSound: HTMLAudioElement | null = null;

type Action = "yes" | "no";

function playSound(action: Action): void {
  if (currentSound) {
    currentSound.pause();
  }
  currentSound = new Audio();

  if (action === "yes") {
    currentSound.src = "sounds/yes.mp3";
  } else if (action === "no") {
    currentSound.src = "sounds/no.mp3";
  }

  currentSound.play();
}

const yesButton = document.querySelector(".button.yes")!;
yesButton.addEventListener("mousedown", () => playSound("yes"));
yesButton.addEventListener("keydown", (e: Event) => {
  if ((<KeyboardEvent>e).code === "Space") playSound("yes");
});

const noButton = document.querySelector(".button.no")!;
noButton.addEventListener("mousedown", () => playSound("no"));
noButton.addEventListener("keydown", (e: Event) => {
  if ((<KeyboardEvent>e).code === "Space") playSound("no");
});
