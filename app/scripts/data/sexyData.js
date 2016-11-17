var icons = ['angular.png', 'aws.png', 'babel.png', 'bem.svg', 'bootstrap.png', 'css3.jpg', 'foundation.jpg', 'gradle.jpg', 'grunt.png', 'html5.png', 'java.png', 'jquery.png', 'js.png', 'lodash.png', 'mocha.png', 'mongodb.png', 'mysql.png', 'nodejs.png', 'npm.png', 'php.svg', 'react.png', 'sass.png', 'webpack.png'];
const COLUMNS = 5;
const ROWS = Math.ceil(icons.length / COLUMNS);
function getDelta(col, row) {
  const x = window.innerWidth / COLUMNS * col;
  const y = window.innerHeight / ROWS * row;
  return { x, y };
}

const computeDelta = (i) => {
  const num = i + 1;
  const mod = num % ROWS;
  const col = mod === 0 ? COLUMNS : mod;
  const row = Math.ceil(num / COLUMNS);

  return getDelta(col, row);
};

const items = icons.map((i, index) => {
  const delta = computeDelta(index);

  console.log(delta);
  return {
    id: i,
    dX: delta.x,
    dY: delta.y,
    imgSrc: `/media/images/skills/${i}`
  };
});

console.log(items);

export default items;
