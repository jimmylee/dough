const fs = require('fs');
const path = require('path');
const useOnlyScripts = (name) => {
  return /(\.(js|coffee)$)/i.test(path.extname(name));
};
const tasks = fs.readdirSync('./gulp/tasks/').filter(useOnlyScripts);

tasks.forEach((task) => {
  require('./tasks/' + task);
});
