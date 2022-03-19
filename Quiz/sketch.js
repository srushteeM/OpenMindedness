var title, q1, state, o1, o2, o3, o4, next;
function setup() {
  createCanvas(windowWidth - 6, windowHeight);
  title = createElement("h1", "QUIZ");
  state = 1;
  q1 = createElement("h1");
  o1 = createButton("");
  o2 = createButton("option2");
  o3 = createButton("option3");
  o4 = createButton("option4");
  next = createButton("NEXT");
}

function draw() {
  title.position(width / 2 - 50, 0);
  q1.html("q");
  q1.position(width / 2 - 600, 80);
  o1.position(width / 2 - 600, 200);
  o1.value("option")
  o1.style("width", "600px");
  o1.style("height", "50px");
  o2.position(width / 2 - 600, 280);
  o2.style("width", "600px");
  o2.style("height", "50px");
  o3.position(width / 2 - 600, 360);
  o3.style("width", "600px");
  o3.style("height", "50px");
  o4.position(width / 2 - 600, 440);
  o4.style("width", "600px");
  o4.style("height", "50px");

  next.position(width / 2 - 50, 540);
  next.style("width", "200px");
  next.style("height", "50px");

  next.mousePressed(() => {
    if (state <= 2) {
      state++;
      o1.style("backgroundColor", "white");
      o2.style("backgroundColor", "white");
      o3.style("backgroundColor", "white");
      o4.style("backgroundColor", "white");
    }
  });
  if (state === 1) {
    q1.html("Q1");

    o1.mousePressed(() => {
      o1.style("backgroundColor", "green");
    });
    o2.mousePressed(() => {
      o2.style("backgroundColor", "red");
    });
    o3.mousePressed(() => {
      o3.style("backgroundColor", "red");
    });
    o4.mousePressed(() => {
      o4.style("backgroundColor", "red");
    });
  }
  if (state === 2) {
    q1.html("Q2");
    o1.mousePressed(() => {
      o1.style("backgroundColor", "red");
    });
    o2.mousePressed(() => {
      o2.style("backgroundColor", "red");
    });
    o3.mousePressed(() => {
      o3.style("backgroundColor", "green");
    });
    o4.mousePressed(() => {
      o4.style("backgroundColor", "red");
    });
  }
  if (state === 3) {
    q1.html("END");
    q1.position(width / 2 - 50, height / 2 - 50);
    o1.hide();
    o2.hide();
    o3.hide();
    o4.hide();
    next.hide();
  }
}
