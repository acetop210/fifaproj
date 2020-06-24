var username;
var userinfo;
var userinfo2="";

function click1(){
  dis=1;
  console.log(dis);
}

function click2(){
  dis=2;
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

function click6(){
  if(dis==1){
    username = input.value();
    httpDo(
      userURL+username,
      {
        method: 'GET',
        // Other Request options, like special headers for apis
        headers: { Authorization: apikey},
        datatype: "json"
      },
      function(res) {
        userinfo=res;
        console.log(userinfo);
        console.log(typeof userinfo);
        for(var i=13; userinfo[i]!='\"'; i++){
          userinfo2 = userinfo2.concat(userinfo[i]);
        }
      }
    );
    setTimeout(function () {
      console.log(userinfo2);
    },500);
  }
}
