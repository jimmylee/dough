const desktopNotify = require('gulp-notify');

module.exports = (error) => {
  if( !global.isProduction ) {
    var args = Array.prototype.slice.call(arguments);

    desktopNotify.onError({
      title: 'Gulp Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
  } else {
    console.log(error);
    process.exit(1);
  }
};
