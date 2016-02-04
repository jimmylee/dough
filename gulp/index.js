'use strict';

var fs = require('fs');
var path = require('path');
var useOnlyScripts = function(name) {
    return /(\.(js|coffee)$)/i.test(path.extname(name));
};
var tasks = fs.readdirSync('./gulp/tasks/').filter(useOnlyScripts);

tasks.forEach(function(task) {
    require('./tasks/' + task);
});
