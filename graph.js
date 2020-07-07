function drawGuide(shootmx,assistmx,gmx,dribblemx,ptmx,psmx,bmx,tmx){
  //circle
  translate(920,425);
  stroke(0);
  noFill();
  for(let i=1; i<6; i++) circle(0,0,90*i);
  fill(0);
  //line
  for(let j=0; j<8; j++){
    push();
    rotate(j*TWO_PI/8);
    line(0,0,270,0);
    if(j==0){
      text("Shoot",290,0);
      text(shootmx,290,20);
    }
    if(j==1){
      text("Assist",290,0);
      text(assistmx,290,20)
    }
    if(j==2){
      push();
      translate(290,0);
      rotate(-PI/2);
      text("Goal",-10,0);
      text(gmx,-10,20);
      pop();
    }
    if(j==3){
      push();
      translate(290,0);
      rotate(-PI);
      text("Dribble",-30,0);
      text(dribblemx,-30,20);
      pop();
    }
    if(j==4){
      push();
      translate(290,0);
      rotate(-PI);
      text("PassTry",-30,0);
      text(ptmx,-30,20);
      pop();
    }
    if(j==5){
      push();
      translate(290,0);
      rotate(-PI);
      text("passSuccess",-40,0);
      text(psmx,-30,20);
      pop();
    }
    if(j==6){
      push();
      translate(290,0);
      rotate(PI/2);
      text("Block",-20,0);
      text(bmx,-20,20);
      pop();
    }
    if(j==7){
      text("Tackle",290,0);
      text(tmx,290,20);
    }
    pop();
  }
  translate(-920,-425);
}

function drawGraph(player){
  let imgt=0;
  let shootmx=2;
  let assistmx=2;
  let gmx=2;
  let dribblemx=5;
  let ptmx=5;
  let psmx=5;
  let bmx=2;
  let tmx=2;
  let plmax = player[0];
  for(let i=0; player[i]; i++){
    let ps = player[i].status;
    if(shootmx < ps.shoot) shootmx = ps.shoot;
    if(assistmx < ps.assist) assistmx = ps.assist;
    if(gmx < ps.goal) gmx = ps.goal;
    if(dribblemx < ps.dribble) dribblemx = ps.dribble;
    if(ptmx < ps.passTry) ptmx = ps.passTry;
    if(psmx < ps.passSuccess) psmx = ps.passSuccess;
    if(bmx < ps.block) bmx = ps.block;
    if(tmx < ps.tackle) tmx = ps.tackle;
  }
  drawGuide(shootmx,assistmx,gmx,dribblemx,ptmx,psmx,bmx,tmx);
  let ismouse = false;
  let mousep;
  for(let i=0; player[i]; i++){
    if(plmax.status.spRating < player[i].spRating) plmax = player[i];
    if(player[i].mouseOn()==true){
      ismouse = true;
      mousep=i;
    }
  }
  for(let i=0; player[i]; i++){
    if(ismouse && i==mousep)  grplot(shootmx,assistmx,gmx,dribblemx,ptmx,psmx,bmx,tmx,player[mousep],fillcolList[mousep],fillcolList[mousep],mousep,plmax,player,i, true, ismouse);
    else grplot(shootmx,assistmx,gmx,dribblemx,ptmx,psmx,bmx,tmx,player[i],fillcolList[i],fillcolList[i],i,plmax,player,i, false, ismouse);
  }
}

function grplot(shootmx,assistmx,gmx,dribblemx,ptmx,psmx,bmx,tmx,player,fillcol,pointcol,num,plmax,playerL,num2, isp, ism){
  if(ism&&!isp) fillcol = color(0,0,0,40);
  fill(fillcol);
  rect(1470,190+50*num,50,20);
  stroke(150);
  text(player.name, 1350, 205+50*num);
  text(player.sea, 1300, 205+50*num);
  stroke(0);
  if(!ism || (ism&&isp)){
    let k = 8;
    translate(920,425);
    beginShape();
    fill(fillcol);
    for(let j=0; j<k; j++){
      push();
      let theta = j*TWO_PI/k;
      rotate(theta);
      noStroke();
      fill(pointcol);
      let r;
      if(j==0) r = (225*player.status.shoot/shootmx>0)?(225*player.status.shoot/shootmx):3;
      if(j==1) r = (225*player.status.assist/assistmx>0)?(225*player.status.assist/assistmx):3;
      if(j==2) r = (225*player.status.goal/gmx>0)?(225*player.status.goal/gmx):3;
      if(j==3) r = (225*player.status.dribble/dribblemx>0)?(225*player.status.dribble/dribblemx):3;
      if(j==4) r = (225*player.status.passTry/ptmx>0)?(225*player.status.passTry/ptmx):3;
      if(j==5) r = (225*player.status.passSuccess/psmx>0)?(225*player.status.passSuccess/psmx):3;
      if(j==6) r = (225*player.status.block/bmx>0)?(225*player.status.block/bmx):3;
      if(j==7) r = (225*player.status.tackle/tmx>0)?(225*player.status.tackle/tmx):3;
      circle(r,0,5);
      let x = r*cos(theta);
      let y = r*sin(theta);
      vertex(x,y);
      pop();
    }
    endShape(CLOSE);
    translate(-920,-425);
  }
  if(num2==playerL.length-1){
    image(trophyimg,100,270,400,400);
    textAlign(CENTER);
    text(plmax.name, 300,637);
    textSize(18);
    fill(0);
    text(Math.round(plmax.status.spRating*10)/10, 300,265);
    textSize(12);
    textAlign(LEFT);
  }
}
