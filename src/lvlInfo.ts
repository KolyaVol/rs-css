import { LvlInfo } from "./types";

const lvlInfo: Array<LvlInfo> = [
  {
    lvl: "1",
    active: true,
    answers: [
      "apple",
      "div >",
      "div > *",
      "div apple",
      "div :first-child",
      "div :last-child",
      ".game-table apple",
      ".game-table *",
      ".game-table > *",
      ".game-table:first-child",
      ".game-table :first-child",
    ],
    withHelp: false,
    complited: false,
    dishes: ["", "apple strobe"],
    html: `<xmp><div class="game-table"></xmp>
       <xmp id = "i1">  <apple/></xmp> 
     <xmp></div></xmp> `,
  },
  {
    lvl: "2",
    active: false,
    answers: [
      "orange",
      "plate >",
      "plate > *",
      "plate orange",
      "plate :first-child",
      "plate :last-child",
      ".game-table plate orange",
      ".game-table plate *",
      ".game-table plate > *",
      ".game-table plate :first-child",
      ".game-table plate :last-child",
    ],
    withHelp: false,
    complited: false,
    dishes: ["plate", "orange strobe"],
    html: `<xmp><div class="game-table"></xmp>
       <div class = "dishes" ><xmp id = "i0">  <plate></xmp>  <xmp id = "i1">    <orange/></xmp>  <xmp id = "i0">  </plate></xmp>  </div>
     <xmp></div></xmp> `,
  },
  {
    lvl: "3",
    active: false,
    answers: [
      ".small",
      "apple.small",
      "plate apple.small",
      "plate .small",
      "plate .small",
      "plate :first-child",
      "plate :last-child",
      ".game-table plate apple",
      ".game-table plate *",
      ".game-table plate > *",
      ".game-table plate:first-child apple",
      ".game-table plate:first-child .small",
    ],
    withHelp: false,
    complited: false,
    dishes: ["plate ", "apple small strobe", "plate", "apple"],
    html: `<xmp><div class="game-table"></xmp>
       <div class = "dishes" ><xmp id = "i0">  <plate></xmp>  <xmp id = "i1">    <apple class = "small"/></xmp>  <xmp id = "i0">  </plate></xmp>  </div>
       <div class = "dishes" > <xmp id = "i2">  <plate></xmp>  <xmp id = "i3">    <apple/></xmp> <xmp id = "i2">  </plate></xmp> </div>
     <xmp></div></xmp> `,
  },
  {
    lvl: "4",
    active: false,
    answers: [
      "cuc",
      "div :first-child",
      "div cuc",
      ".game-table cuc",
      ".game-table > cuc",
      ".game-table :first-child",
    ],
    withHelp: false,
    complited: false,
    dishes: ["", "cuc strobe", "", "apple "],
    html: `<xmp><div class="game-table"></xmp>
       <xmp id = "i1">  <cuc/></xmp>
       <xmp id = "i3">  <apple/></xmp>
     <xmp></div></xmp> `,
  },
  {
    lvl: "5",
    active: false,
    answers: [
      "sq-plate apple",
      ".game-table sq-plate *",
      ".game-table sq-plate > *",
      ".game-table :nth-child(2) apple",
    ],
    withHelp: false,
    complited: false,
    dishes: ["plate", "apple", "sq-plate", "apple strobe", "plate", "apple"],
    html: `<xmp><div class="game-table"></xmp>
       <div class = "dishes" ><xmp id = "i0">  <plate></xmp>  <xmp id = "i1">    <apple/></xmp>  <xmp id = "i0">  </plate></xmp>  </div>
       <div class = "dishes" > <xmp id = "i2">  <sq-plate></xmp>  <xmp id = "i3">    <apple/></xmp>  <xmp id = "i2">  </sq-plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i4">  <plate></xmp>  <xmp id = "i5">    <apple/></xmp>  <xmp id = "i4">  </plate></xmp> </div>
     <xmp></div></xmp> `,
  },
  {
    lvl: "6",
    active: false,
    answers: [
      "plate orange",
      ".game-table :nth-child(2) orange, .game-table :nth-child(4) orange",
      ".game-table :nth-child(2) *, .game-table :nth-child(4) *",
      ".game-table :nth-child(2) > *, .game-table :nth-child(4) > *",
    ],
    withHelp: false,
    complited: false,
    dishes: [
      "plate",
      "",
      "plate",
      "orange strobe",
      "",
      "orange",
      "plate",
      "orange strobe",
      "plate",
      "apple",
    ],
    html: `<xmp><div class="game-table"></xmp>
       <div class = "dishes" ><xmp id = "i0">  <plate></xmp>  <xmp id = "i0">  </plate></xmp>  </div>
       <div class = "dishes" > <xmp id = "i2">  <plate></xmp>  <xmp id = "i3">    <orange/></xmp>  <xmp id = "i2">  </plate></xmp> </div>
       <xmp id = "i5">  <orange/></xmp> </div>
       <div class = "dishes" > <xmp id = "i6">  <plate></xmp>  <xmp id = "i7">    <orange/></xmp>  <xmp id = "i6">  </plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i8">  <plate></xmp>  <xmp id = "i9">    <apple/></xmp>  <xmp id = "i8">  </plate></xmp> </div>
     <xmp></div></xmp> `,
  },
  {
    lvl: "7",
    active: false,
    answers: [
      "cuc:last-child",
      ".game-table :last-child",
      ".game-table :nth-child(3)",
    ],
    withHelp: false,
    complited: false,
    dishes: ["", "cuc", "", "cuc", "", "cuc strobe"],
    html: `<xmp><div class="game-table"></xmp>
      <xmp id = "i1">  <cuc/></xmp> 
      <xmp id = "i3">  <cuc/></xmp>
      <xmp id = "i5">  <cuc/></xmp>
     <xmp></div></xmp> `,
  },
  {
    lvl: "8",
    active: false,
    answers: [
      "cuc.small, orange, apple",
      "cuc.small, apple, orange",
      ".small, orange",
      "cuc.small, plate *",
      "cuc.small, plate > *",
      "cuc.small, plate > orange, plate > apple",
      "cuc.small, plate > apple, plate > orange",
    ],
    withHelp: false,
    complited: false,
    dishes: [
      "",
      "cuc small strobe",
      "",
      "cuc",
      "",
      "orange strobe",
      "plate",
      "orange strobe",
      "plate",
      "apple strobe small ",
    ],
    html: `<xmp><div class="game-table"></xmp>
       <xmp id = "i1">    <cuc class = "small"/></xmp>
       <xmp id = "i3">    <cuc/></xmp>
       <xmp id = "i5">    <orange/></xmp>
       <div class = "dishes" > <xmp id = "i6">  <plate></xmp>  <xmp id = "i7">    <orange/></xmp>  <xmp id = "i6">  </plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i8">  <plate></xmp>  <xmp id = "i9">    <apple/></xmp>  <xmp id = "i8">  </plate></xmp> </div>
     <xmp></div></xmp> `,
  },
  {
    lvl: "9",
    active: false,
    answers: [
      "apple:first-child, apple:last-child, apple:nth-child(2)",
      "apple:first-child,apple:nth-child(2), apple:last-child",
      "apple:nth-child(1), apple:nth-child(3), apple:nth-child(5)",
      "apple:nth-child(1), apple:first-child, apple:last-child",
      "div :nth-child(2), div :nth-child(4), div :nth-child(6)",
      "div :nth-child(6), div :nth-child(4), div :nth-child(2)",
    ],
    withHelp: false,
    complited: false,
    dishes: [
      "sq-plate",
      "cuc",
      "",
      "apple strobe",
      "",
      "apple",
      "",
      "apple small strobe",
      "",
      "apple",
      "",
      "apple strobe",
      "sq-plate",
      "cuc",
    ],
    html: `<xmp><div class="game-table"></xmp>
       <div class = "dishes" > <xmp id = "i0">  <sq-plate></xmp>  <xmp id = "i1">    <cuc/></xmp>  <xmp id = "i0">  </sq-plate></xmp>  </div>
       <xmp id = "i3">    <apple/></xmp>
       <xmp id = "i5">    <apple/></xmp>
       <xmp id = "i7">    <apple class = "small"/></xmp>
       <xmp id = "i9">    <apple/></xmp>
       <xmp id = "i11">    <apple/></xmp>
       <div class = "dishes" > <xmp id = "i12">  <sq-plate></xmp>  <xmp id = "i13">    <cuc/></xmp>  <xmp id = "i12">  </sq-plate></xmp>  </div>
     <xmp></div></xmp> `,
  },
  {
    lvl: "10",
    active: false,
    answers: [
      "orange:not(.small)",
      "div :nth-child(2) orange, div :nth-child(4) orange, div :nth-child(6) orange",
      "div :nth-child(2) > orange, div :nth-child(4) > orange, div > :nth-child(6) orange",
      "div :nth-child(2) orange, div :nth-child(4) orange, div :last-child orange",
      "div :nth-child(2) orange, div :nth-child(4) orange, div :last-child orange",
      "plate:nth-child(2) orange, plate:nth-child(3) orange, plate:nth-child(4) orange",
      "plate:nth-child(2) orange, plate:nth-child(3) orange, plate:last-child orange",
    ],
    withHelp: false,
    complited: false,
    dishes: [
      "plate",
      "orange small",
      "plate",
      "orange strobe",
      "sq-plate",
      "orange small",
      "plate",
      "orange strobe",
      "sq-plate",
      "orange small",
      "plate",
      "orange strobe",
    ],
    html: `<xmp><div class="game-table"></xmp>
       <div class = "dishes" ><xmp id = "i0">  <plate></xmp>  <xmp id = "i1">    <orange class = "small" /></xmp>  <xmp id = "i0">  </plate></xmp>  </div>
       <div class = "dishes" > <xmp id = "i2">  <plate></xmp>  <xmp id = "i3">    <orange/></xmp>  <xmp id = "i2">  </plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i4">  <plate></xmp>  <xmp id = "i5">    <orange class = "small" /></xmp>  <xmp id = "i4">  </plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i6">  <plate></xmp>  <xmp id = "i7">    <orange/></xmp>  <xmp id = "i6">  </plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i8">  <plate></xmp>  <xmp id = "i9">    <orange class = "small" /></xmp>  <xmp id = "i8">  </plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i10">  <plate></xmp>  <xmp id = "i11">    <orange/></xmp>  <xmp id = "i10">  </plate></xmp> </div>
     <xmp></div></xmp> `,
  },
  {
    lvl: "11",
    active: false,
    answers: [
      "plate:empty, sq-plate:empty",
      "div :nth-child(2), div :nth-child(3)",
    ],
    withHelp: false,
    complited: false,
    dishes: [
      "plate",
      "apple",
      "plate strobe",
      "",
      "sq-plate strobe",
      "",
      "",
      "orange",
    ],
    html: `<xmp><div class="game-table"></xmp>
       <div class = "dishes" ><xmp id = "i0">  <plate></xmp>  <xmp id = "i1">    <apple/></xmp>  <xmp id = "i0">  </plate></xmp>  </div>
       <div class = "dishes" > <xmp id = "i2">  <plate></xmp><xmp id = "i2">  </plate></xmp> </div>
       <div class = "dishes" > <xmp id = "i4">  <sq-plate></xmp><xmp id = "i4">  </sq-plate></xmp> </div>
       <xmp id = "i7">    <orange/></xmp>
     <xmp></div></xmp> `,
  },
];

export default lvlInfo;
