let walls;
let population;
let start;
let goal;
let nextGenButton;
const wallWidth = 10;
const dnaLength = 20;
const populationSize = 300;
const mutationRate = 0.02 ;

function setup() {
  createCanvas(500,300);
  start = new Vector(20, height/2);
  goal = new Vector(width-40, height/2);

  nextGenButton = createButton("Next generation");
  nextGenButton.mousePressed(nextGeneration);

  //create walls
  walls = [];
  let wallTop = new Wall(0,0, width, wallWidth);
  wallTop.name = "top";
  let wallBot = new Wall(0,height-wallWidth, width, wallWidth);
  wallBot.name = "bot";
  let wallRight = new Wall(width - wallWidth, wallWidth, wallWidth, height- (2*wallWidth));
  wallRight.name = "right"
  let wallLeft = new Wall(0, wallWidth, wallWidth, height- (2*wallWidth));
  wallLeft.name = "left";
  walls.push(wallTop, wallBot, wallRight, wallLeft);

  // let middlewall = new Wall((width - wallWidth)/3, 0, wallWidth, height*2/3);
  // let middlewall2 = new Wall((width - wallWidth)*2/3, height/3, wallWidth, height*2/3);
  // walls.push(middlewall, middlewall2);

  //create random population
  population = new Population(populationSize);
  population.createRandomPopulation();

  let genloop = setInterval(() => {
    console.log(population.winners);
    nextGeneration();
  }, 5000);


}

function draw() {
  background(100);
  //draw walls;
  walls.forEach((wall) => {
    wall.draw();
  });

  //draw organisms
  population.organisms.forEach((organism) => {
    organism.update();
    organism.draw();

  });
  push();
  fill(0,255,0);
  ellipse(goal.x, goal.y, 20);
  pop();

  // if (population.isDead()) {
  //   console.log(population.winners);
  //   nextGeneration();
  // }

}

function positionOverlapsWall(pos) {
  for (let i = 0; i < walls.length; i++) {

    let found = isPointInsideRectangle(pos,walls[i].position, walls[i].positionEnd);
    if (found) {
      return true;
    }

  }
  return false;
}

function nextGeneration() {
  const newPop = population.createNextGeneration();
  population = newPop;
}
