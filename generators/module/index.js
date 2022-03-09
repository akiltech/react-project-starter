module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your module name ?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/app/{{folder}}/{{pascalCase name}}/index.tsx',
      templateFile: 'generators/component/index.ts.hbs',
      skipIfExists: true,
    },
    {
      type: 'add',
      path: 'src/app/{{folder}}/{{pascalCase name}}/{{properCase name}}.tsx',
      templateFile: 'generators/component/Component.tsx.hbs',
    },
  ],
};
