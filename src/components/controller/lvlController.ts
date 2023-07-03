import { LvlInfo } from "../../types";
import { LvlControll } from "../../types";
import Subj from "../view/visual";

const codeField = document.querySelector(".code");
const lvlBtnsCont = document.querySelector(".levels");
const winWords = document.querySelector(".win-words");
const methSubj = new Subj("name");

class CurrLvl implements LvlControll {
  lvl: number;
  complLvls: number;
  lvlArr: Array<LvlInfo>;
  levelBtns: Array<HTMLElement>;
  inputField: HTMLInputElement | null;

  constructor(
    lvl = 1,
    complLvls = 0,
    lvlArr: Array<LvlInfo>,
    levelBtns: Array<HTMLElement>,
    inputField: HTMLInputElement | null
  ) {
    this.lvl = lvl;
    this.complLvls = complLvls;
    this.lvlArr = lvlArr;
    this.levelBtns = levelBtns;
    this.inputField = inputField;
  }
  findLvl() {
    let clvl = 1;
    this.lvlArr.forEach((lvl) => {
      if (lvl.active) {
        clvl = +lvl.lvl;
      }
    });
    this.lvl = clvl;
    console.log(this.lvlArr);
    console.log(this.lvl);

    return this.lvl;
  }

  drawFullLvl() {
    let level;

    if (this.lvl === 0) {
      level = this.lvlArr[this.lvl];
    } else level = this.lvlArr[this.lvl - 1];

    methSubj.clearGameTable();
    methSubj.addHtml(level.html);
    for (let i = 0; i < level.dishes.length; i += 2) {
      const smth = new Subj(level.dishes[i]);
      smth.addItem(level.dishes[i + 1], i, i + 1);
    }
  }

  toNextLvl() {
    const currLvl = this.lvlArr[this.lvl - 1];
    const nextLvl = this.lvlArr[this.lvl];
    const currLvlBtn = lvlBtnsCont?.querySelector(`#levels--item${this.lvl}`);

    this.lvl++;

    if (+currLvl.lvl < this.lvlArr.length) {
      const nextLvlBtn = lvlBtnsCont?.querySelector(`#levels--item${this.lvl}`);

      this.lvlArr.forEach((item) => {
        item.active = false;
      });
      nextLvl.active = true;

      this.drawFullLvl();

      this.levelBtns.forEach((level) => {
        level.classList.remove("active");
      });

      (codeField as HTMLElement).classList.add("correct");
      setTimeout(() => {
        (codeField as HTMLElement).classList.remove("correct");
      }, 1000);
      (nextLvlBtn as HTMLElement).classList.add("active");
    }

    currLvl.complited = true;
    this.complLvls++;
    this.checkWin();
    (currLvlBtn as HTMLElement).classList.add("complited");
  }

  checkAnswer() {
    if (this.lvlArr[this.lvl - 1]) {
      return this.lvlArr[this.lvl - 1].answers.includes(
        this.inputField?.value.trim() as string
      );
    }
    return false;
  }

  answerHandler() {
    if (this.checkAnswer()) {
      (this.inputField as HTMLInputElement).value = "";
      this.toNextLvl();
    } else {
      (codeField as HTMLElement).classList.add("wrong");
      setTimeout(() => {
        (codeField as HTMLElement).classList.remove("wrong");
      }, 1000);
    }
  }

  checkWin() {
    if (this.complLvls === this.lvlArr.length) {
      winWords?.classList.add("finished1");
      setTimeout(() => {
        winWords?.classList.add("finished2");
      }, 100);
    }
  }

  drawHelp() {
    this.findLvl();
    const currLvlBtn = lvlBtnsCont?.querySelector(`#levels--item${this.lvl}`);
    const currLvl = this.lvlArr[this.lvl - 1];
    const firstAnswer = currLvl.answers[0].split("");
    (this.inputField as HTMLInputElement).value = "";

    for (let i = 0; i < firstAnswer.length; i++) {
      setTimeout(() => {
        (this.inputField as HTMLInputElement).value += firstAnswer[i];
      }, i * 200);
    }
    currLvlBtn?.classList.add("with-help");
    currLvl.withHelp = true;
    setTimeout(() => {
      this.toNextLvl();
      (this.inputField as HTMLInputElement).value = "";
    }, firstAnswer.length * 200 + 1000);
    console.log(this.lvl);
  }
  restartGame() {
    this.removeBtnsClasses();

    const lvlBtn = lvlBtnsCont?.querySelector(`#levels--item1`);
    (lvlBtn as HTMLElement).classList.add("active");
    this.lvl = 0;
    this.drawFullLvl();
    this.lvl++;
  }

  saveProgress() {
    localStorage.setItem("LvlInfo", JSON.stringify(this.lvlArr));
  }

  loadProgress(progress: Array<LvlInfo>) {
    if (localStorage.getItem("LvlInfo")) {
      this.removeBtnsClasses();
      progress.forEach((lvl: LvlInfo) => {
        const currLvlBtn = lvlBtnsCont?.querySelector(
          `#levels--item${lvl.lvl}`
        );
        if (lvl.complited && lvl.withHelp) {
          currLvlBtn?.classList.add("complited");
          currLvlBtn?.classList.add("with-help");
        } else if (lvl.complited && !lvl.withHelp) {
          currLvlBtn?.classList.add("complited");
        }

        if (lvl.active) {
          this.lvl = +lvl.lvl;

          currLvlBtn?.classList.add("active");
        }
      });
    }
    this.drawFullLvl();
  }

  lvlBtnsHandler(target: HTMLElement) {
    if (target.classList[0] === "levels--item") {
      const choosenLvlId: number = +target.id.split("m")[1] - 1;
      const choosenLvl = this.lvlArr[choosenLvlId];

      this.lvlArr.forEach((item: LvlInfo) => {
        item.active = false;
      });
      choosenLvl.active = true;
      this.findLvl();

      this.drawFullLvl();

      this.levelBtns.forEach((level) => {
        level.classList.remove("active");
      });
      target.classList.add("active");
    }
  }

  removeBtnsClasses() {
    this.levelBtns.forEach((lvl) => {
      lvl.classList.remove("active");
      lvl.classList.remove("complited");
      lvl.classList.remove("with-help");
    });
  }
}

export default CurrLvl;
