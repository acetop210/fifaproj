let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMzAyNDcxMzk4IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTkxNDQzNzEzLCJleHAiOjE2NTQ1MTU3MTMsImlhdCI6MTU5MTQ0MzcxM30.3udmK-WR4ohpfNL4tVLcN9swQE7b74tOUtMy63k1ZqQ";
let sppo;
function setup() {
  createCanvas(300, 300);
  sppo = loadJSON("https://static.api.nexon.co.kr/fifaonline4/latest/spposition.json");
}

function draw() {
  background(255);
  fill(0);
  text("Hello world",20,20);
  rect(100,100,30,30);
}
