let spid, sppo, div;
var pdict={};
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMzAyNDcxMzk4IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTkxNDQzNzEzLCJleHAiOjE2NTQ1MTU3MTMsImlhdCI6MTU5MTQ0MzcxM30.3udmK-WR4ohpfNL4tVLcN9swQE7b74tOUtMy63k1ZqQ";
var spid_dict = new p5.TypedDict();
var sppo_dict = new p5.TypedDict();
var div_dict = {};
let imgDict = {};
userURL = 'https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname='
var myID="";
let matchURL1 = "https://api.nexon.co.kr/fifaonline4/v1.0/users/" //+accessid
let matchURL2 = "/matches?matchtype=50&offset=0&limit=10"
let matchList;
let playerList = {};
let playerL1 = {};
let playerL2 = {};
let playerL3 = {};
let playerL4 = {};
let playerL5 = {};
let ppolist = ["GK","SW","RWB","RB","RCB","CB","LCB","LB","LWB","RDM","CDM","LDM","RM","RCM","CM","LCM","LM","RAM","CAM","LAM","RF","CF","LF","RW","RS","ST","LS","LW","SUB"];
let gkList=[];
let dfList=[];
let mfList=[];
let fwList=[];
let subList=[];
let us_matchList=[];
let userdiv;
let table;

function preload(){
  basedata();
}

function basedata(){
  spid = loadJSON("spid.json",'json');
  sppo = loadJSON("spposition.json",'json');
  div = loadJSON("division.json",'json');
}

function dictMake(){
  for(var i=0; spid[i]; i++){
    spid_dict.create(spid[i].id, spid[i].name);
  }
  for(var i=0; sppo[i]; i++){
    sppo_dict.create(sppo[i].spposition, sppo[i].desc);
  }
  for(var i=0; div[i]; i++){
    div_dict[div[i].divisionId] = div[i].divisionName;
  }
}

function getUserID(name, type){
  if(type==1){
    httpDo(
      userURL+name,
      {
        method: 'GET',
        // Other Request options, like special headers for apis
        headers: { Authorization: apikey},
        datatype: "json"
      },
      function(res) {
        let userinfo=res;
        console.log(userinfo);
        console.log(typeof userinfo);
        if(userinfo){
          userinfo = JSON.parse(userinfo);
          console.log(userinfo);
          myID = userinfo.accessId;
        }
      }
    );
  }
  if(type==2){
    httpDo(
      userURL+name,
      {
        method: 'GET',
        // Other Request options, like special headers for apis
        headers: { Authorization: apikey},
        datatype: "json"
      },
      function(res) {
        let userinfo=res;
        console.log(userinfo);
        console.log(typeof userinfo);
        if(userinfo){
          userinfo = JSON.parse(userinfo);
          accessid = userinfo.accessId;
        }
        else accessid = "ㅓ";
      }
    );
  }
}

function getmyMatch(myID, type){
  httpDo(
    matchURL1+myID+matchURL2,
    {
      method: 'GET',
      // Other Request options, like special headers for apis
      headers: { Authorization: apikey},
      datatype: "json"
    },
    function(res) {
      if(type==1){
        matchList = JSON.parse(res);
        console.log(matchList);
      }
      if(type==2){
        us_matchList = JSON.parse(res);
        console.log(us_matchList);
      }
    }
  );
}

function makePlayer(){
  let t = 0;
  let bfpList;
  for(let i=0; i<5; i++){
    httpDo(
      "https://api.nexon.co.kr/fifaonline4/v1.0/matches/"+matchList[i],
      {
        method: 'GET',
        datatype: "json",
        headers: { Authorization: apikey}
      },
      function(res) {
        let matchinfo = JSON.parse(res);
        let playerlist;
        if(matchinfo.matchInfo[0].accessId == myID) playerlist = matchinfo.matchInfo[0].player;
        else playerlist = matchinfo.matchInfo[1].player;
        console.log(i, playerlist);
        if(playerlist.length == 0) return;
        if(t==0){
          console.log(i);
          bfpList = playerlist;
          playerL1 = JSON.parse(JSON.stringify(playerlist));
          t+=1;
        }
        if(t==1){
          if(bfpList != playerlist){
            console.log(i);
            bfpList = playerlist;
            playerL2 = JSON.parse(JSON.stringify(playerlist));
            //console.log(playerL2);
            t+=1;
          }
        }
        if(t==2){
          if(bfpList != playerlist){
            console.log(i);
            bfpList = playerlist;
            playerL3 = JSON.parse(JSON.stringify(playerlist));
            //console.log(playerL3);
            t+=1;
          }
        }
        if(t==3){
          if(bfpList != playerlist){
            console.log(i);
            bfpList = playerlist;
            playerL4 = JSON.parse(JSON.stringify(playerlist));
            //console.log(playerL4);
            t+=1;
          }
        }
        if(t==4){
          if(bfpList != playerlist){
            console.log(i);
            bfpList = playerlist;
            playerL5 = JSON.parse(JSON.stringify(playerlist));
            t+=1;
          }
        }
      }
    );
  }
  setTimeout(function (){
      console.log("start");
      if(playerL1 != undefined) pL1();
      if(playerL2 != undefined) pL2();
      if(playerL3 != undefined) pL3();
      if(playerL4 != undefined) pL4();
      if(playerL5 != undefined) pL5();
      PLcal();
  },1000);
}

function pL1(){
  for(let i=0; i<18; i++){
    let p1 = JSON.parse(JSON.stringify(playerL1[i]));
    //console.log(p1);
    //console.log(playerList[111]);
    if(playerList[p1.spId] === undefined){
      playerList[p1.spId] = [p1.status,1,p1.spPosition];
      //console.log(p2[1]);
    }
    else{
      let p = JSON.parse(JSON.stringify(playerList[p1.spId]));
      let p2 = JSON.parse(JSON.stringify(p));
      //console.log(p2);
      p2[0].shoot += p1.status.shoot;
      p2[0].assist += p1.status.assist;
      p2[0].goal += p1.status.goal;
      p2[0].dribble += p1.status.dribble;
      p2[0].passTry += p1.status.passTry;
      p2[0].passSuccess += p1.status.passSuccess;
      p2[0].block += p1.status.block;
      p2[0].tackle += p1.status.tackle;
      p2[0].spRating += p1.status.spRating;
      p2[1] += 1;
      playerList[p1.spId] = [p2[0],p2[1],p2[2]];
    }
  }
  let pp = JSON.parse(JSON.stringify(playerList));
  console.log(pp);
}

function pL2(){
  for(let i=0; i<18; i++){
    let p1 = JSON.parse(JSON.stringify(playerL2[i]));
    //console.log(p1);
    if(playerList[p1.spId] === undefined){
      playerList[p1.spId] = [p1.status,1,p1.spPosition];
      //console.log(p2[1]);
    }
    else{
      let p = JSON.parse(JSON.stringify(playerList[p1.spId]));
      let p2 = JSON.parse(JSON.stringify(p));
      p2[0].shoot += p1.status.shoot;
      p2[0].assist += p1.status.assist;
      p2[0].goal += p1.status.goal;
      p2[0].dribble += p1.status.dribble;
      p2[0].passTry += p1.status.passTry;
      p2[0].passSuccess += p1.status.passSuccess;
      p2[0].block += p1.status.block;
      p2[0].tackle += p1.status.tackle;
      p2[0].spRating += p1.status.spRating;
      p2[1] += 1;
      playerList[p1.spId] = [p2[0],p2[1],p2[2]];
    }
  }
  let pp = JSON.parse(JSON.stringify(playerList));
  console.log(pp);
}

function pL3(){
  for(let i=0; i<18; i++){
    let p1 = JSON.parse(JSON.stringify(playerL3[i]));
    if(playerList[p1.spId] === undefined){
      playerList[p1.spId] = [p1.status,1,p1.spPosition];
      //console.log(p2[1]);
    }
    else{
      let p = JSON.parse(JSON.stringify(playerList[p1.spId]));
      let p2 = JSON.parse(JSON.stringify(p));
      //console.log(p2);
      p2[0].shoot += p1.status.shoot;
      p2[0].assist += p1.status.assist;
      p2[0].goal += p1.status.goal;
      p2[0].dribble += p1.status.dribble;
      p2[0].passTry += p1.status.passTry;
      p2[0].passSuccess += p1.status.passSuccess;
      p2[0].block += p1.status.block;
      p2[0].tackle += p1.status.tackle;
      p2[0].spRating += p1.status.spRating;
      p2[1] += 1;
      playerList[p1.spId] = [p2[0],p2[1],p2[2]];
    }
  }
  let pp = JSON.parse(JSON.stringify(playerList));
  console.log(pp);
}

function pL4(){
  for(let i=0; i<18; i++){
    let p1 = JSON.parse(JSON.stringify(playerL4[i]));
    if(playerList[p1.spId] === undefined){
      playerList[p1.spId] = [p1.status,1,p1.spPosition];
      //console.log(p2[1]);
    }
    else{
      let p = JSON.parse(JSON.stringify(playerList[p1.spId]));
      let p2 = JSON.parse(JSON.stringify(p));
      //console.log(p2);
      p2[0].shoot += p1.status.shoot;
      p2[0].assist += p1.status.assist;
      p2[0].goal += p1.status.goal;
      p2[0].dribble += p1.status.dribble;
      p2[0].passTry += p1.status.passTry;
      p2[0].passSuccess += p1.status.passSuccess;
      p2[0].block += p1.status.block;
      p2[0].tackle += p1.status.tackle;
      p2[0].spRating += p1.status.spRating;
      p2[1] += 1;
      playerList[p1.spId] = [p2[0],p2[1],p2[2]];
    }
  }
  let pp = JSON.parse(JSON.stringify(playerList));
  console.log(pp);
}

function pL5(){
  for(let i=0; i<18; i++){
    let p1 = JSON.parse(JSON.stringify(playerL5[i]));
    if(playerList[p1.spId] === undefined){
      playerList[p1.spId] = [p1.status,1,p1.spPosition];
      //console.log(p2[1]);
    }
    else{
      let p = JSON.parse(JSON.stringify(playerList[p1.spId]));
      let p2 = JSON.parse(JSON.stringify(p));
      p2[0].shoot += p1.status.shoot;
      p2[0].assist += p1.status.assist;
      p2[0].goal += p1.status.goal;
      p2[0].dribble += p1.status.dribble;
      p2[0].passTry += p1.status.passTry;
      p2[0].passSuccess += p1.status.passSuccess;
      p2[0].block += p1.status.block;
      p2[0].tackle += p1.status.tackle;
      p2[0].spRating += p1.status.spRating;
      p2[1] += 1;
      playerList[p1.spId] = [p2[0],p2[1],p2[2]];
    }
  }
  let pp = JSON.parse(JSON.stringify(playerList));
  console.log(pp);
}

function PLcal() {
  for(var k in playerList){
    let p = playerList[k];
    p[0].shoot /= p[1];
    p[0].assist /= p[1];
    p[0].goal /= p[1];
    p[0].dribble /= p[1];
    p[0].passTry /= p[1];
    p[0].passSuccess /= p[1];
    p[0].block /= p[1];
    p[0].tackle /= p[1];
    p[0].spRating /= p[1];
    playerList[k] = [p[0],p[1],p[2]];
  }
  console.log(playerList);
}

function makepList(){
  let gknum=0;
  let dfnum=0;
  let mfnum=0;
  let fwnum=0;
  let subnum=0;
  for(var key in playerList){
    let nkey = parseInt(key);
    if(sppo_dict.get(playerList[nkey][2])=="GK"){
      let p = new Player(nkey,playerList[nkey][2],playerList[nkey][0],gknum++);
      gkList.push(p);
    }
    if(sppo_dict.get(playerList[nkey][2])=="SW" || sppo_dict.get(playerList[nkey][2])=="RWB" || sppo_dict.get(playerList[nkey][2])=="RB"||
    sppo_dict.get(playerList[nkey][2])=="RCB" || sppo_dict.get(playerList[nkey][2])=="CB" || sppo_dict.get(playerList[nkey][2])=="LCB"
|| sppo_dict.get(playerList[nkey][2])=="LB" || sppo_dict.get(playerList[nkey][2])=="LWB"){
      let p = new Player(nkey,playerList[nkey][2],playerList[nkey][0],dfnum++);
      dfList.push(p);
    }
    if(sppo_dict.get(playerList[nkey][2])=="RDM" || sppo_dict.get(playerList[nkey][2])=="CDM" || sppo_dict.get(playerList[nkey][2])=="LDM"||
  sppo_dict.get(playerList[nkey][2])=="RM" || sppo_dict.get(playerList[nkey][2])=="RCM" || sppo_dict.get(playerList[nkey][2])=="CM"
|| sppo_dict.get(playerList[nkey][2])=="LCM" || sppo_dict.get(playerList[nkey][2])=="LM" || sppo_dict.get(playerList[nkey][2])=="RAM"
|| sppo_dict.get(playerList[nkey][2])=="CAM" || sppo_dict.get(playerList[nkey][2])=="LAM"){
      let p = new Player(nkey,playerList[nkey][2],playerList[nkey][0],mfnum++);
      mfList.push(p);
    }
    if(sppo_dict.get(playerList[nkey][2])=="RF" || sppo_dict.get(playerList[nkey][2])=="CF" || sppo_dict.get(playerList[nkey][2])=="LF"||
  sppo_dict.get(playerList[nkey][2])=="RW" || sppo_dict.get(playerList[nkey][2])=="RS" || sppo_dict.get(playerList[nkey][2])=="ST"
|| sppo_dict.get(playerList[nkey][2])=="LS" || sppo_dict.get(playerList[nkey][2])=="LW"){
      let p = new Player(nkey,playerList[nkey][2],playerList[nkey][0],fwnum++);
      fwList.push(p);
    }
    if(sppo_dict.get(playerList[nkey][2])=="SUB"){
      let p = new Player(nkey,playerList[nkey][2],playerList[nkey][0],subnum++);
      subList.push(p);
    }
  }
}

function getUserInfo(id){
  httpDo(
    "https://api.nexon.co.kr/fifaonline4/v1.0/users/"+id+"/maxdivision",
    {
      method: 'GET',
      // Other Request options, like special headers for apis
      headers: { Authorization: apikey},
      datatype: "json"
    },
    function(res) {
      let userdata = JSON.parse(res);
      userdiv = div_dict[parseInt(userdata[0].division)];
    }
  );
}

function getuserMatch(){
  let enemy = [];
  let result = [];
  let possession = [];
  let foul = [];
  let yellow = [];
  let red = [];
  for(let i=0; i<10; i++){
    httpDo(
      "https://api.nexon.co.kr/fifaonline4/v1.0/matches/"+us_matchList[i],
      {
        method: 'GET',
        datatype: "json",
        headers: { Authorization: apikey}
      },
      function(res) {
        let matchinfo = JSON.parse(res);
        //console.log(matchinfo);
        let match,ennum;
        if(matchinfo.matchInfo[0].accessId == accessid) match = matchinfo.matchInfo[0], ennum = 1;
        else match = matchinfo.matchInfo[1], ennum=0;
        enemy.push(matchinfo.matchInfo[ennum].nickname);
        result.push(match.matchDetail.matchResult);
        possession.push(match.matchDetail.possession);
        foul.push(match.matchDetail.foul);
        yellow.push(match.matchDetail.yellowCards);
        red.push(match.matchDetail.redCards);
      }
    );
  }
  console.log(result);
  table = new Table(enemy, result, possession, foul, yellow, red);
}
