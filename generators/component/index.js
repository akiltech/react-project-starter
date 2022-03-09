module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'folder in components',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/components/{{folder}}/{{pascalCase name}}/index.tsx',
      templateFile: 'generators/component/index.ts.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{folder}}/{{pascalCase name}}/{{properCase name}}.tsx',
      templateFile: 'generators/component/Component.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{folder}}/{{pascalCase name}}/{{properCase name}}.stories.tsx',
      templateFile: 'generators/component/Component.stories.tsx.hbs',
    },
  ],
};
