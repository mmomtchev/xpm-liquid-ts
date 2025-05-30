const { createRequire } = require("node:module");

module.exports = (root, plugin) => createRequire(root)(plugin)
