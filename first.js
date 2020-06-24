function drawBase(){
  fill(0,162,232);
  rect(0,0,1540,100);
  logo.position(30,15);
  button1.position(540,60);
  button2.position(540+button1.width,60);
  button3.position(540+2*button1.width,60);
  button4.position(540+3*button1.width,60);
  button5.position(540+4*button1.width,60);
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

function draw1(){
  showSearch();
  input.position(540 + 2*button1.width,150);
  button6.position(540 + 2*button1.width+input.width+10,165);
  button6.mousePressed(click6);
  matchsel.position(300,150);
}

function draw2(){
  hideSearch();
}
