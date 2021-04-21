module.exports = {
  description: 'Generates new React page component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the page?",
      validate: function (value) {
        let message = true;
        if (!/.+/.test(value)) {
          message = console.error('Missing', 'you must define a page name');
        } else if (value.length < 3) {
          message = console.error('Too Short', `"${value}" is not descriptive enough`);
        }
        return message;
      },
    },
  ],
  actions: function () {
    return [
      // {
      //   type: 'add',
      //   path: 'src/pages/{{camelCase name}}/index.ts',
      //   templateFile: './generate/component/templates/index.hbs',
      // },
      {
        type: 'add',
        path: './pages/{{camelCase name}}.tsx',
        templateFile: './generate/page/templates/page.hbs',
      },
      // {
      //   type: 'add',
      //   path: 'src/pages/{{camelCase name}}/{{camelCase name}}.test.tsx',
      //   templateFile: './generate/component/templates/test.hbs',
      // },
      // {
      //   type: 'add',
      //   path: 'src/pages/{{camelCase name}}/{{camelCase name}}.docs.mdx',
      //   templateFile: './generate/component/templates/docs.hbs',
      // },
      // {
      //   type: 'modify',
      //   path: 'src/pages/index.ts',
      //   pattern: /(\/\* -- page: insert above here -- \*\/)/gi,
      //   template: `export { {{camelCase name}} } from './{{camelCase name}}'\n$1`,
      // },
    ];
  },
};
