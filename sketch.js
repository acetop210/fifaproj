let button1, button2, button3, button4, button5, button6;
let input, logo;
let dis = 0;
let txt1;

function setup() {
  dictMake();
  createCanvas(1540,990);
  input = createInput();
  input.size(500,50);
  button1 = createButton('유저검색');
  button2 = createButton('선수비교');
  button3 = createButton('전술비교');
  button4 = createButton('선수검색');
  button5 = createButton('스쿼드메이커');
  button6 = createButton('검색');
  logo = createElement('h2', 'FIFAONLINE4 도우미');
  matchsel = createSelect();
  matchsel.size(250,50);
  matchsel.option('공식경기');
  matchsel.option('감독경기');
  drawBase();
  button1.mousePressed(click1);
  button2.mousePressed(click2);
  button3.mousePressed(click3);
  button4.mousePressed(click4);
  button5.mousePressed(click5);
}

function draw() {
  drawBase();
  if(dis==1) draw1();
  if(dis==2) draw2();
}
