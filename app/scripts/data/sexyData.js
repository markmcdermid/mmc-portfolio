var icons = ['angular.png', 'aws.png', 'babel.png', 'bem.svg', 'bootstrap.png', 'css3.jpg', 'foundation.jpg', 'gulp.png', 'gradle.png', 'grunt.png', 'html5.png', 'java.png', 'jquery.png', 'js.png', 'lodash.png', 'mocha.svg', 'mongodb.png', 'mysql.png', 'nodejs.png', 'npm.png', 'php.svg', 'react.png', 'sass.png', 'webpack.png'];

const GRID_SIZE = Math.ceil(Math.sqrt(icons.length));
const DEG_TO_RAD = Math.PI / 180;

function getAdjustedGridDelta(col, row) {
  const dX = window.innerWidth / GRID_SIZE * col;
  const dY = window.innerHeight / GRID_SIZE * row;
  return { dX, dY };
}

const toRadians = (deg) => deg * DEG_TO_RAD;

function computeCircleDelta(i) {
  const RADIUS = 350;
  const SEPARATION_ANGLE = 360 / icons.length;
  const angle = i * SEPARATION_ANGLE;
  const dX = RADIUS * Math.cos(toRadians(angle)) + 50;
  const dY = RADIUS * Math.sin(toRadians(angle)) + 50;

  return {
    dX,
    dY
  }
}

function computeGridDelta(i) {
  const num = i + 1;
  const mod = num % GRID_SIZE;
  const col = mod === 0 ? GRID_SIZE : mod;
  const row = Math.ceil(num / GRID_SIZE);
  return getAdjustedGridDelta(col, row);
}

function getDeltas(type) {
  const compute = type === 'grid' ? computeGridDelta : computeCircleDelta;
  return icons.map((i, index) => compute(index));
}

const circleDeltas = getDeltas('circle');
console.log(circleDeltas);

const gridDeltas = getDeltas('grid');

function getRandomDelta() {
  const random = Math.floor(Math.random() * gridDeltas.length);
  return gridDeltas.splice(random, 1)[0];
}

const items = icons.map((icon, index) => {
  return {
    id: icon,
    imgSrc: `/media/images/skills/${icon}`,
    ...getRandomDelta(),
    circle: circleDeltas[index]
  };
});

console.log(items);

export default items;
