let walls;
let population;
let start;
let goal;
const wallWidth = 5;
const dnaLength = 20;
const populationSize = 30;

function setup() {
  start = new Vector(20, 320);
  goal = new Vector(780, 320);
  createCanvas(800,640);

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

  //create random population
  population = new Population(30);
  population.createRandomPopulation();


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

}

function positionOverlapsWall(pos) {
  for (let i = 0; i < walls.length; i++) {

    let found = isPointInsideRectangle(walls[i].position, walls[i].positionEnd, pos);
    if (found) {
      return true;
    }

  }
  return false;
}
