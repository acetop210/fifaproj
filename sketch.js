let button1, button2, button3, button4, button5, button6;
let input, logo;
let loginput;
let islogin = false;
let dis = 0;
let txt1;
let img;
let playerSel;
let fillcolList;
let busername;
function setup() {
  textFont('Georgia');
  fillcolList = [color(255,0,0,96), color(0,255,0,96), color(0,0,255,96), color(225,0,128,96), color(0,64,64,96), color(64,0,64,96), color(128,128,0,96), color(0,255,55,96),color(255,0,255,96),color(128,0,64,96)];
  dictMake();
  createCanvas(windowWidth,windowHeight);
  input = createInput();
  input.size(500,50);
  loginput = createInput();
  loginbutton = createButton('LOG IN');
  logoutbutton = createButton('LOG OUT');
  nextButton = createButton('다음');
  befButton = createButton('이전');
  button1 = createButton('유저검색');
  button2 = createButton('선수비교');
  button3 = createButton('전술비교');
  button4 = createButton('선수검색');
  button5 = createButton('스쿼드메이커');
  button6 = createButton('검색');
//  homebutton = createButton('HOME');
  logo = createElement('h2', 'FIFAONLINE4 도우미');
  logo2 = createElement('h2', 'Data based on NEXON DEVELOPERS');
  txt1 = createP("존재하지 않는 닉네임입니다.");
  matchsel = createSelect();
  matchsel.size(250,50);
  matchsel.option('공식경기');
  matchsel.option('감독경기');
  playerSel = createSelect();
  playerSel.size(200,50);
  playerSel.option('GK');
  playerSel.option('DF');
  playerSel.option('MF');
  playerSel.option('FW');
  playerSel.option('SUB');
  drawBase();
  button1.mousePressed(click1);
  button2.mousePressed(click2);
  button3.mousePressed(click3);
  button4.mousePressed(click4);
  button5.mousePressed(click5);
  loginbutton.mousePressed(logf1);
  logoutbutton.mousePressed(logf2);
  txt1.hide();
  img = loadImage("logo.png");
  no_img = loadImage("noimage.png");
  trophyimg = loadImage("trophy.png");
  busername = ""
}

function draw() {
  background(255);
  drawBase();
  if(dis==0) draw0();
  if(dis==1) draw1();
  if(dis==2) draw2();
}
