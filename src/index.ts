import CurrLvl from "./components/controller/lvlController";
import { LvlInfo } from "./types";
import lvlInfoStart from "./lvlInfo";
import "./style.css";

const lvlBtnsCont: HTMLElement | null = document.querySelector(".levels");
const levelBtns = [
  ...(lvlBtnsCont as HTMLElement).querySelectorAll(".levels--item"),
] as [HTMLElement];
const inputField: HTMLInputElement | null =
  document.querySelector(".code--input-field");
const winWords: HTMLElement | null = document.querySelector(".win-words");
const restartBtn: HTMLElement | null = document.querySelector(".restart");
const helpBtn = document.querySelector(".code--input-help") as HTMLElement;
const submitBtn: HTMLElement | null =
  document.querySelector(".code--input-btn");

let lvlInfo: Array<LvlInfo> = JSON.parse(JSON.stringify(lvlInfoStart));

let currLvl = new CurrLvl(1, 0, lvlInfo, levelBtns, inputField);
currLvl.drawFullLvl();

document.addEventListener("mouseover", (e) => {
  if ((e.target as HTMLElement).id) {
    const elts = [
      ...document.querySelectorAll(`#${(e.target as HTMLElement).id}`),
    ];

    elts.forEach((item) => {
      item.classList.add("highlighted");
    });
  }
});
document.addEventListener("mouseout", (e) => {
  if ((e.target as HTMLElement).id) {
    const elts = [
      ...document.querySelectorAll(`#${(e.target as HTMLElement).id}`),
    ];

    elts.forEach((item) => {
      item.classList.remove("highlighted");
    });
  }
});

inputField?.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    currLvl.answerHandler();
    currLvl.saveProgress();
  }
});

submitBtn?.addEventListener("click", () => {
  currLvl.answerHandler();
  currLvl.saveProgress();
});

lvlBtnsCont?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  currLvl.lvlBtnsHandler(target);
  currLvl.saveProgress();
});

function helpHandler() {
  helpBtn?.removeEventListener("click", helpHandler);
  currLvl.drawHelp();
  setTimeout(() => {
    helpBtn?.addEventListener("click", helpHandler);
  }, 2000);
}

helpBtn?.addEventListener("click", helpHandler);

winWords?.addEventListener("click", () => {
  winWords.classList.remove("finished2");
  setTimeout(() => {
    winWords.classList.remove("finished1");
  }, 1000);
});

restartBtn?.addEventListener("click", () => {
  currLvl.restartGame();
  lvlInfo = JSON.parse(JSON.stringify(lvlInfoStart));
  currLvl = new CurrLvl(1, 0, lvlInfo, levelBtns, inputField);
});

window.addEventListener("load", () => {
  const progress: Array<LvlInfo> = JSON.parse(
    localStorage.getItem("LvlInfo") as string
  );
  currLvl.loadProgress(progress);
  lvlInfo = progress;
  currLvl = new CurrLvl(1, 0, lvlInfo, levelBtns, inputField);
});
