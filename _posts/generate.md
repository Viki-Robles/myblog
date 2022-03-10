---
title: Generate components automatically with plop.js
author: 'Vicky Vasilopoulou'
icon: ✅
---

Have you ever wished a way to generate the 'about' component, the 'home' component, the 'projects' component or any component, page, hook, icon, that has the same structure without repeating yourself over and over?

I didnt know that this amazing tool existed but I am so happy to share it with you and I hope it will bring you joy as it did to me.

The following example is to generate automatically components. If you want to create hook you need to create new folders and files as explained for the component example.

Here the plopJS comes to offer.
They call it `"micro-generator framework." `
[https://github.com/plopjs/plop]().

I am using TypeScript and NextJS for this project.

### Installation

```js
$ npm install --save-dev plop
```

### Create a plopfile.js at the root of your project

```js
const generateComponent = require('./generate/component');
const generateIcon = require('./generate/icon');
const generatePage = require('./generate/page');

module.exports = function (plop) {
  plop.setGenerator('component', generateComponent);
  plop.setGenerator('icon', generateIcon);
  plop.setGenerator('page', generatePage);
};
```

### On your package.json

```js
"new": "plop",
    "new:component": "plop component",
    "new:page": "plop page",
    "new:icon": "plop icon"
```

Create a folder at the root of your project named `generate` and inside another folder called `component`. Inside that folder create another folder called `templates` and a file name index.js (this file is outside of templates and inside component folder.).Check the picture below:

![Alt Text](/generate.png)

### For index.js

This index.js is the one you see above on the picture.

```js
module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the Component?",
      validate: function (value) {
        let message = true;
        if (!/.+/.test(value)) {
          message = console.error('Missing', 'you must define a component name');
        } else if (value.length < 3) {
          message = console.error('Too Short', `"${value}" is not descriptive enough`);
        }
        return message;
      },
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './generate/component/templates/component.hbs',
      },

      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.docs.mdx',
        templateFile: './generate/component/templates/docs.hbs',
      },
    ];
  },
};
```

##### Then inside the templates folder create a file named `component.hbs`. You can customise as much as you want your component.

```js
import React, { ReactNode } from 'react'
import { Box } from 'theme-ui'; export

interface {{pascalCase name}}Props { children: ReactNode }



export const {{pascalCase name}} = ({ children }: {{pascalCasename}}Props): JSX.Element => {
 return (
<Box>
  <Box>{{name}}</Box>
</Box>
 )}

```

#### Again in the same folder you can add a file named docs.hbs

```js
import { Story, Canvas } from '@storybook/addon-docs/blocks'
import { {{pascalCase name}} } from './{{pascalCase name}}'

{{pascalCase name}}. Give a description of what the component does

import { {{pascalCase name}} } from './components'

<{{pascalCase name}}>Some content</{{pascalCase name}}>
```

Now run the command and you should be able to see this:

![new](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kez7myfytgu3xfxsb19a.png)

The same process is if you want to create a page, a hook or icons.
