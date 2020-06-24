let spid, sppo;
var pdict={};
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMzAyNDcxMzk4IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTkxNDQzNzEzLCJleHAiOjE2NTQ1MTU3MTMsImlhdCI6MTU5MTQ0MzcxM30.3udmK-WR4ohpfNL4tVLcN9swQE7b74tOUtMy63k1ZqQ";
var spid_dict = new p5.TypedDict();
var sppo_dict = new p5.TypedDict();
userURL = 'https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname='

const HTTP = 'https' + '://',
      CDN  = 'YaCDN.org/',
      PROX = 'proxy/', SERV = 'serve/',
      SITE = 'static.api.Nexon.co.kr/',
      FOLD = 'fifaonline4/latest/',
      FILE = 'spid.json',
      REMOTE = true, USE_PROXY = true, AS_PROXY = false,
      PROXY = USE_PROXY && HTTP + CDN + (AS_PROXY && PROX || SERV) || '',
      HEAD = REMOTE && PROXY;
      //PATH = REMOTE && PROXY + HTTP + SITE + FOLD + FILE;

function preload(){
  basedata();
}

function basedata(){
  spid = loadJSON("spid.json",'json');
  sppo = loadJSON("spposition.json",'json');
}

function dictMake(){
  for(var i=0; spid[i]; i++){
    spid_dict.create(spid[i].id, spid[i].name);
  }
  for(var i=0; sppo[i]; i++){
    sppo_dict.create(sppo[i].spposition, sppo[i].desc);
  }
}
