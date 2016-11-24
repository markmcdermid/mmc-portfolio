var skills = [
  {
    icon: 'angular.png',
    name: 'Angular'
  },
  {
    icon: 'aws.png',
    name: 'AWS',
  },
  {
    icon: 'babel.png',
    name: 'ES6 & Babel'
  },
  {
    icon: 'bash.png',
    name: 'Bash'
  },
  {
    icon: 'bem.svg',
    name: 'BEM'
  },
  {
    icon: 'bootstrap.png',
    name: 'Bootstrap'
  },
  {
    icon: 'css3.jpg',
    name: 'CSS 3'
  },
  {
    icon: 'express.png',
    name: 'Express'
  },
  {
    icon: 'foundation.png',
    name: 'Foundation 4'
  },
  {
    icon: 'gulp.png',
    name: 'Gulp',
  },
  {
    icon: 'grunt.png',
    name: 'Grunt',
  },
  {
    icon: 'html5.png',
    name: 'HTML5',
  },
  {
    icon: 'java.png',
    name: 'Java',
  },
  {
    icon: 'jquery.png',
    name: 'Jquery',
  },
  {
    icon: 'js.png',
    name: 'Js',
  },
  {
    icon: 'lodash.png',
    name: 'Lodash',
  },
  {
    icon: 'mocha.svg',
    name: 'Mocha',
  },
  {
    icon: 'mongodb.png',
    name: 'Mongodb',
  },
  {
    icon: 'mysql.png',
    name: 'Mysql',
  },
  {
    icon: 'nodejs.png',
    name: 'Nodejs',
  },
  {
    icon: 'npm.png',
    name: 'NPM',
  },
  {
    icon: 'php.svg',
    name: 'PHP',
  },
  {
    icon: 'react.png',
    name: 'React',
  },
  {
    icon: 'redux.png',
    name: 'Redux',
  },
  {
    icon: 'sass.png',
    name: 'Sass',
  }
]

import config from 'config';

const GRID_SIZE = Math.ceil(Math.sqrt(skills.length));
const DEG_TO_RAD = Math.PI / 180;

const toRadians = (deg) => deg * DEG_TO_RAD;

function computeCircleDelta(i) {
  const RADIUS = 320;
  const SEPARATION_ANGLE = 360 / skills.length;
  const angle = i * SEPARATION_ANGLE;
  const dX = RADIUS * Math.cos(toRadians(angle)) + 50;
  const dY = RADIUS * Math.sin(toRadians(angle)) + 50;
  return { dX, dY };
}

function computeGridDelta(i) {
  const num = i + 1;
  const mod = num % GRID_SIZE;
  const col = mod === 0 ? GRID_SIZE : mod;
  const row = Math.ceil(num / GRID_SIZE);
  const dX = (window.innerWidth / GRID_SIZE * col) - config.CENTRE_X - (window.innerWidth / GRID_SIZE / 2);
  const dY = (window.screen.availHeight / GRID_SIZE * row) - config.CENTRE_Y - (window.innerHeight / GRID_SIZE / 2);
  return { dX, dY };
}

function getDeltas(type) {
  const compute = type === 'grid' ? computeGridDelta : computeCircleDelta;
  return skills.map((i, index) => compute(index));
}

const circleDeltas = getDeltas('circle');
const gridDeltas = getDeltas('grid');

function getRandomDelta() {
  const random = Math.floor(Math.random() * gridDeltas.length);
  return gridDeltas.splice(random, 1)[0];
}

const items = skills.map(({ icon, name }, index) => {
  return {
    name,
    imgSrc: `/media/images/skills/${icon}`,
    grid: gridDeltas[index],
    circle: circleDeltas[index]
  };
});

export default items;
