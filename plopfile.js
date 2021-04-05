const generateComponent = require('./generate/component');
const generatePage = require('./generate/page');
const generateIcon = require('./generate/icon');

module.exports = function (plop) {
  plop.setHelper('obj', (text) => `{{ ${text} }}`);
  plop.setHelper('propsHelper', (text) => `{${text}}`);

  plop.setGenerator('component', generateComponent);
  plop.setGenerator('page', generatePage);
  plop.setGenerator('icon', generateIcon);
};
