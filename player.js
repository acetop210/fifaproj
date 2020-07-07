class Player {
  constructor(spid, sppo, status, num) {
    this.seaL = sea_dict[Math.floor(spid/1000000)];
    this.name = spid_dict.get(spid);
    this.ppo = sppo_dict.get(sppo);
    this.status = status;
    this.pos = 1000+num*100;
    this.num = num;
    this.sea = this.seaL[0];
   }

  mouseOn(){
    //console.log(mouseX,mouseY)
    if(1470<mouseX&&mouseX<1520&&190+50*this.num<mouseY&&mouseY<190+50*this.num+20) return true;
    return false;
  }
}
