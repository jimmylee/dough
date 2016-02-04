# Dough

A starting point and codebase skeleton to use for your projects. Uses [Babel](https://babeljs.io/), [React](https://facebook.github.io/react/)/[Redux](http://redux.js.org/), [React Router](https://github.com/rackt/react-router), [SASS](http://sass-lang.com/), [Gulp](http://gulpjs.com/) and [Browserify](http://browserify.org/) and a handful of helper libraries.

Use this at your next Hackathon! Or use this to learn more about the popular tools for 2016 web development.

[View a live demo.](http://redux-demo.jimmyl.ee)

## A really easy setup

You'll need [git](https://git-scm.com), [nodejs](https://nodejs.org/en/) and [npm](https://docs.npmjs.com) installed. Then you'll need to perform these steps.

```sh
git clone git@github.com:meanjim/dough.git
cd dough
npm install -g gulp
npm install
npm start
```

Tweet at [me](https://www.twitter.com/meanjim) if you have problems.

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

## Why now? Jim you hate [React](https://facebook.github.io/react/).

I don't hate [React](https://facebook.github.io/react/) and I deeply respect [Sebastian Markbage](https://youtu.be/4anAwXYqLG8).

I am a huge fan of small bundle sizes. So using [RiotJS](http://riotjs.com/) is really fun, and [Preact](https://github.com/developit/preact) is something I'm excited about. But regardless [React](https://facebook.github.io/react/) is a better tool for a different class of problems and worth mastering.

## Toolchain

tool | reasoning
------ | -----------
[Babel](https://babeljs.io/) | EcmaScript6 is worth it.
[React](https://facebook.github.io/react/) | There is value in being skilled at React.
[React Router](https://github.com/rackt/react-router) | This is a popular tool for client side routing.
[Redux](http://redux.js.org/) | This is my favorite implementation for how to manage state.
[Gulp](http://gulpjs.com/) | I have used Webpack too much so I switched my tool.
[SASS](http://sass-lang.com/) | A preprocessor more popular than [LESS](http://lesscss.org/). You could just use normal CSS too.
[Browserify](http://browserify.org/) | Popular too for bundling imports/requires.
[BrowserSync](https://www.browsersync.io/) | External IP Address for testing.

## Tribute Slanging

* [Rackt Consultants](https://github.com/rackt) is where I got started.

* [This Giant List](https://github.com/xgrommx/awesome-redux) is worth scanning through.

* From [HenrikJoreteg](https://github.com/HenrikJoreteg) I get inspired to keep building these seed projects. See his work with [Feather](https://github.com/HenrikJoreteg/feather-app).

* From [Jakemmarsh](https://github.com/jakemmarsh/react-rocket-boilerplate) I took some gulp inspiration from, his build process is very sane.

* From [Substack](https://github.com/substack/react-starter-hmr) I reminded myself of how simple things can be.

* I'm grateful for [Karen Liu](http://karenliu1.github.io/), [George Bonner](https://twitter.com/georgebonnr), and [Derek Reynolds](http://drk.es/) for keeping me sane during a technical debt war at work. So I thought I'd mention them here as a thanks.

# License

[MIT](LICENSE) © [Jimmy Lee](http://jimmyl.ee)
