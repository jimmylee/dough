# Dough

A starting point and codebase skeleton to use for your projects. Uses [Babel](https://babeljs.io/), [React](https://facebook.github.io/react/)/[Redux](http://redux.js.org/), [React Router](https://github.com/rackt/react-router), [SASS](http://sass-lang.com/), [Gulp](http://gulpjs.com/) and [Browserify](http://browserify.org/) and a handful of helper libraries.

[View the live demo.](http://redux-demo.jimmyl.ee)

## A really easy setup

You'll need [git](https://git-scm.com), [nodejs](https://nodejs.org/en/) and [npm](https://docs.npmjs.com) installed. Then you'll need to perform these steps.

```sh
git clone git@github.com:meanjim/dough.git
cd dough
npm install -g gulp
npm install
npm start
```

You can tweet at [me](https://www.twitter.com/meanjim) if you have problems.

## A really easy build process

```sh
npm run build
```

Check your `/build` folder afterwards and smile. Did you want to automate your deploys to something like S3? Look for `deploy-generated-assets.js`

```js
gulp.task('deploy-generated-assets', ['production'], function() {
  console.log('Deploy: No JavaScript deploy scripts, yet.');
});
```

You can add your deploy scripts here and propser.

## Toolchain

tool | reasoning
------ | -----------
[Babel](https://babeljs.io/) | EcmaScript2015 (EcmaScript6/7) is worth it to make your code look a little nicer.
[React](https://facebook.github.io/react/) | Powerful view library with a lot of hype so you have to learn it.
[React Router](https://github.com/rackt/react-router) | This is a popular tool for client side routing.
[Redux](http://redux.js.org/) | This is my favorite flux implementation for how to manage state.
[Gulp](http://gulpjs.com/) | I have used Webpack too much so I switched my tool.
[SASS](http://sass-lang.com/) | A preprocessor more popular than [LESS](http://lesscss.org/). You could just use normal CSS too.
[Browserify](http://browserify.org/) | Popular tool for bundling imports/requires.
[BrowserSync](https://www.browsersync.io/) | External IP Address for testing.

# License

[MIT](LICENSE) © [Jimmy Lee](http://jimmyl.ee)
