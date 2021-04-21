const generateComponent = require('./generate/component');
const generateIcon = require('./generate/icon');
const generatePage = require('./generate/page');

module.exports = function (plop) {
  plop.setGenerator('component', generateComponent);
  plop.setGenerator('icon', generateIcon);
  plop.setGenerator('page', generatePage);
};
