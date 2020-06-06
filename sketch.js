let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMzAyNDcxMzk4IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTkxNDQzNzEzLCJleHAiOjE2NTQ1MTU3MTMsImlhdCI6MTU5MTQ0MzcxM30.3udmK-WR4ohpfNL4tVLcN9swQE7b74tOUtMy63k1ZqQ";
let sppo, spid;

function preload(){
  sppo = loadJSON("fifaproj/jsons/spposition.json");
  spid = loadJSON("https://static.api.nexon.co.kr/fifaonline4/latest/spid.json");
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255);
  fill(0);
  text(sppo[0]["desc"],20,20);
  text(spid[3]["name"],20,60);
}
