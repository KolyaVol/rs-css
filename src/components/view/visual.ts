import "./visual.css";
import "./levels.css";
import "./htmlEx.css";
import "./code.css";
class Subject {
  name: string;

  container: HTMLElement | null = document.querySelector(".game-table");
  lvlHtml: HTMLElement | null = document.querySelector(".code--html-info");
  constructor(name: string) {
    this.name = name;
  }

  addItem(child?: string, id1?: number, id2?: number): void {
    if (this.container) {
      this.container.innerHTML += `
     <div class="${this.name}" id="i${id1}">
     <xmp class="html-clue" id="i${id1}"><${this.name}/></xmp>${
        child
          ? `<div class="${child}" id="i${id2}"></div> 
          <xmp class="html-clue" id="i${id2}"><${child}/></xmp>`
          : ""
      }</div>
     `;
    }
  }

  addHtml(value?: string): void {
    if (this.lvlHtml) {
      this.lvlHtml.innerHTML = `${value}`;
    }
  }

  clearGameTable(): void {
    if (this.container) {
      this.container.innerHTML = "";
    }
  }
}

export default Subject;
