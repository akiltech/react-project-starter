const componentGenerator = require('./generators/component/index');
const moduleGenerator = require('./generators/module/index');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('module', moduleGenerator);
};
