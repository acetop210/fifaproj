function drawBase(){
  fill(0,162,232);
  rect(0,0,windowWidth,100);
  rect(0,750,windowWidth,windowHeight-750);
  logo.position(30,15);
  logo2.position(550,770);
  button1.position(540,60);
  button2.position(540+button1.width,60);
  button3.position(540+2*button1.width,60);
  button4.position(540+3*button1.width,60);
  button5.position(540+4*button1.width,60);
  setButton();
//  homebutton.position(270,42);
  login();
  hideSearch();
  btnhide();
  dbtnhide();
  playerSel.hide();
}

function setButton(){
  if(dis==1) button1.style('background-color',color(164,190,223));
  else button1.style('background-color',color(153,217,234));
  if(dis==2) button2.style('background-color',color(164,190,223));
  else button2.style('background-color',color(153,217,234));
  if(dis==3) button3.style('background-color',color(164,190,223));
  else button3.style('background-color',color(153,217,234));
  if(dis==4) button4.style('background-color',color(164,190,223));
  else button4.style('background-color',color(153,217,234));
  if(dis==5) button5.style('background-color',color(164,190,223));
  else button5.style('background-color',color(153,217,234));
}

function login(){
  loginput.size(130,30);
  loginput.position(930,55);
  if(islogin == false){
    logoutbutton.hide();
    loginbutton.show();
    loginbutton.position(1070,60);
    loginput.show();
  }
  else {
    loginbutton.hide();
    loginput.hide();
    logoutbutton.show();
    logoutbutton.position(1070,60);
  }
}

function showSearch(){
  input.show();
  button6.show();
  matchsel.show();
}

function hideSearch(){
  input.hide();
  button6.hide();
  matchsel.hide();
}

function draw0(){
  image(img, 385,150,385*2,215*2+150);
}

function dbtnshow(){
  buybtn.show();
  sellbtn.show();
}

function dbtnhide(){
  buybtn.hide();
  sellbtn.hide();
}

function btnshow(){
  nextButton.show();
  befButton.show();
}

function btnhide(){
  nextButton.hide();
  befButton.hide();
}

function chbutton1(){
  if(table != undefined && table.enemyL.length>5){
    if(table.page==0) table.page=1;
  }
}

function chbutton2(){
  if(table != undefined){
    if(table.page == 1) table.page=0;
  }
}

function dchbutton1(){
  if(dealtable != undefined && dealtable.spidL.length>5){
    if(dealtable.page==1) dealtable.page=0;
  }
}

function dchbutton2(){
  if(dealtable != undefined){
    if(dealtable.page == 0) dealtable.page=1;
  }
}

function draw1(){
  showSearch();
  input.position(540 + 2*button1.width,150);
  button6.position(540 + 2*button1.width+input.width+10,165);
  matchsel.position(300,150);
  console.log(matchsel.value(), bmsel);
  if(matchsel.value() != bmsel) click6();
  button6.mousePressed(click6);
  if(table != undefined){
    stroke(3);
    textSize(20);
    image(ball_img,80,200,100,100);
    textAlign(CENTER);
    text(userdiv, 130,170);
    textAlign(LEFT);
    textSize(12);
    stroke(1);
    nextButton.mousePressed(chbutton1);
    befButton.mousePressed(chbutton2);
    btnshow();
    table.draw();
  }
}

function draw2(){
  playerSel.show();
  playerSel.position(100,150);
  if(playerSel.value()=="GK") drawGraph(gkList);
  if(playerSel.value()=="DF") drawGraph(dfList);
  if(playerSel.value()=="MF") drawGraph(mfList);
  if(playerSel.value()=="FW") drawGraph(fwList);
  if(playerSel.value()=="SUB") drawGraph(subList);
}

function draw3(){
  buybtn.mousePressed(dchbutton1);
  sellbtn.mousePressed(dchbutton2);
  console.log(dealtable);
  try{
    dealtable.draw();
  }
  catch(e){
    console.log("error");
  }
  dbtnshow();
}
