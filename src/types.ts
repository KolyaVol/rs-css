type LvlInfo = {
  lvl: string;
  active: boolean;
  dishes: Array<string>;
  html: string;
  answers: Array<string>;
  withHelp: boolean;
  complited: boolean;
};

interface LvlControll {
  lvl: number;
  complLvls: number;
  lvlArr: Array<LvlInfo>;
  inputField: HTMLInputElement | null;

  findLvl(): number;
  toNextLvl(): void;
  checkAnswer(): boolean;
  drawHelp(): void;
  drawFullLvl(): void;
  answerHandler(): void;
  checkWin(): void;
  restartGame(): void;
  saveProgress(): void;
  loadProgress(progress: Array<LvlInfo>): void;
  lvlBtnsHandler(target: HTMLElement): void;
  removeBtnsClasses(): void;
}

export type { LvlInfo, LvlControll };
