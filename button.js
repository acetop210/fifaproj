let accessid="";
function click1(){
  dis=1;
  console.log(dis);
}

function click2(){
  if(islogin== true) dis=2;
  console.log(dis);
}

function click3(){
  dis=3;
  console.log(dis);
}

function click4(){
  dis=4;
  console.log(dis);
}

function click5(){
  dis=5;
  console.log(dis);
}

function mouseClicked(){
  if(30<mouseX && mouseX<266 && 35<mouseY && mouseY<65) dis=0;
}

function logf1(){
  getUserID(loginput.value(), 1);
  setTimeout(function () {
    console.log(myID);
    if(myID==""){
        console.log("fail");
        fill(0);
        txt1.show();
        txt1.position(930,5);
      }
      else{
        islogin = true;
        txt1.hide();
        console.log(myID);
        islogin = true;
        getmyMatch(myID, 1, "50");
        setTimeout(function () {
          makePlayer();
          console.log(gkList);
          setTimeout(function () {
            makepList();
          },2500);
        },2000);
      }
  },1500);
}

function logf2(){
  islogin = false;
  if(dis==2) dis=0;
  myID = "";
  matchList = [];
  playerList = {};
  playerlist = {};
  playerL1 = {};
  playerL2 = {};
  playerL3 = {};
  playerL4 = {};
  playerL5 = {};
  gkList=[];
  dfList=[];
  mfList=[];
  fwList=[];
  subList=[];
  console.log(gkList);
}

function click6(){
  if(dis==1){
    let username = input.value();
    let msel = matchsel.value();;
    let mnum;
    if(username != busername || msel != bmsel){
      busername = username;
      bmsel = msel;
      if(msel=="공식경기") mnum = "50";
      else mnum = "52";
      accessid="";
      getUserID(username, 2);
      setTimeout(function () {
        if(accessid==""){
            console.log("fail");
            fill(0);
            txt1.show();
            txt1.position(540 + 2*button1.width,100);
          }
          else{
            txt1.hide();
            console.log(accessid);
            getmyMatch(accessid, 2, mnum);
            setTimeout(function () {
              console.log(us_matchList);
              getUserInfo(accessid);
              getuserMatch();
              setTimeout(function(){
                console.log(userdiv);
              },1000);
            },1000);
          }
      },1000);
    }
  }
}
