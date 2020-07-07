class Table{
  constructor(enemy, result, possetion, foul, yellow, red) {
    this.page = 0;
    this.enemyL = enemy;
    this.resultL = result;
    this.possetionL = possetion;
    this.foulL = foul;
    this.yellowL = yellow;
    this.redL = red;
    this.txtL = ["상대", "결과", "점유율", "파울 수", "옐로 카드", "레드 카드"];
  }

  drawline(){
    fill(0);
    rect(280,220,1000,10);
    for(let i=0; i<6; i++){
      rect(280,270+81*i,200,1);
      textAlign(CENTER);
      textSize(16);
      text(this.txtL[0],380,255);
      for(let j=0; j<5; j++){
        text(this.txtL[j+1],484+160*j+78,255);
        rect(484+160*j,270+81*i,156,1);
      }
      textSize(12);
    textAlign(LEFT);
    }
   }

   drawbutton(){
     textAlign(CENTER);
     strokeWeight(0);
     text(this.page+1,730,695);
     strokeWeight(1);
     textAlign(LEFT);
     nextButton.position(790, 680);
     befButton.position(630, 680);
   }

   drawInfo(){
     textAlign(CENTER);
     textSize(16);
     strokeWeight(0);
     for(let i=0; i<5; i++){
       let list = [];
       let enemy = this.enemyL[i+5*this.page];
       let result = this.resultL[i+5*this.page];
       //console.log(result);
       let possetion = this.possetionL[i+5*this.page];
       let foul = this.foulL[i+5*this.page];
       let yellow = this.yellowL[i+5*this.page];
       let red = this.redL[i+5*this.page];
       let rectcol;
       //color(13,173,242,70)
       if(result == "승") rectcol = color(0,255,128,70);
       else if(result == "무") rectcol = color(0,0,0,70);
       else rectcol = color(253,46,2,70);
       fill(rectcol);
       rect(280,270+81*i+2,1000,80);
       fill(0);
       list.push(result);
       list.push(possetion);
       list.push(foul);
       list.push(yellow);
       list.push(red);
       text(enemy, 380, 270+81*(i+1)-40.5);
       //console.log(enemy);
       for(let j=0; j<5; j++){
         text(list[j], 484+160*j+80, 270+81*(i+1)-40.5);
       }
     }
     textSize(12);
     textAlign(LEFT);
     strokeWeight(1);
   }

   draw(){
     this.drawline();
     this.drawbutton();
     this.drawInfo();
   }
}

class dealTable{
  constructor(date, spid, grade, val) {
    this.dateL = date;
    this.spidL = spid;
    this.gradeL = grade;
    this.valL = val;
    this.txtL = ["날짜", "시즌", "선수", "강화등급", "가격"];
    this.page = 0;
  }

  drawline(){
    fill(0);
    rect(280,220,1000,10);
    for(let i=0; i<6; i++){
      rect(280,270+81*i,200,1);
      textAlign(CENTER);
      textSize(16);
      text(this.txtL[0],380,255);
      for(let j=0; j<4; j++){
        text(this.txtL[j+1],484+200*j+98,255);
        rect(484+200*j,270+81*i,196,1);
      }
      textSize(12);
    textAlign(LEFT);
    }
   }

   drawbutton(){
     buybtn.position(280, 190);
     sellbtn.position(330,190);
   }

   drawInfo(){
     textAlign(CENTER);
     textSize(16);
     strokeWeight(0);
     for(let i=0; i<5; i++){
       let list = [];
       let date = this.dateL[i+5*this.page];
       let spid = this.spidL[i+5*this.page];
       let sea = sea_dict[Math.floor(spid/1000000)][0];
       //console.log(result);
       let name = spid_dict.get(spid);
       let grade = this.gradeL[i+5*this.page];
       let val = this.valL[i+5*this.page];
       list.push(sea);
       list.push(name);
       list.push(grade);
       list.push(val);
       text(date, 380, 270+81*(i+1)-40.5);
       //console.log(enemy);
       for(let j=0; j<4; j++){
         text(list[j], 484+200*j+88,270+81*(i+1)-40.5);
       }
     }
     textSize(12);
     textAlign(LEFT);
     strokeWeight(1);
   }

   draw(){
     this.drawline();
     this.drawbutton();
     this.drawInfo();
   }
}
