# Dough

A starting point for a static JavaScript application. Ideal for projects that just require hosting off of Amazon S3. Includes development and production NPM scripts, an easy to understand folder hierarchy, and example code to get started quickly.

## First steps

You'll need [git](https://git-scm.com), [nodejs 6+](https://nodejs.org/en/) and [npm](https://docs.npmjs.com) installed. Then you'll need to perform these steps.

```sh
git clone git@github.com:meanjim/dough.git
cd dough
npm install -g gulp
npm install
npm start
```

## Production build

```sh
npm run build
```

Check your `/build` folder afterwards and celebrate.

## Toolchain

tool | description |
------ | ----------- |
[Babel](https://babeljs.io/) | Allows you to use new JavaScript features. |
[React](https://facebook.github.io/react/) | A powerful view library. |
[React Router](https://github.com/rackt/react-router) | The most popular clientside router for React. |
[Redux](http://redux.js.org/) | A popular implementation for managing state. |
[Gulp](http://gulpjs.com/) | A popular task runner for building assets. |
[SASS](http://sass-lang.com/) | A preprocessor more popular than [LESS](http://lesscss.org/). |
[Browserify](http://browserify.org/) | A popular tool for bundling imports/requires. |
[BrowserSync](https://www.browsersync.io/) | A nice tool for external device testing on the same network. |

# License

[MIT](LICENSE) © [Jimmy Lee](http://jimmyl.ee)
